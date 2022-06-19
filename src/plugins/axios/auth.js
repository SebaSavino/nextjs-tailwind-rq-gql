import { AxiosError } from 'axios'
import { httpClient } from './client'

export async function register(user) {
    try {
        const { data } = await httpClient.post('/users/auth/register', user)
        localStorage.setItem('token', data.data.token)

        return data.data.user
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
