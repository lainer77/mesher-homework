import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from './Modal.interfaces';
import { ModalStyled } from './Modal.styled';

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
        if (!isOpen) return;

        const wrapperId = 'root-portal';
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            if (systemCreated && element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [isOpen]);

    if (!isOpen || wrapperElement === null) return null;

    return createPortal(
        <ModalStyled layer={layer} style={style}>
            {children}
        </ModalStyled>,
        wrapperElement
    );
}
