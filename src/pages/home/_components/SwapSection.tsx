import { useEffect, useRef, useState } from 'react';

import Flex from '~/components/Flex';
import TextField from '~/components/TextField';
import Typography from '~/components/Typography';
import { Token } from '~/store';
import { validateDecimal } from '~/utils/vaildate';

import { SwapSectionStyled } from '../HomePage.styled';
import TokenSelectBox from './TokenSelectBox';

export default function SwapSection({
    onChange,
    onTokenSelect,
    token,
    type,
}: {
    onChange: (value: number) => void;
    onTokenSelect: () => void;
    token: Token | null;
    type: 'A' | 'B';
}) {
    const [value, setValue] = useState(
        token?.tokenValue !== 0 ? token?.tokenValue?.toString() : ''
    );
    const debounceId = useRef<NodeJS.Timeout>();
    useEffect(() => {
        if (!debounceId.current && Number(value) !== token?.tokenValue)
            setValue(token?.tokenValue !== 0 ? token?.tokenValue?.toString() : '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token?.tokenValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;

        if (validateDecimal(inputValue)) {
            setValue(inputValue);
            clearTimeout(debounceId.current);
            debounceId.current = setTimeout(() => {
                debounceId.current = undefined;
                onChange(Number(inputValue));
            }, 300);
        }
    };

    return (
        <SwapSectionStyled>
            <Flex $flexType="flexCenterBetween">
                <TextField
                    data-testid={`swap-input-${type}`}
                    $width="70%"
                    $color="surface2"
                    $fontSize="36px"
                    onChange={handleChange}
                    placeholder="0.0"
                    value={value || ''}
                />
                <TokenSelectBox
                    type={type}
                    onTokenSelect={onTokenSelect}
                    tokenName={token?.tokenName}
                />
            </Flex>
            {token?.tokenValue && token?.usd ? (
                <Typography data-testid={`swap-output-${type}`} type="medium" $color="surface5">
                    ${parseFloat((token.tokenValue * token.usd).toFixed(2))}
                </Typography>
            ) : null}
        </SwapSectionStyled>
    );
}
