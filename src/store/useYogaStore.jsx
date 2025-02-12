import { create } from 'zustand';

export const useYogaStore = create((set) => ({

    headerBg: false,
    loading: false,
    error: null,
    showCTAPopup: false, 
    scrollToContact: false,
    scrollToOverview: false,
    

    setHeaderBg: (input) => set({ headerBg: input }),
}))