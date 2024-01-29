import Flex from '~/components/Flex';
import Typography from '~/components/Typography';

import { TokenQuickItemStyled } from '../HomePage.styled';

export default function TokenQuickItem({
    isSelected,
    onClick,
    tokenName,
}: {
    isSelected?: boolean;
    onClick: () => void;
    tokenName: string;
}) {
    return (
        <TokenQuickItemStyled
            data-testid={`token-select-${tokenName}`}
            $isSelected={isSelected}
            onClick={onClick}
        >
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
