import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { register } from '../../plugins/axios/auth'
import * as notis from '../../utils/notifications'
import { useAuthStore } from '../../store/auth'

export function useRegister() {
    const {
        error,
        isError,
        isLoading,
        isSuccess,
        mutateAsync
    } = useMutation('register', register)

    const store = useAuthStore()

    const initialValues = {
        confirmPassword: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        dni: ''
    }

    const validationSchema = Yup.object({
        confirmPassword: Yup
            .string()
            .required('Debes confirmar la clave')
            .oneOf([Yup.ref('password')], 'Las claves no coinciden'),
        email: Yup
            .string()
            .email('Debe ingresar un email válido')
            .required('El email es requerido'),
        password: Yup
            .string()
            .required('La clave es requerida')
            .min(6, 'La clave debe tener 6 o más caracteres'),
        firstname: Yup
            .string()
            .required('El nombre es requerido'),
        lastname: Yup
            .string()
            .required('El apellido es requerido'),
        dni: Yup
            .number()
            .required('El DNI es requerido'),
        phone: Yup.number()
    })

    const onSubmit = async values => {
        try {
            const user = await mutateAsync(values)
            notis.minimal(`Bienvenido ${values.firstname}!`)

            store.setUser(user)
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