import { useQuery } from 'react-query'

import { AdminLayout } from '../../layouts/AdminLayout'
import { getProducts } from '../../plugins/graphql/products'

export default function ProductsPage() {
    const { isFetching, isError, data } = useQuery('getProducts', getProducts)

    return <AdminLayout page='Products'>
        <h1>Productos</h1>

        <table className='table-auto shadow-sm mt-10 w-full w-lg rounded overflow-hidden'>
            <thead className='bg-zinc-900 border-b-4 border-red-700'>
                <tr className='text-white'>
                    <th className='w-1/5 py-2'>ID</th>
                    <th className='w-1/5 py-2'>Nombre</th>
                    <th className='w-1/5 py-2'>Stock</th>
                    <th className='w-1/5 py-2'>Precio</th>
                    <th className='w-1/5 py-2'></th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {data && data.map(product => (
                    <tr key={product._id}>
                        <th className='w-1/5 px-4 py-2'>{product._id}</th>
                        <th className='w-1/5 px-4 py-2'>{product.name}</th>
                        <th className='w-1/5 px-4 py-2'>{product.stock}</th>
                        <th className='w-1/5 px-4 py-2'>{product.price}</th>
                        <th className='w-1/5 px-4 py-2'></th>
                    </tr>
                ))}
            </tbody>
        </table>
    </AdminLayout>
}
