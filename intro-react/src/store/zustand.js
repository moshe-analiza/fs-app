import { create } from 'zustand';

const useStore = create((set) => ({
    counter: 0,
    momo: "Momo",
    decCounter: () => set(state => ({ counter: state.counter - 1 })),
    increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
    resetCounter: () => set({ counter: 0 }),
    updateCounter: (newCounter) => set({ counter: newCounter }),
}))

export {
    useStore
}