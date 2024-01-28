import { TextFieldProps } from './TextField.interfaces';
import { TextFieldStyled } from './TextField.styled';

export default function TextField({ onChange, placeholder, value, ...style }: TextFieldProps) {
    return (
        <TextFieldStyled
            {...style}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
