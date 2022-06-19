import { AxiosError } from 'axios'
import { httpClient } from './client'

function saveAuthInLS({ user, token }) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export async function register(form) {
    try {
        const response = await httpClient.post('/users/auth/register', form)
        const token = response.data.data.token
        const user = response.data.data.user
        saveAuthInLS({ user, token })
        return user
    } catch (error) {
        console.error(error)

        if (error instanceof AxiosError) {
            const response = error.response.data.error

            if (Array.isArray(response)) {
                throw new Error(response.map(e => e.msg).join(', '))
            }

            throw new Error(response)
        }

        throw new Error('Hubo un error registrando la cuenta')
    }
}

export async function login(credentials) {
    try {
        const response = await httpClient.post('/users/auth/login', credentials)
        const token = response.data.data.token
        const user = response.data.data.user
        saveAuthInLS({ user, token })
        return user
    } catch (error) {
        console.error(error)

        if (error instanceof AxiosError) {
            const response = error.response.data.error

            if (Array.isArray(response)) {
                throw new Error(response.map(e => e.msg).join(', '))
            }

            throw new Error(response)
        }

        throw new Error('Hubo un error iniciando sesión')
    }
}

export async function validateToken() {
    try {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        if (!token || !user) {
            throw new Error('Es requerido una nueva autenticación')
        }

        await httpClient('/users/auth/validate', {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        return JSON.parse(user)
    } catch (error) {
        console.log(error)
        throw new Error('Hubo un error validando la sesión')
    }
}
