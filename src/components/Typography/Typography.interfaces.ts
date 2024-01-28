import { ComponentProps } from 'react';

import { ColorStyledProps, FontStyledProps, FontTypeUnion, LayoutStyledProps } from '~/types';

export interface TypographyStyledProps
    extends Partial<LayoutStyledProps & ColorStyledProps & FontStyledProps> {}
export interface TypographyProps extends ComponentProps<'p'>, TypographyStyledProps {
    /** small: '12px', medium: '14px', large: '16px', xlarge: '20px', xxlarge: '24px' **/
    type?: FontTypeUnion;
    weight?: number;
}
