import { Arrow2Icon, SettingIcon } from '~/components/_icons';
import Button from '~/components/Button';
import Flex from '~/components/Flex';
import Typography from '~/components/Typography';

import { SwapButton, SwapCardStyled } from '../HomePage.styled';
import SwapSection from './SwapSection';

export default function SwapCard() {
    return (
        <SwapCardStyled>
            <div>
                {/* header */}
                <Flex $flexType="flexCenterBetween" $padding="6px 12px">
                    <Typography $color="surface1" type="large" $lineHeight="24px">
                        스왑
                    </Typography>
                    <SettingIcon />
                </Flex>
                {/* body */}
                <Flex $flexDirection="column" $gap="4px" style={{ position: 'relative' }}>
                    <SwapSection />
                    <SwapSection />
                    <SwapButton>
                        <Arrow2Icon />
                    </SwapButton>
                </Flex>
                {/* action */}
                <Button
                    $height="56px"
                    $width="100%"
                    $backgroundColor="accent2"
                    $color="accent1"
                    $marginTop="4px"
                    fontType="xxlarge"
                >
                    지갑 연결
                </Button>
            </div>
        </SwapCardStyled>
    );
}
