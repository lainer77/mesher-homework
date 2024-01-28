import styled, { css } from 'styled-components';

import { colorStyled, flexStyled, fontStyled, layoutStyled } from '~/styles';

import { TextFieldStyledProps } from './TextField.interfaces';

export const TextFieldStyled = styled.input<TextFieldStyledProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    margin: 0;
    padding: 0;
    width: fit-content;
    border: unset;
    background: transparent;
    outline: none;
    border-radius: 4px;
    ${({ theme }) => css`
        font-size: ${theme.fontSize.medium};
        color: ${theme.colors.neutral1};

        &:focus {
            border-color: ${theme.colors.accent1};
            box-shadow: 0 0 0 0.2rem ${theme.colors.shadowTooltip};
        }
    `}
    ${fontStyled};
    ${colorStyled};
    ${layoutStyled};
    ${flexStyled};
`;
