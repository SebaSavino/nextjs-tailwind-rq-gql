import Head from 'next/head'
import { Footer } from '../components/Footer'

export function AuthLayout({ children, page }) {

    return <>
        <Head>
            <title>{page}</title>
        </Head>

        <div className='min-h-screen bg-gradient-blue flex flex-col justify-between'>
            <main className='flex-1 flex items-center justify-center'>
                <div>
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    </>
}
