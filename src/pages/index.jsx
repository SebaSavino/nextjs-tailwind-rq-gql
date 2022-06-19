import { AdminLayout } from '../layouts/AdminLayout'
import { useAuthStore } from '../store/auth'

export default function Home() {
  const auth = useAuthStore()
  return (
    <AdminLayout page='Dashboard'>
      <div className="">
        <h1>Holaa</h1>
        <p>{JSON.stringify(auth)}</p>
      </div>
    </AdminLayout>
  )
}
