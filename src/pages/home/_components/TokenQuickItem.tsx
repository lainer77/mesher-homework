import Flex from '~/components/Flex';
import Typography from '~/components/Typography';

import { TokenQuickItemStyled } from '../HomePage.styled';

export default function TokenQuickItem({
    isSelected,
    tokenName,
}: {
    isSelected?: boolean;
    tokenName: string;
}) {
    return (
        <TokenQuickItemStyled isSelected={isSelected}>
            <Flex
                $flex="unset"
                $flexType="flexCenter"
                $width="24px"
                $height="24px"
                $backgroundColor="gray"
                $borderRadius="50%"
            />
            <Typography type="large" $color="surface1">
                {tokenName}
            </Typography>
        </TokenQuickItemStyled>
    );
}
