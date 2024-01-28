import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from './Modal.interfaces';
import { ModalStyled, OverlayStyled } from './Modal.styled';

function createWrapperAndAppendToBody(wrapperId: string): HTMLElement {
    const rootElement = document.querySelector('#root');
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    rootElement?.appendChild(wrapperElement);
    return wrapperElement;
}

export default function Modal({ children, isOpen = false, layer, style }: ModalProps) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (wrapperElement) return;

        const wrapperId = 'root-portal';
        let element = document.getElementById(wrapperId);

        if (!element) {
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (wrapperElement === null) return null;

    return createPortal(
        <>
            {isOpen && <OverlayStyled layer={layer} />}
            <ModalStyled layer={layer} style={style}>
                {children}
            </ModalStyled>
        </>,
        wrapperElement
    );
}
