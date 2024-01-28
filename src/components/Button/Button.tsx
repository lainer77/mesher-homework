import theme from '~/theme';

import { ButtonProps } from './Button.interfaces';
import { ButtonStyled } from './Button.styled';

export default function Button(props: ButtonProps) {
    const { children, fontType, ...style } = props;
    return (
        <ButtonStyled type="button" $fontSize={fontType && theme.fontSize[fontType]} {...style}>
            {children}
        </ButtonStyled>
    );
}
