import Flex from '~/components/Flex';
import { useModalStore, useTokenStore } from '~/store';

import TokenQuickItem from '../_components/TokenQuickItem';

export default function TokenQuickListContainer() {
    const { recentTokenList, selectToken } = useTokenStore((state) => ({
        recentTokenList: state.recentTokenList,
        selectToken: state.selectToken,
    }));
    const setModal = useModalStore((state) => state.setModal);

    if (!recentTokenList.length) return null;

    return (
        <Flex $gap="4px" $flexWrap="wrap">
            {recentTokenList.map((token) => (
                <TokenQuickItem
                    key={token.tokenId}
                    tokenName={token.tokenName}
                    onClick={() => {
                        selectToken(token);
                        setModal('tokenSelectModal', false);
                    }}
                />
            ))}
        </Flex>
    );
}
