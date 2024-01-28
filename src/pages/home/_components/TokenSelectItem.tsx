import Flex from '~/components/Flex';
import Typography from '~/components/Typography';
import { Token } from '~/store';

import { TokenSelectItemStyled } from '../HomePage.styled';

export default function TokenSelectItem({
    onClick,
    ...token
}: Token & {
    onClick: () => void;
}) {
    return (
        <TokenSelectItemStyled onClick={onClick}>
            <Flex
                $flex="unset"
                $flexType="flexCenter"
                $width="36px"
                $height="36px"
                $backgroundColor="gray"
                $borderRadius="50%"
            />
            <Flex $width="100%" $flexDirection="column">
                <Typography type="large" $color="surface1">
                    {token.tokenName}
                </Typography>
                <Typography type="medium" $color="surface5">
                    {token.tokenFullName}
                </Typography>
            </Flex>
        </TokenSelectItemStyled>
    );
}
