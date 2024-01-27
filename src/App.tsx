import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import theme from './theme'; // theme 객체 임포트
import { useThemeStore } from './store';

function App() {
    const { isDarkMode } = useThemeStore(); // 스토어에서 isDarkMode 상태 사용

    // 현재 테마 모드에 따라 theme 객체 내의 적절한 테마 선택
    const currentTheme = isDarkMode ? theme.colors.dark : theme.colors.default;

    return (
        <ThemeProvider theme={{ ...theme, colors: currentTheme }}>
            <GlobalStyle />
            {/* 나머지 컴포넌트들 */}
        </ThemeProvider>
    );
}

export default App;
