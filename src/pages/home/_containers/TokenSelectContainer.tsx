import { useState } from 'react';

import { CloseIcon } from '~/components/_icons';
import Flex from '~/components/Flex';
import Typography from '~/components/Typography';

import TokenQuickItem from '../_components/TokenQuickItem';
import TokenSelectItem from '../_components/TokenSelectItem';
import {
    PopularTokenListStyled,
    SearchTextFieldStyled,
    TokenManageStyled,
    TokenSelectContainerStyled,
} from '../HomePage.styled';

export default function TokenSelectContainer({
    isOpen,
    setModal,
}: {
    isOpen: boolean;
    setModal: (isOpen: boolean) => void;
}) {
    const [isTransition, setTransition] = useState(false);
    return (
        <TokenSelectContainerStyled
            $isOpen={isOpen}
            $isTransition={isTransition}
            onTransitionEnd={() => setTransition(false)}
        >
            <Flex $flex="unset" $padding="20px" $flexDirection="column" $gap="16px">
                <Flex $flexType="flexCenterBetween">
                    <Typography type="large" $color="surface1">
                        토큰 선택
                    </Typography>
                    <CloseIcon
                        onClick={() => {
                            setModal(false);
                            setTransition(true);
                        }}
                    />
                </Flex>
                <SearchTextFieldStyled
                    onChange={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                    placeholder="이름 검색 또는 주소 붙여 넣기"
                />
                <Flex $gap="4px" $flexWrap="wrap">
                    <TokenQuickItem tokenName="ETC" />
                    <TokenQuickItem tokenName="DAI" />
                    <TokenQuickItem tokenName="EUDD" />
                    <TokenQuickItem tokenName="EUDD" />
                    <TokenQuickItem tokenName="EUDD" />
                    <TokenQuickItem tokenName="EUDD" />
                </Flex>
            </Flex>
            <Flex
                $flex="unset"
                $height="1px"
                $backgroundColor="rgba(255, 255, 255, 0.07)"
                $width="100%"
            />
            <PopularTokenListStyled>
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
                <TokenSelectItem tokenFullName="Ether" tokenName="ETC" tokenValue="0.1680" />
            </PopularTokenListStyled>
            <TokenManageStyled>토큰 관리 목록</TokenManageStyled>
        </TokenSelectContainerStyled>
    );
}
