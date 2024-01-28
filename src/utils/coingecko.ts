import axios from 'axios';

const coingeckoInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
});

export interface CoinGeckoResponse {
    [key: string]:
        | {
              usd: number;
          }
        | undefined;
}

export async function getCoinPrices(ids: string[]): Promise<CoinGeckoResponse> {
    try {
        const idsParam = ids.length > 0 ? ids.join(',') : '';
        const response = await coingeckoInstance.get<CoinGeckoResponse>('simple/price', {
            params: {
                ids: idsParam,
                vs_currencies: 'usd',
                x_cg_demo_api_key: import.meta.env.VITE_COINGECHKO_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching coin prices:', error);
        throw error;
    }
}
