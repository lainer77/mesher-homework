import { ComponentProps } from 'react';

import { ColorStyledProps, FontStyledProps, FontTypeUnion, LayoutStyledProps } from '~/types';

export interface TypographyStyledProps
    extends Partial<LayoutStyledProps & ColorStyledProps & FontStyledProps> {}
export interface TypographyProps extends ComponentProps<'p'>, TypographyStyledProps {
    type?: FontTypeUnion;
    weight?: number;
}
