import styled from 'styled-components';

import arrowIcon from '~/assets/svg/arrow.svg';
import closeIcon from '~/assets/svg/close.svg';
import settingIcon from '~/assets/svg/setting.svg';
import { colorStyled, layoutStyled } from '~/styles';
import { IconProps } from '~/types';

const IconStyled = styled.img<IconProps>`
    fill: ${({ $fill, theme }) => ($fill ? theme.colors[$fill] || $fill : '')};
    ${colorStyled};
    ${layoutStyled};
`;

export const CloseIcon = (props: IconProps) => (
    <IconStyled src={closeIcon} $size="24px" alt="close" {...props} />
);
export const ArrowIcon = (props: IconProps) => (
    <IconStyled src={arrowIcon} $width="12px" $height="7px" alt="arrow" {...props} />
);
export const SettingIcon = (props: IconProps) => (
    <IconStyled src={settingIcon} $size="24px" $fill="neutral2" alt="setting" {...props} />
);
