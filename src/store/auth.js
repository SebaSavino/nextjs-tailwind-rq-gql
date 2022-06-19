import create from 'zustand'

export const useAuthStore = create(set => ({
    user: null,
    isAuth: false,
    setUser: payload => set({ isAuth: true, user: payload })
}))
