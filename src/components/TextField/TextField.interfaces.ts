import { ComponentProps } from 'react';

import { ColorStyledProps, FlexStyledProps, FontStyledProps, LayoutStyledProps } from '~/types';

export interface TextFieldStyledProps
    extends Partial<FontStyledProps & ColorStyledProps & LayoutStyledProps & FlexStyledProps> {}
export interface TextFieldProps extends ComponentProps<'input'>, TextFieldStyledProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
}
