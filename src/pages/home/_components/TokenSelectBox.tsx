import { ArrowIcon } from '~/components/_icons';
import Button from '~/components/Button';
import Flex from '~/components/Flex';

export default function TokenSelectBox({
    onTokenSelect,
    tokenName,
    type,
}: {
    onTokenSelect: () => void;
    tokenName?: string;
    type: 'A' | 'B';
}) {
    return (
        <Button
            $gap="8px"
            $padding="6px 8px"
            fontType="xlarge"
            $color="surface2"
            $backgroundColor={tokenName ? 'neutral1' : 'accent1'}
            onClick={onTokenSelect}
            data-testid={`token-selection-${type}`}
        >
            {tokenName && (
                <Flex
                    $width="24px"
                    $height="24px"
                    $backgroundColor="gray"
                    style={{ borderRadius: '50%' }}
                />
            )}
            {tokenName || '토큰 선택'}
            <ArrowIcon />
        </Button>
    );
}
