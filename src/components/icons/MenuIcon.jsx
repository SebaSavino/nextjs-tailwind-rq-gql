import { useConfigStore } from '../../store/config'

export function MenuIcon () {
    const toggleSidebar = useConfigStore(state => state.toggleSidebar)

    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-zinc-900 cursor-pointer" viewBox="0 0 16 16" onClick={toggleSidebar}>
    <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
  </svg>
}
