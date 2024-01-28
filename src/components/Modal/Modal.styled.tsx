import styled from 'styled-components';

import { childCenter, layoutStyled } from '~/styles';

import { ModalStyledProps } from './Modal.interfaces';

export const ModalStyled = styled.div<ModalStyledProps>`
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 200px;
    width: 250px;
    z-index: ${({ layer, theme }) => theme.layers[layer || 'modal']};

    && {
        ${childCenter}
        ${layoutStyled};
    }
`;
