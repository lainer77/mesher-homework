import Flex from '~/components/Flex';
import { useModalStore, useTokenStore } from '~/store';

import TokenQuickItem from '../_components/TokenQuickItem';

export default function TokenQuickListContainer() {
    const { recentTokenList, selectToken, selectedToken } = useTokenStore((state) => ({
        recentTokenList: state.recentTokenList,
        selectToken: state.selectToken,
        selectedToken: state[state.selectedType === 'A' ? 'selectedTokenA' : 'selectedTokenB'],
    }));
    const setModal = useModalStore((state) => state.setModal);

    if (!recentTokenList.length) return null;

    return (
        <Flex data-testid="recent-tokens-list" $gap="4px" $flexWrap="wrap">
            {recentTokenList.map((token) => (
                <TokenQuickItem
                    key={token.tokenId}
                    tokenName={token.tokenName}
                    isSelected={selectedToken?.tokenId === token.tokenId}
                    onClick={() => {
                        selectToken(token);
                        setModal('tokenSelectModal', false);
                    }}
                />
            ))}
        </Flex>
    );
}
