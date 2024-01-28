import Modal from '~/components/Modal';
import { useModalStore } from '~/store/modal';

import TokenSelectContainer from './TokenSelectContainer';

export default function ModalContainer() {
    const { modals, setModal } = useModalStore();
    return (
        <>
            {/* layer 0 */}

            {/* layer 100 */}
            <Modal
                isOpen={modals?.tokenSelectModal}
                layer="modal"
                style={{
                    top: '100%',
                    transform: 'translate(-50%, -50%)',
                }} // 하프모달처럼
            >
                <TokenSelectContainer
                    isOpen={!!modals?.tokenSelectModal}
                    setModal={(isOpen: boolean) => setModal('tokenSelectModal', isOpen)}
                />
            </Modal>

            {/* layer 200 */}

            {/* layer 300 */}
        </>
    );
}
