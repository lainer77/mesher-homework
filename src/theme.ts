/* eslint-disable perfectionist/sort-objects */

const theme = {
    colors: {
        dark: {
            neutral1: '#222',
            neutral2: '#7d7d7d',
            neutral3: '#cecece',
            surface1: '#fff',
            surface2: '#f9f9f9',
            surface3: '#e6e6e6', // 임의의 색상 값
            surface4: '#dddddd', // 임의의 색상 값
            surface5: '#cccccc', // 임의의 색상 값
            accent1: '#fc72ff',
            accent2: '#ffefff',
            scrim: 'rgba(0,0,0,0.60)',
            success: '#40b66b',
            critical: '#ff5f52',
            white: '#FFFFFF',
            gold: '#b17900',
            violet: '#7a7beb',
            shadowDrop: '0px 4px 16px rgba(251,17,142,0.4)',
            shadowMenu: '0px 10px 30px rgba(0,0,0,0.1)',
            shadowElevation: '0px 4px 16px rgba(70,115,250,0.4)',
            shadowTooltip: '0px 4px 16px rgba(10,10,59,0.2)',
        },
        default: {
            neutral1: '#e1e1e1', // 임의의 색상 값
            neutral2: '#c7c7c7', // 임의의 색상 값
            neutral3: '#adadad', // 임의의 색상 값
            surface1: '#333',
            surface2: '#444', // 임의의 색상 값
            surface3: '#555', // 임의의 색상 값
            surface4: '#666', // 임의의 색상 값
            surface5: '#777', // 임의의 색상 값
            accent1: '#c472ff', // 임의의 색상 값
            accent2: '#efefff', // 임의의 색상 값
            scrim: 'rgba(0,0,0,0.80)', // scrim의 opacity를 다크 모드에 맞게 조정
            success: '#3da66b', // 임의의 색상 값
            critical: '#e55f52', // 임의의 색상 값
            white: '#e1e1e1', // 임의의 색상 값
            gold: '#a17900', // 임의의 색상 값
            violet: '#6a7beb', // 임의의 색상 값
            shadowDrop: '0px 4px 16px rgba(251,17,142,0.4)',
            shadowMenu: '0px 10px 30px rgba(0,0,0,0.1)',
            shadowElevation: '0px 4px 16px rgba(70,115,250,0.4)',
            shadowTooltip: '0px 4px 16px rgba(10,10,59,0.2)',
        },
    },
    fontSize: {
        small: '12px',
        medium: '14px',
        large: '16px',
        xlarge: '20px',
        xxlarge: '24px',
    } as const,
    spacing: {
        none: '0px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
    } as const,
    layers: {
        // 필요한 경우 z-index 레벨을 추가합니다.
        // 상대적인 계층의 경우는 +-로 처리
        // 0층
        page: 0,
        header: 10,
        popup: 20,
        popover: 30,
        // 1층
        modal: 100,
        modalHeader: 110,
        modalPopup: 120,
        modalPopover: 130,
        // 2층
        modal2: 200,
        modal2Header: 210,
        modal2Popup: 220,
        modal2Popover: 230,
        // 3층
        modal3: 300,
        modal3Header: 310,
        modal3Popup: 320,
        modal3Popover: 330,
    } as const,
    shadows: {
        shallow:
            '0px 4px 10px rgba(0,0,0,0.24), 2px 2px 4px rgba(0,0,0,0.12), 1px 2px 2px rgba(0,0,0,0.12)',
        deep: '8px 12px 20px rgba(51,53,72,0.04), 4px 6px 12px rgba(51,53,72,0.02), 4px 4px 8px rgba(51,53,72,0.04)',
        tooltip: '0px 4px 16px rgba(10,10,59,0.2)',
        elevation: '0px 4px 16px rgba(70,115,250,0.4)',
        menu: '0px 10px 30px rgba(0,0,0,0.1)',
    } as const,
    opacity: {
        hover: '0.6',
        pressed: '0.4',
    } as const,
    fonts: {
        main: 'Inter, sans-serif',
        secondary: 'Adieu, sans-serif',
    } as const,
    flexs: {
        flex: { display: 'flex' },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: undefined,
        },
        flexCenterBetween: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        flexCenterCenter: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        flexCenterEnd: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        flexCenterStart: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
    } as const,
};

type ThemeMode = typeof theme.colors.default;

export type Theme = Omit<typeof theme, 'colors'> & { colors: ThemeMode };

export default theme;
