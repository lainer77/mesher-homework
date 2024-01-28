import { ButtonProps } from './Button.interfaces';
import { ButtonStyled } from './Button.styled';

export default function Button(props: ButtonProps) {
    const { children, ...style } = props;
    return (
        <ButtonStyled type="button" {...style}>
            {children}
        </ButtonStyled>
    );
}
