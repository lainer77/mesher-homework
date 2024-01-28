import { Arrow2Icon, SettingIcon } from '~/components/_icons';
import Button from '~/components/Button';
import Flex from '~/components/Flex';
import Typography from '~/components/Typography';
import { Token } from '~/store';

import { SwapButton, SwapCardStyled } from '../HomePage.styled';
import SwapSection from './SwapSection';

export default function SwapCard({
    onTokenSelect,
    selectedTokenA,
    selectedTokenB,
    selectedTokenSetValue,
    selectedTokenSwap,
}: {
    onTokenSelect: (type: 'A' | 'B') => void;
    selectedTokenA: Token | null;
    selectedTokenB: Token | null;
    selectedTokenSetValue: (type: 'A' | 'B', value: number) => void;
    selectedTokenSwap: () => void;
}) {
    const actionDisabled =
        !selectedTokenA ||
        selectedTokenA.tokenValue === 0 ||
        !selectedTokenB ||
        selectedTokenB.tokenValue === 0;
    return (
        <SwapCardStyled>
            <div>
                {/* header */}
                <Flex $flexType="flexCenterBetween" $padding="6px 12px">
                    <Typography $color="surface1" type="large" $lineHeight="24px">
                        스왑
                    </Typography>
                    <SettingIcon onClick={() => alert('준비 중입니다.')} />
                </Flex>
                {/* body */}
                <Flex $flexDirection="column" $gap="4px" style={{ position: 'relative' }}>
                    <SwapSection
                        onChange={(value) => selectedTokenSetValue('A', value)}
                        onTokenSelect={() => onTokenSelect('A')}
                        token={selectedTokenA}
                    />
                    <SwapSection
                        onChange={(value) => selectedTokenSetValue('B', value)}
                        onTokenSelect={() => onTokenSelect('B')}
                        token={selectedTokenB}
                    />
                    <SwapButton onClick={selectedTokenSwap}>
                        <Arrow2Icon />
                    </SwapButton>
                </Flex>
                {/* action */}
                <Button
                    $height="56px"
                    $width="100%"
                    $backgroundColor={actionDisabled ? 'swap' : 'accent2'}
                    $color={actionDisabled ? 'surface5' : 'accent1'}
                    $marginTop="4px"
                    fontType="xxlarge"
                    disabled={actionDisabled}
                    onClick={() => alert('준비 중입니다')}
                >
                    {actionDisabled ? '금액을 입력하세요' : '스왑'}
                </Button>
            </div>
        </SwapCardStyled>
    );
}
