import { ComponentProps } from 'react';
import { ExecutionProps } from 'styled-components';

import { ColorStyledProps, FlexStyledProps as FSP, LayoutStyledProps } from '~/types';

export interface FlexStyledProps extends Partial<LayoutStyledProps & FSP & ColorStyledProps> {}
export interface FlexProps extends ComponentProps<'section'>, FlexStyledProps, ExecutionProps {}
