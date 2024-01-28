import { CSSObject, StyleFunction, css } from 'styled-components';

import theme from '~/theme';
import {
    ColorStyledProps,
    ColorsKey,
    FlexStyledProps,
    FontStyledProps,
    LayoutStyledProps,
} from '~/types';

export const cssStyles: StyleFunction<CSSObject> = (props) =>
    css(
        Object.keys(props).reduce((newObj: CSSObject, key) => {
            if (!key.startsWith('$')) return newObj;
            const newKey = key.replace('$', ''); // '$' 문자를 제거
            newObj[newKey] = props[key];
            return newObj;
        }, {})
    );
export const colorStyled = css<Partial<ColorStyledProps>>`
    && {
        color: ${({ $color, theme }) => {
            return $color ? theme.colors[$color as ColorsKey] || $color : undefined;
        }};
        background-color: ${({ $backgroundColor, theme }) =>
            $backgroundColor
                ? theme.colors[$backgroundColor as ColorsKey] || $backgroundColor
                : undefined};
    }
`;
export const layoutStyled = css<Partial<LayoutStyledProps>>`
    && {
        ${cssStyles}
        width: ${({ $size }) => $size};
        height: ${({ $size }) => $size};
    }
`;
export const fontStyled = css<Partial<FontStyledProps>>`
    && {
        ${cssStyles}
    }
`;
export const flexStyled: StyleFunction<FlexStyledProps> = ({
    $flex,
    $flexDirection,
    $flexType: flexType,
}) => {
    if (!flexType) return undefined;
    const obj = theme.flexs[flexType] as CSSObject;
    obj.flexDirection = $flexDirection;
    obj.flex = $flex;
    return css(obj);
};
export const childCenter = css`
    position: fixed;
    margin: auto;
    display: block;
    bottom: 0px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
`;
