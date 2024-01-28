import styled from 'styled-components';

import { flexStyled, layoutStyled } from '~/styles';

import { FlexStyledProps } from './Flex.interfaces';

export const FlexStyled = styled.div<FlexStyledProps>`
    display: flex;
    flex: 1;
    && {
        ${flexStyled}
        ${layoutStyled};
    }
`;
