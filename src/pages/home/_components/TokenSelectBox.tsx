import { ArrowIcon } from '~/components/_icons';
import Button from '~/components/Button';
import Flex from '~/components/Flex';
import { useModalStore } from '~/store/modal';

export default function TokenSelectBox({ value }: { value?: string }) {
    // 나중에 옮겨야함
    const setModal = useModalStore((state) => state.setModal);
    return (
        <Button
            $gap="8px"
            $padding="6px 8px"
            fontType="xlarge"
            $color="surface2"
            $backgroundColor="accent1"
            onClick={() => setModal('tokenSelectModal', true)}
        >
            {value && (
                <Flex
                    $width="24px"
                    $height="24px"
                    $backgroundColor="gray"
                    style={{ borderRadius: '50%' }}
                />
            )}
            {value || '토큰 선택'}
            <ArrowIcon />
        </Button>
    );
}
