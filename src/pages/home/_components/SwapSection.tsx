import Flex from '~/components/Flex';
import TextField from '~/components/TextField';
import Typography from '~/components/Typography';

import { SwapSectionStyled } from '../HomePage.styled';
import TokenSelectBox from './TokenSelectBox';

export default function SwapSection() {
    return (
        <SwapSectionStyled>
            <Flex $flexType="flexCenterBetween">
                <TextField
                    $width="50%"
                    $color="surface2"
                    $fontSize="36px"
                    onChange={() => {}}
                    value="0"
                />
                <TokenSelectBox />
            </Flex>
            <Typography type="medium" $color="surface5">
                $0
            </Typography>
        </SwapSectionStyled>
    );
}
