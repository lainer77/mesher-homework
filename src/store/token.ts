// ETH id : ethereum
// USDT id : tether
// USDC id : usd-coin
// DAI id : dai
// AAVE id : aave
// WBTC id : bitcoin
// AXS id : axie-infinity
// COMP id : compound-coin
// CRV id : curve-dao-token
// ENS id : ethereum-name-service

// 요구사항: 아래와 같은 포맷대로 리스트를 만들어서 코인목록(tokenList)을 초기화하고 tokenValue 값을 tokenId로 찾아서 변경해줄 수 있는 함수도 만들어줘.
// zustand store를 말하는 거야. 그리고 최근 토큰 목록(recentTokenList)에 토큰을 추가하고, LocalStorage에 저정하고, LocalStorage가 있으면 그값으로 초기화하고, 변경하면 상태와 함께 스토리지를 업데이트하도록 해줘
// 포맷: { tokenName:'ETH', tokenFullName: 'Ether', tokenId: 'etherenum', tokenValue: 0 }

import { create } from 'zustand';

import { CoinGeckoResponse, getCoinPrices } from '~/utils/coingecko';
import { queryClient } from '~/utils/queryClient';
import { usdConvertAtoB } from '~/utils/usdConvert';

// 토큰 정보에 대한 타입 정의
export interface Token {
    tokenFullName: string;
    tokenId: string;
    tokenName: string;
    tokenValue: number;
    usd?: number;
}

// 스토어 상태에 대한 타입 정의
export interface TokenStoreState {
    addTokenToRecentList: (token: Token) => void;
    recentTokenList: Token[];
    searchText: string;
    selectToken: (value: Token) => void;
    selectType: (type?: 'A' | 'B') => void;
    selectedTokenA: Token | null;
    selectedTokenB: Token | null;
    selectedTokenSetValue: (type: 'A' | 'B', value: number) => void;
    selectedTokenSwap: () => void;
    selectedType?: 'A' | 'B';
    setSearchText: (text: string) => void;
    tokenList: Token[];
    updateTokenUSD: (type: 'A' | 'B', usd: number) => void;
}

// 로컬 스토리지에서 최근 토큰 목록을 가져오는 함수
const getRecentTokenListFromLocalStorage = (): Token[] => {
    // 'recent-tokens' 키로 로컬 스토리지에서 데이터를 가져옵니다.
    const data = localStorage.getItem('recent-tokens');
    return data ? JSON.parse(data) : [];
};

// 코인 목록 초기화값
const initialTokenList = [
    { tokenFullName: 'Ethereum', tokenId: 'ethereum', tokenName: 'ETH', tokenValue: 0 },
    { tokenFullName: 'Tether', tokenId: 'tether', tokenName: 'USDT', tokenValue: 0 },
    { tokenFullName: 'USD Coin', tokenId: 'usd-coin', tokenName: 'USDC', tokenValue: 0 },
    { tokenFullName: 'Dai', tokenId: 'dai', tokenName: 'DAI', tokenValue: 0 },
    { tokenFullName: 'Aave', tokenId: 'aave', tokenName: 'AAVE', tokenValue: 0 },
    { tokenFullName: 'Wrapped Bitcoin', tokenId: 'bitcoin', tokenName: 'WBTC', tokenValue: 0 },
    { tokenFullName: 'Axie Infinity', tokenId: 'axie-infinity', tokenName: 'AXS', tokenValue: 0 },
    { tokenFullName: 'Compound Coin', tokenId: 'compound-coin', tokenName: 'COMP', tokenValue: 0 },
    {
        tokenFullName: 'Curve DAO Token',
        tokenId: 'curve-dao-token',
        tokenName: 'CRV',
        tokenValue: 0,
    },
    {
        tokenFullName: 'Ethereum Name Service',
        tokenId: 'ethereum-name-service',
        tokenName: 'ENS',
        tokenValue: 0,
    },
];

// 스토어 생성
export const useTokenStore = create<TokenStoreState>((set) => ({
    // 토큰을 최근 목록에 추가하는 액션
    addTokenToRecentList: (token: Token) =>
        set((state) => {
            const filteredRecentList = state.recentTokenList.filter(
                (t) => t.tokenId !== token.tokenId
            );

            // 새로운 토큰을 리스트의 맨 뒤에 추가
            let updatedRecentList = [...filteredRecentList, token];

            // 제한 로직
            if (state.recentTokenList.length > 7) updatedRecentList = updatedRecentList.slice(-7);

            // 로컬 스토리지에 최근 토큰 목록 업데이트
            localStorage.setItem('recent-tokens', JSON.stringify(updatedRecentList));
            // 스토어의 상태 업데이트
            return { recentTokenList: updatedRecentList };
        }),
    recentTokenList: getRecentTokenListFromLocalStorage(),
    searchText: '',
    selectToken: (token) =>
        set((state) => {
            const { selectedType } = state;
            if (!selectedType) return state;
            const reverseTokenType = selectedType === 'A' ? 'selectedTokenB' : 'selectedTokenA';
            const type = selectedType === 'A' ? 'selectedTokenA' : 'selectedTokenB';
            state.addTokenToRecentList(token);
            if (state[reverseTokenType]?.tokenId === token.tokenId) {
                return {
                    [reverseTokenType]: state[type],
                    [type]: state[reverseTokenType],
                };
            } else {
                const type = selectedType === 'A' ? 'selectedTokenA' : 'selectedTokenB';
                const targetType = selectedType === 'B' ? 'selectedTokenA' : 'selectedTokenB';
                const target = state[targetType];
                const newState = {
                    [type]: {
                        ...state[type],
                        ...token,
                        tokenValue: state[type]?.tokenValue || 0,
                    },
                };
                if (token.tokenId) {
                    const prefetch = async () => {
                        await queryClient.prefetchQuery(
                            ['tokenPrices', token.tokenId, target?.tokenId],
                            () =>
                                getCoinPrices(
                                    target?.tokenId
                                        ? [token.tokenId, target?.tokenId]
                                        : [token.tokenId]
                                ),
                            { staleTime: 60 * 1000 }
                        );
                        const tokenPrices = queryClient.getQueryData<CoinGeckoResponse>([
                            'tokenPrices',
                            token.tokenId,
                            target?.tokenId,
                        ]);
                        const usd = tokenPrices?.[token.tokenId]?.usd;
                        if (usd) {
                            if (target?.tokenId) {
                                const targetUsd = tokenPrices?.[target?.tokenId]?.usd;
                                if (targetUsd) {
                                    const targetValue = usdConvertAtoB(
                                        newState[type].tokenValue,
                                        usd,
                                        targetUsd
                                    );
                                    newState[targetType] = {
                                        ...target,
                                        tokenValue: targetValue,
                                        usd: targetUsd,
                                    };
                                }
                            }
                            newState[type] = {
                                ...newState[type],
                                usd,
                            };
                            set(newState);
                        }
                    };
                    prefetch();
                }
                return newState;
            }
        }),
    selectType: (type) => set(() => ({ selectedType: type })),
    selectedTokenA: { tokenFullName: 'Dai', tokenId: 'dai', tokenName: 'DAI', tokenValue: 0 },
    selectedTokenB: {
        tokenFullName: 'USD Coin',
        tokenId: 'usd-coin',
        tokenName: 'USDC',
        tokenValue: 0,
    },
    selectedTokenSetValue: (type, value) =>
        set((state) => {
            const selectedType = type === 'A' ? 'selectedTokenA' : 'selectedTokenB';
            const targetType = type === 'B' ? 'selectedTokenA' : 'selectedTokenB';
            const newState = {
                [selectedType]: { ...state[selectedType], tokenValue: value },
            };
            const tokenId = state[selectedType]?.tokenId;
            const targetId = state[targetType]?.tokenId;
            if (tokenId) {
                const prefetch = async () => {
                    await queryClient.prefetchQuery(
                        ['tokenPrices', tokenId, targetId],
                        () => getCoinPrices(targetId ? [tokenId, targetId] : [tokenId]),
                        { staleTime: 60 * 1000 }
                    );
                    const tokenPrices = queryClient.getQueryData<CoinGeckoResponse>([
                        'tokenPrices',
                        tokenId,
                        targetId,
                    ]);
                    const usd = tokenPrices?.[tokenId]?.usd;
                    if (usd) {
                        if (targetId) {
                            const targetUsd = tokenPrices?.[targetId]?.usd;
                            if (targetUsd) {
                                const targetValue = usdConvertAtoB(value, usd, targetUsd);
                                newState[targetType] = {
                                    ...state[targetType],
                                    tokenValue: targetValue,
                                    usd: targetUsd,
                                };
                            }
                        }
                        newState[selectedType] = {
                            ...newState[selectedType],
                            usd,
                        };
                        set(newState);
                    }
                };
                prefetch();
            }
            return newState;
        }),
    selectedTokenSwap: () =>
        set((state) => {
            const { selectedTokenA, selectedTokenB } = state;
            if (!selectedTokenA && !selectedTokenB) return state;
            return {
                selectedTokenA: selectedTokenB ? { ...selectedTokenB } : undefined,
                selectedTokenB: selectedTokenA ? { ...selectedTokenA } : undefined,
            };
        }),
    setSearchText: (text) => set({ searchText: text }),
    // 초기 토큰 목록 및 최근 토큰 목록 상태
    tokenList: initialTokenList,
    updateTokenUSD: (type, usd) =>
        set((state) => {
            const selectedToken = type === 'A' ? 'selectedTokenA' : 'selectedTokenB';
            return { [selectedToken]: { ...state[selectedToken], usd } };
        }),
}));
