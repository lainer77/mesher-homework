import { create } from 'zustand';

export interface ModalState {
    tokenSelectModal: boolean;
}

export interface ModalStore {
    modals?: ModalState;
    setModal: (layer: keyof ModalState, isOpen: boolean) => void;
}
export const useModalStore = create<ModalStore>((set) => ({
    modals: undefined,
    setModal: (layer, isOpen) =>
        set(({ modals = {} }) => ({
            modals: {
                ...modals,
                [layer]: isOpen,
            },
        })),
}));
