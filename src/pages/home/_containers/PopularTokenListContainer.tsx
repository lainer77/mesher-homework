import { useModalStore, useTokenStore } from '~/store';

import TokenSelectItem from '../_components/TokenSelectItem';
import { PopularTokenListStyled } from '../HomePage.styled';

export default function PopularTokenListContainer() {
    const { searchText, selectToken, tokenList } = useTokenStore((state) => ({
        searchText: state.searchText,
        selectToken: state.selectToken,
        tokenList: state.tokenList,
    }));
    const setModal = useModalStore((state) => state.setModal);

    const filteredTokenList = tokenList.filter((token) =>
        token.tokenName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <PopularTokenListStyled>
            {filteredTokenList.map((token) => (
                <TokenSelectItem
                    key={token.tokenId}
                    {...token}
                    onClick={() => {
                        selectToken(token);
                        setModal('tokenSelectModal', false);
                    }}
                />
            ))}
        </PopularTokenListStyled>
    );
}
