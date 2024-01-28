import styled, { css } from 'styled-components';

import { colorStyled, flexStyled, fontStyled, layoutStyled } from '~/styles';
import theme from '~/theme';

import { ButtonStyledProps } from './Button.interfaces';

export const ButtonStyled = styled.button<ButtonStyledProps>`
    ${css(theme.flexs.flexCenterCenter)}
    padding: 0.6rem 1.6rem;
    gap: 0.8rem;
    border-radius: 0.8rem;
    border: none;
    width: fit-content;
    height: fit-content;

    && {
        ${fontStyled}
        ${colorStyled}
        ${layoutStyled}
        ${flexStyled}
    }
`;
