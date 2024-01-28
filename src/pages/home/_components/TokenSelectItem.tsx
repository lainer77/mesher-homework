import Flex from '~/components/Flex';
import Typography from '~/components/Typography';

export default function TokenSelectItem({
    tokenFullName,
    tokenName,
    tokenValue,
}: {
    tokenFullName: string;
    tokenName: string;
    tokenValue: string;
}) {
    return (
        <Flex $flexType="flexCenter" $padding="4px 20px" $gap="16px" $height="56px">
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
                    {tokenName}
                </Typography>
                <Typography type="medium" $color="surface5">
                    {tokenFullName}
                </Typography>
            </Flex>
            <Typography type="medium" $color="surface1">
                {tokenValue}
            </Typography>
        </Flex>
    );
}
