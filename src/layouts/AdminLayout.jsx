import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Sidebar } from '../components/Sidebar'

export function AdminLayout({ children, page }) {

    return <>
        <Head>
            <title>{page}</title>
        </Head>

        <div className='min-h-screen bg-palette-one-white'>
            <div className='flex min-h-screen'>
                <Sidebar />

                <div className='flex-1 flex flex-col justify-between sm:w-4/5 lg:w-4/6 sm:min-h-screen p-5'>
                    <main>
                        {children}
                    </main>
                    <Footer dark />
                </div>
            </div>

        </div>
    </>
}
