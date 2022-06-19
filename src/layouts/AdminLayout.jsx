import Head from 'next/head'

import shallow from 'zustand/shallow'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { useConfigStore } from '../store/config'
import { validateToken } from '../plugins/axios/auth'

export function AdminLayout({ children, page }) {
    const {
        isError,
        isFetched
    } = useQuery('validateToken', validateToken, {
        retry: 0
    })

    const openSidebar = useConfigStore(state => state.openSidebar, shallow)
    const router = useRouter()

    if (isError) {
        router.push('/auth/login')
        return <div className='min-h-screen bg-gradient-blue' />
    }

    return <>
        <Head>
            <title>{page}</title>
        </Head>

        <div className='min-h-screen bg-palette-one-white'>
            <div className='flex min-h-screen'>
                {openSidebar && <Sidebar />}

                <div className={`flex flex-col justify-between ${openSidebar ? 'sm:w-4/5 lg:w-4/6' : 'w-full'} sm:min-h-screen`}>
                    {isFetched && <Navbar />}

                    <main className='flex-1 p-5'>
                        {isFetched && <>
                            {children}
                        </>}
                    </main>

                    <Footer dark />
                </div>
            </div>

        </div>
    </>
}
