import { ComponentProps } from 'react';
import { CSSObject } from 'styled-components';

import theme from '~/theme';

export type ColorsKey = keyof typeof theme.colors.default;
export interface ColorStyledProps {
    $backgroundColor: CSSObject['backgroundColor'] | ColorsKey;
    $color: CSSObject['color'] | ColorsKey;
}
export interface LayoutStyledProps {
    $gap: CSSObject['gap'];
    $height: CSSObject['height'];
    $margin: CSSObject['margin'];
    $marginBottom: CSSObject['marginBottom'];
    $marginLeft: CSSObject['marginLeft'];
    $marginRight: CSSObject['marginRight'];
    $marginTop: CSSObject['marginTop'];
    $padding: CSSObject['padding'];
    $paddingBottom: CSSObject['paddingBottom'];
    $paddingLeft: CSSObject['paddingLeft'];
    $paddingRight: CSSObject['paddingRight'];
    $paddingTop: CSSObject['paddingTop'];
    $size: CSSObject['height' | 'width'];
    $width: CSSObject['width'];
}
export interface FontStyledProps {
    $fontSize: CSSObject['fontSize'];
    $fontWeight: CSSObject['fontWeight'];
    $lineHeight: CSSObject['lineHeight'];
    $textAlign: CSSObject['textAlign'];
}
export type IconProps = ComponentProps<'img'> & Partial<ColorStyledProps & LayoutStyledProps>;
export type FontTypeUnion = keyof typeof theme.fontSize;
export type FontType = typeof theme.fontSize;
export type FlexTypeUnion =
    | 'flex'
    | 'flexCenter'
    | 'flexCenterBetween'
    | 'flexCenterCenter'
    | 'flexCenterEnd'
    | 'flexCenterStart';

export interface FlexStyledProps {
    $alignItems?: CSSObject['alignItems'];
    $flex?: CSSObject['flex'];
    $flexDirection?: CSSObject['flexDirection'];
    $flexType?: FlexTypeUnion;
    $justifyContent?: CSSObject['justifyContent'];
}
export type FlexType = {
    [key in FlexTypeUnion]: {
        alignItems?: CSSObject['alignItems'];
        display: CSSObject['flex'];
        justifyContent?: CSSObject['justifyContent'];
    } & CSSObject;
};
