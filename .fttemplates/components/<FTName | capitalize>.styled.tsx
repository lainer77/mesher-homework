import styled from 'styled-components';

import { colorStyled, flexStyled, fontStyled, layoutStyled } from '~/styles';

import { <FTName | capitalize>StyledProps } from './<FTName | capitalize>.interfaces';

export const <FTName | capitalize>Styled = styled.div<<FTName | capitalize>StyledProps>`
    && {
        ${fontStyled}
        ${colorStyled}
        ${layoutStyled}
        ${flexStyled}
    }
`;
