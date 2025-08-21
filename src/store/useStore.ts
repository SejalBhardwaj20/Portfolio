import { create } from 'zustand';

interface AppStore {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  cursorPosition: { x: number; y: number };
  setCursorPosition: (position: { x: number; y: number }) => void;
}

export const useStore = create<AppStore>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  cursorPosition: { x: 0, y: 0 },
  setCursorPosition: (position) => set({ cursorPosition: position }),
}));