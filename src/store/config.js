import create from 'zustand'

export const useConfigStore = create(set => ({
    theme: 'light',
    openSidebar: true,
    toggleSidebar:() => set(state => ({
        openSidebar: !state.openSidebar
    }))
}))
