import { create } from 'zustand';

export const useYogaStore = create((set) => ({

    headerBg: false,
    loading: false,
    error: null,
    showCTAPopup: false, 
    scrollToContact: false,
    scrollToOverview: false,
    showCTA: false,
    isOpen: false,
    

    setHeaderBg: (input) => set({ headerBg: input }),
    setShowCTA: (input) => set({ showCTA: input}),
    setIsOpen: (input) => set({ isOpen: input })
}))