import styled from 'styled-components';

import arrowIcon from '~/assets/svg/arrow.svg';
import arrowDarkIcon from '~/assets/svg/arrow_dark.svg';
import arrow2Icon from '~/assets/svg/arrow2.svg';
import arrow2DarkIcon from '~/assets/svg/arrow2_dark.svg';
import closeIcon from '~/assets/svg/close.svg';
import closeDarkIcon from '~/assets/svg/close_dark.svg';
import settingIcon from '~/assets/svg/setting.svg';
import settingDarkIcon from '~/assets/svg/setting_dark.svg';
import { useThemeStore } from '~/store';
import { colorStyled, layoutStyled } from '~/styles';
import { IconProps } from '~/types';

const IconStyled = styled.img<IconProps>`
    ${colorStyled};
    ${layoutStyled};
`;

export const CloseIcon = (props: IconProps) => {
    const { isDarkMode } = useThemeStore();
    return (
        <IconStyled
            src={isDarkMode ? closeDarkIcon : closeIcon}
            $size="24px"
            alt="close"
            {...props}
        />
    );
};
export const ArrowIcon = (props: IconProps) => {
    const { isDarkMode } = useThemeStore();
    return (
        <IconStyled
            src={isDarkMode ? arrowDarkIcon : arrowIcon}
            $width="12px"
            $height="7px"
            alt="arrow"
            {...props}
        />
    );
};
export const Arrow2Icon = (props: IconProps) => {
    const { isDarkMode } = useThemeStore();
    return (
        <IconStyled
            src={isDarkMode ? arrow2DarkIcon : arrow2Icon}
            $size="16px"
            alt="arrow"
            {...props}
        />
    );
};
export const SettingIcon = (props: IconProps) => {
    const { isDarkMode } = useThemeStore();
    return (
        <IconStyled
            src={isDarkMode ? settingDarkIcon : settingIcon}
            $size="24px"
            alt="setting"
            {...props}
        />
    );
};
