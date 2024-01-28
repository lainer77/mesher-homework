import { useState } from 'react';

import { CloseIcon } from '~/components/_icons';
import Flex from '~/components/Flex';
import Typography from '~/components/Typography';
import { useTokenStore } from '~/store';

import {
    SearchTextFieldStyled,
    TokenManageStyled,
    TokenSelectContainerStyled,
} from '../HomePage.styled';
import PopularTokenListContainer from './PopularTokenListContainer';
import TokenQuickListContainer from './TokenQuickListContainer';

export default function TokenSelectModalContainer({
    isOpen,
    setModal,
}: {
    isOpen: boolean;
    setModal: (isOpen: boolean) => void;
}) {
    const [isTransition, setTransition] = useState(false);
    const setSearchText = useTokenStore((state) => state.setSearchText);
    return (
        <TokenSelectContainerStyled
            $isOpen={isOpen}
            $isTransition={isTransition}
            onTransitionEnd={() => setTransition(false)}
        >
            {/* 토큰 선택 */}
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
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="이름 검색 또는 주소 붙여 넣기"
                />
                {/* 최근 토큰 목록 */}
                <TokenQuickListContainer />
            </Flex>
            {/* Divider */}
            <Flex
                $flex="unset"
                $height="1px"
                $backgroundColor="rgba(255, 255, 255, 0.07)"
                $width="100%"
            />
            {/* 인기 토큰 목록 */}
            <PopularTokenListContainer />
            {/* 토큰 관리 목록 버튼 */}
            <TokenManageStyled onClick={() => alert('준비 중입니다')}>
                토큰 관리 목록
            </TokenManageStyled>
        </TokenSelectContainerStyled>
    );
}
