import styled, { css } from 'styled-components';

import { colorStyled, layoutStyled } from '~/styles';

import { PopoverStyledProps } from './Popover.interfaces';

export const PopoverStyled = styled.div<PopoverStyledProps>`
    position: absolute;
    ${({ $left, $top, layer, theme }) => css`
        z-index: ${theme.layers[layer || 'popover']};
        top: ${$top};
        left: ${$left};
    `}
    && {
        ${colorStyled}
        ${layoutStyled}
    }
`;
