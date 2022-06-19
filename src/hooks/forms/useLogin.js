import { useFormik } from 'formik'
import * as Yup from 'yup'

export function useLogin() {
    const initialValues = {
        password: '',
        email: '',
    }

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Debe ingresar un email válido')
            .required('El email es requerido'),
        password: Yup
            .string()
            .required('La clave es requerida')
            .min(5, 'La clave debe tener 5 o más caracteres')
    })

    const onSubmit = values => {
        console.log(values)
    }

    return useFormik({
        validationSchema,
        initialValues,
        onSubmit
    })
}