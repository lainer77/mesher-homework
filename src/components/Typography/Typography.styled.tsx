import styled from 'styled-components';

import { colorStyled, fontStyled, layoutStyled } from '~/styles';

import { TypographyStyledProps } from './Typography.interfaces';

export const TypographyStyled = styled.p<TypographyStyledProps>`
    ${fontStyled};
    ${colorStyled};
    ${layoutStyled};
`;
