import { ComponentProps, ReactNode } from 'react';

import { Theme } from '~/theme';
import { LayoutStyledProps } from '~/types';

export interface ModalStyledProps extends ComponentProps<'div'>, Partial<LayoutStyledProps> {
    isOpen?: boolean;
    layer?: keyof Theme['layers'];
    setModal?: (isOpen: boolean) => void;
}
export interface ModalProps extends ModalStyledProps {
    children: ReactNode;
}
