import { ComponentProps } from 'react';

import {
    ColorStyledProps,
    FlexStyledProps,
    FontStyledProps,
    FontTypeUnion,
    LayoutStyledProps,
} from '~/types';

export interface ButtonStyledProps
    extends Partial<FontStyledProps & ColorStyledProps & LayoutStyledProps & FlexStyledProps> {}
export interface ButtonProps extends ComponentProps<'button'>, ButtonStyledProps {
    /** small: '12px', medium: '14px', large: '16px', xlarge: '20px', xxlarge: '24px' **/
    fontType?: FontTypeUnion;
    weight?: number;
}
