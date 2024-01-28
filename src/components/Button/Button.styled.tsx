import styled, { css } from 'styled-components';

import { colorStyled, flexStyled, fontStyled, layoutStyled } from '~/styles';
import theme from '~/theme';
import { ColorsKey } from '~/types';

import { ButtonStyledProps } from './Button.interfaces';

export const ButtonStyled = styled.button<ButtonStyledProps>`
    ${css(theme.flexs.flexCenterCenter)}
    padding: 0.6rem 1.6rem;
    gap: 0.8rem;
    border-radius: 0.8rem;
    border: none;
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    &:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
            ${({ $backgroundColor, theme }) =>
                $backgroundColor
                    ? theme.colors[$backgroundColor as ColorsKey] || $backgroundColor
                    : '#f7f7fa'};
    }
    &:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
            ${({ $backgroundColor, theme }) =>
                $backgroundColor
                    ? theme.colors[$backgroundColor as ColorsKey] || $backgroundColor
                    : '#f7f7fa'};
    }
    && {
        ${fontStyled}
        ${colorStyled}
        ${layoutStyled}
        ${flexStyled}
    }
`;
