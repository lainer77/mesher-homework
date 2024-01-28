import { ComponentProps } from 'react';

import { ColorStyledProps, FlexStyledProps, FontStyledProps, LayoutStyledProps } from '~/types';

export interface ButtonStyledProps
    extends Partial<FontStyledProps & ColorStyledProps & LayoutStyledProps & FlexStyledProps> {}
export interface ButtonProps extends ComponentProps<'button'>, ButtonStyledProps {}
