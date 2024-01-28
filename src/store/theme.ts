import { create } from 'zustand';

// 스토어의 상태에 대한 인터페이스 정의
interface ThemeState {
    isDarkMode: boolean;
    setDarkMode: (isDark: boolean) => void;
}

// 스토어 생성
export const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: false, // 초기 다크 모드 상태는 false로 설정
    setDarkMode: (isDark: boolean) => set(() => ({ isDarkMode: isDark })),
}));
