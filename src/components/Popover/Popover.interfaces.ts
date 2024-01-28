import { ComponentProps } from 'react';
import { CSSObject } from 'styled-components';

import { Theme } from '~/theme';
import { ColorStyledProps, LayoutStyledProps } from '~/types';

export interface PopoverStyledProps
    extends ComponentProps<'div'>,
        Partial<ColorStyledProps & LayoutStyledProps> {
    $left: CSSObject['left'];
    $top: CSSObject['top'];
    layer?: keyof Theme['layers'];
}
export interface PopoverProps extends PopoverStyledProps {
    children: React.ReactNode;
    isOpen: boolean;
    position: 'bottom' | 'left' | 'right' | 'top';
    targetRef: React.RefObject<HTMLElement>;
}
