import Link from 'next/link'
import { GradientText } from "./ui/GradientText"

export function AuthForm(
    {
        children,
        page,
        btnText,
        isLoading,
        redirectPath,
        redirectMsg,
        handleSudmit
    }
) {

    return <div className='flex justify-center mt-5'>
        <div className='bg-gradient-to-t from-gray-300 to-gray-100 w-96 max-w-sm p-5 rounded shadow'>

            <GradientText content='ROUSS' />
            <p className='text-center font-semibold'>{page}</p>

            <form className='mt-5' onSubmit={handleSudmit}>
                {children}

                <div className='text-center'>
                    <button
                        type='submit'
                        className='
                                bg-gradient-red
                                font-semibold
                                text-white
                                shadow-sm
                                rounded
                                w-full
                                mt-2
                                py-2
                            '
                    >
                        {isLoading ? 'Enviando...' : btnText}
                    </button>
                </div>

                <div className='text-center font-semibold mt-5 text-gray-500'>
                    <Link href={redirectPath}>
                        <a>
                            {redirectMsg}
                        </a>
                    </Link>
                </div>
            </form>
        </div>
    </div>
}