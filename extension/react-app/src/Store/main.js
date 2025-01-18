import { create } from 'zustand'

export const mainStore = create((set) => ({
    userInfo: null,
    account: null,
    blurImage: false,
    lastRequest: null,
    mobileApp: '',
    totalRemoved: 0,
    totalImageMasked: 0,

    runningMode: null,

    setMobileApp: (data) => set({ mobileApp: data }),
    incrementTotalRemoved: () => set((state) => ({ totalRemoved: state.totalRemoved + 1 })),
    incrementTotalImageMasked: () => set((state) => ({ totalImageMasked: state.totalImageMasked + 1 })),

    setAccount: (data) => set(() => ({ account: data })),
    setUserInfo: (data) => set(() => ({ userInfo: data })),
    setBlurImage: (data) => set(() => ({ blurImage: data })),
    setRunningMode: (data) => set(() => ({ runningMode: data })),
    setLastRequest: (data) => set(() => ({ lastRequest: data })),
}))