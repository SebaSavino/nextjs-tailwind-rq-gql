import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowIcon } from './icons/ArrowIcon'

const routes = [
    {
        path: '/',
        display: 'Dashboard'
    },
    {
        path: '/orders',
        display: 'Pedidos'
    },
    {
        path: '/products',
        display: 'Productos'
    }
]

export function Sidebar() {
    const router = useRouter()

    return <aside className='bg-gradient-blue sm:w-1/5 lg:w-1/6 sm:min-h-screen shadow-md'>
        <div className='p-5'>
            <p className='text-white text-2xl font-black text-center'>
                ADMIN
            </p>

            <nav className='mt-10 list-none'>
                {
                    routes.map((route, index) => (
                        <li
                            key={index}
                            className={`
                        p-2
                        my-2
                        rounded-lg
                        ${router.pathname === route.path && 'bg-gradient-red'}
                        `}
                        >
                            <Link href={route.path}>
                                <a className='text-white font-medium block'>
                                    <div className='flex gap-2 items-center'>
                                        {router.pathname === route.path && <ArrowIcon />}
                                        {route.display}
                                    </div>
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </nav>
        </div>
    </aside>
}
