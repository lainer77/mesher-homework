import { <FTName | capitalize>Props } from './<FTName | capitalize>.interfaces';
import { <FTName | capitalize>Styled } from './<FTName | capitalize>.styled';

export default function <FTName | capitalize>(props: <FTName | capitalize>Props) {
    const { children, ...style } = props;
    return (
        <<FTName | capitalize>Styled {...style}>
            {children}
        </<FTName | capitalize>Styled>
    );
}
