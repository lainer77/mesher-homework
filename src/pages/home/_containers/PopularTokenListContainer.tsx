import { useModalStore, useTokenStore } from '~/store';

import TokenSelectItem from '../_components/TokenSelectItem';
import { PopularTokenListStyled } from '../HomePage.styled';

export default function PopularTokenListContainer() {
    const { searchText, selectToken, selectedToken, tokenList } = useTokenStore((state) => ({
        searchText: state.searchText,
        selectToken: state.selectToken,
        selectedToken: state[state.selectedType === 'A' ? 'selectedTokenA' : 'selectedTokenB'],
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
                    isSelected={selectedToken?.tokenId === token.tokenId}
                    onClick={() => {
                        selectToken(token);
                        setModal('tokenSelectModal', false);
                    }}
                />
            ))}
        </PopularTokenListStyled>
    );
}
