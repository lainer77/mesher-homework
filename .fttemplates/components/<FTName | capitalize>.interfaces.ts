import { ComponentProps } from 'react';

import { ColorStyledProps, FlexStyledProps, FontStyledProps, LayoutStyledProps } from '~/types';

export interface <FTName | capitalize>StyledProps
    extends Partial<FontStyledProps & ColorStyledProps & LayoutStyledProps & FlexStyledProps> {}
export interface <FTName | capitalize>Props extends ComponentProps<'div'>, <FTName | capitalize>StyledProps {}
