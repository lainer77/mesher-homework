import { useLayoutEffect, useRef, useState } from 'react';

import { PopoverProps } from './Popover.interfaces';
import { PopoverStyled } from './Popover.styled';

export default function Popover({ children, isOpen, position, targetRef }: PopoverProps) {
    const [coords, setCoords] = useState({ left: 0, top: 0 });
    const popoverRef = useRef<HTMLDivElement>(null);

    const calculatePosition = (
        targetRect: DOMRect,
        popoverRect: DOMRect,
        position: 'bottom' | 'left' | 'right' | 'top'
    ) => {
        const margin = 8; // Popover와 타겟 사이의 마진
        let top = 0,
            left = 0;

        switch (position) {
            case 'top':
                top = targetRect.top - popoverRect.height - margin;
                left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
                break;
            case 'bottom':
                top = targetRect.bottom + margin;
                left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
                break;
            case 'left':
                top = targetRect.top + targetRect.height / 2 - popoverRect.height / 2;
                left = targetRect.left - popoverRect.width - margin;
                break;
            case 'right':
                top = targetRect.top + targetRect.height / 2 - popoverRect.height / 2;
                left = targetRect.right + margin;
                break;
        }

        return { left, top };
    };

    useLayoutEffect(() => {
        if (!isOpen || !targetRef.current || !popoverRef.current) return;

        const targetRect = targetRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();

        const { left, top } = calculatePosition(targetRect, popoverRect, position);
        setCoords({ left, top });
    }, [isOpen, targetRef, position]);

    if (!isOpen) return null;

    return (
        <PopoverStyled ref={popoverRef} $top={coords.top} $left={coords.left}>
            {children}
        </PopoverStyled>
    );
}
