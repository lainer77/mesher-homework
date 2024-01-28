import { FlexProps } from './Flex.interfaces';
import { FlexStyled } from './Flex.styled';

export default function Flex({ children, ...props }: FlexProps) {
    return <FlexStyled {...props}>{children}</FlexStyled>;
}
