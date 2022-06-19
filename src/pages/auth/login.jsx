import { AuthLayout } from '../../layouts/AuthLayout';
import { AuthForm } from '../../components/AuthForm';

export default function LoginPage() {

    return <AuthLayout page='Iniciar Sesión'>
        <AuthForm 
            redirectMsg='¿Aún no tienes una cuenta?'
            page='Iniciar sesión en el sistema'
            redirectPath='/auth/register'
            btnText='Ingresar'
        >
            <div className='mb-5'>
                <label className='form-label' htmlFor='email'>
                    Email <span className='text-red-700'>*</span>
                </label>

                <input
                    id='email'
                    type='email'
                    className='form-input'
                    placeholder='Ingrese su correo electronico'
                />
            </div>

            <div className='mb-5'>
                <label className='form-label' htmlFor='clave'>
                    Clave <span className='text-red-700'>*</span>
                </label>

                <input
                    id='clave'
                    type='password'
                    className='form-input'
                    placeholder='Ingrese su clave'
                />
            </div>
        </AuthForm>
    </AuthLayout>
}