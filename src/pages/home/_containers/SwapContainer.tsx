import { useModalStore, useTokenStore } from '~/store';

import SwapCard from '../_components/SwapCard';
import { SwapContainerStyled } from '../HomePage.styled';

export default function SwapContainer() {
    const { selectType, ...state } = useTokenStore((state) => ({
        selectType: state.selectType,
        selectedTokenA: state.selectedTokenA,
        selectedTokenB: state.selectedTokenB,
        selectedTokenSetValue: state.selectedTokenSetValue,
        selectedTokenSwap: state.selectedTokenSwap,
    }));
    const setModal = useModalStore((state) => state.setModal);
    const handleTokenSelect = (selectedType: 'A' | 'B') => {
        setModal('tokenSelectModal', true);
        selectType(selectedType);
    };

    return (
        <SwapContainerStyled>
            <SwapCard {...state} onTokenSelect={handleTokenSelect} />
        </SwapContainerStyled>
    );
}
