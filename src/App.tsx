import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import theme from './theme'; // theme 객체 임포트
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '~/pages/home/HomePage';

import { useThemeStore } from './store';

function App() {
    const { isDarkMode, setDarkMode } = useThemeStore((state) => ({
        isDarkMode: state.isDarkMode,
        setDarkMode: state.setDarkMode,
    }));

    useEffect(() => {
        const matchDark = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            setDarkMode(!!e.matches);
        };

        setDarkMode(!!matchDark);

        matchDark.addEventListener('change', handleChange);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            matchDark.removeEventListener('change', handleChange);
        };
    }, [setDarkMode]);

    const currentTheme = isDarkMode ? theme.colors.dark : theme.colors.default;

    return (
        <ThemeProvider theme={{ ...theme, colors: currentTheme }}>
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
