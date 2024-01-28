import styled from 'styled-components';

import { childCenter, layoutStyled } from '~/styles';
import { Theme } from '~/theme';

import { ModalStyledProps } from './Modal.interfaces';

export const ModalStyled = styled.div<ModalStyledProps>`
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    height: fit-content;
    width: fit-content;
    z-index: ${({ layer, theme }) => theme.layers[layer || 'modal']};

    && {
        ${childCenter}
        ${layoutStyled};
    }
`;

export const OverlayStyled = styled.div<{ layer?: keyof Theme['layers'] }>`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: ${({ layer, theme }) => theme.layers[layer || 'modal'] - 1};
`;
