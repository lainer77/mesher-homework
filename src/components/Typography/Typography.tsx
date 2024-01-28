import theme from '~/theme';

import { TypographyProps } from './Typography.interfaces';
import { TypographyStyled } from './Typography.styled';

export default function Typography({
    $color,
    $fontSize,
    $lineHeight,
    children,
    type = 'medium',
    weight = 485,
    ...props
}: TypographyProps) {
    return (
        <TypographyStyled
            {...props}
            $fontSize={$fontSize || theme.fontSize[type]}
            $lineHeight={$lineHeight}
            $fontWeight={weight}
            $color={$color}
        >
            {children}
        </TypographyStyled>
    );
}
