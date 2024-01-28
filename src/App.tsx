import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import theme from './theme'; // theme 객체 임포트
import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '~/pages/home/HomePage';
import { useThemeStore } from '~/store';
import { queryClient } from '~/utils/queryClient';

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
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={{ ...theme, colors: currentTheme }}>
                <GlobalStyle />

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
