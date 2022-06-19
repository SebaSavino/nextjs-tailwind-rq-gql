import { useRouter } from 'next/router';

import { AuthLayout } from '../../layouts/AuthLayout';
import { AuthForm } from '../../components/AuthForm';
import { useLogin } from '../../hooks/forms/useLogin'
import { FormError } from '../../components/ui/FormError';

export default function LoginPage() {
    const router = useRouter()
    const form = useLogin()

    if (form.request.isSuccess) {
        router.push('/')
    }

    return <AuthLayout page='Iniciar Sesión'>
        <AuthForm
            redirectMsg='¿Aún no tienes una cuenta?'
            page='Iniciar sesión en el sistema'
            isLoading={form.request.isLoading}
            handleSudmit={form.handleSubmit}
            redirectPath='/auth/register'
            btnText='Ingresar'
        >

            {form.request.isError && (
                <FormError
                    error={form.request.error.message}
                />
            )}

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
        </AuthForm>
    </AuthLayout>
}