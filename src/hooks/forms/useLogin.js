import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as notis from '../../utils/notifications'
import { login } from '../../plugins/axios/auth'

export function useLogin() {
    const {
        error,
        isError,
        isLoading,
        isSuccess,
        mutateAsync
    } = useMutation('login', login)

    const initialValues = {
        password: '',
        email: ''
    }

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Debe ingresar un email válido')
            .required('El email es requerido'),
        password: Yup
            .string()
            .required('La clave es requerida')
            .min(6, 'La clave debe tener 6 o más caracteres')
    })

    const onSubmit = async values => {
        try {
            const user = await mutateAsync(values)
            notis.minimal(`Bienvenido ${user.firstname}!`)
        } catch (error) {
            console.log('hook',error)
            notis.minimal(error.message, notis.types.error)
        }
    }

    const form = useFormik({
        validationSchema,
        initialValues,
        onSubmit
    })

    return {
        ...form,
        request: {
            error,
            isError,
            isLoading,
            isSuccess
        }
    }
}