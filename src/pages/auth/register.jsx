import { useRouter } from 'next/router'

import { AuthForm } from '../../components/AuthForm'
import { AuthLayout } from '../../layouts/AuthLayout'
import { FormError } from '../../components/ui/FormError'
import { useRegister } from '../../hooks/forms/useRegister'

export default function RegisterPage() {
    const router = useRouter()
    const form = useRegister()

    if (form.request.isSuccess) {
        router.push('/')
    }

    return <AuthLayout page='Crear cuenta'>
        <AuthForm
            redirectMsg='¿Ya tienes una cuenta?'
            isLoading={form.request.isLoading}
            handleSudmit={form.handleSubmit}
            page='Crear cuenta en el sistema'
            redirectPath='/auth/login'
            btnText='Registrarse'
        >

            {form.request.isError && (
                <FormError
                    error={form.request.error.message}
                />
            )}

            < div className='mb-5'>
                <label className='form-label' htmlFor='firstname'>
                    Nombre <span className='text-red-700'>*</span>
                </label>

                {form.touched.firstname && form.errors.firstname &&
                    <FormError error={form.errors.firstname} />}

                <input
                    type='text'
                    id='firstname'
                    name='firstname'
                    className='form-input'
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.firstname}
                    placeholder='Ingrese su nombre'
                />
            </div>

            <div className='mb-5'>
                <label className='form-label' htmlFor='lastname'>
                    Apellido <span className='text-red-700'>*</span>
                </label>

                {form.touched.lastname && form.errors.lastname &&
                    <FormError error={form.errors.lastname} />}

                <input
                    type='text'
                    id='lastname'
                    name='lastname'
                    className='form-input'
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.lastname}
                    placeholder='Ingrese su apellido'
                />
            </div>

            <div className='mb-5'>
                <label className='form-label' htmlFor='dni'>
                    DNI <span className='text-red-700'>*</span>
                </label>

                {form.touched.dni && form.errors.dni &&
                    <FormError error={form.errors.dni} />}

                <input
                    id='dni'
                    name='dni'
                    type='number'
                    className='form-input'
                    value={form.values.dni}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    placeholder='Ingrese su documento'
                />
            </div>

            <div className='mb-5'>
                <label className='form-label' htmlFor='phone'>
                    Teléfono
                </label>

                {form.touched.phone && form.errors.phone &&
                    <FormError error={form.errors.phone} />}

                <input
                    id='phone'
                    name='phone'
                    type='number'
                    className='form-input'
                    onBlur={form.handleBlur}
                    value={form.values.phone}
                    onChange={form.handleChange}
                    placeholder='Ingrese su telefono si poseé uno'
                />
            </div>

            <div className='mb-5'>
                <label className='form-label' htmlFor='email'>
                    Email <span className='text-red-700'>*</span>
                </label>

                {form.touched.email && form.errors.email &&
                    <FormError error={form.errors.email} />}

                <input
                    id='email'
                    type='email'
                    name='email'
                    className='form-input'
                    onBlur={form.handleBlur}
                    value={form.values.email}
                    onChange={form.handleChange}
                    placeholder='Ingrese su correo electronico'
                />
            </div>

            <div className='mb-5'>
                <label className='form-label' htmlFor='password'>
                    Clave <span className='text-red-700'>*</span>
                </label>

                {form.touched.password && form.errors.password &&
                    <FormError error={form.errors.password} />}

                <input
                    id='password'
                    type='password'
                    name='password'
                    className='form-input'
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.password}
                    placeholder='Ingrese su clave'
                />

            </div>

            <div className='mb-5'>
                <label className='form-label' htmlFor='confirmPassword'>
                    Confirmar clave <span className='text-red-700'>*</span>
                </label>

                {form.touched.confirmPassword && form.errors.confirmPassword &&
                    <FormError error={form.errors.confirmPassword} />}

                <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    className='form-input'
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.confirmPassword}
                    placeholder='Ingrese su clave nuevamente'
                />

            </div>
        </AuthForm>
    </AuthLayout >
}