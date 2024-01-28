import styled, { css } from 'styled-components';

import { colorStyled, flexStyled, fontStyled, layoutStyled } from '~/styles';

import { TextFieldStyledProps } from './TextField.interfaces';

export const TextFieldStyled = styled.input<TextFieldStyledProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    ${({ theme }) => css`
        padding: ${theme.spacing.sm};
        font-size: ${theme.fontSize.medium};
        border: 1px solid ${theme.colors.neutral2};
        border-radius: 4px;
        outline: none;
        color: ${theme.colors.neutral1};
        background-color: ${theme.colors.surface1};

        &:focus {
            border-color: ${theme.colors.accent1};
            box-shadow: 0 0 0 0.2rem ${theme.colors.shadowTooltip};
        }
    `}
    && {
        ${fontStyled}
        ${colorStyled}
        ${layoutStyled}
        ${flexStyled}
    }
`;
