import { OnePieceCard } from '@/types/types';

const API_BASE_URL = 'https://apitcg.com/api/';

export const getOnePiece = async (endpoint: string): Promise<OnePieceCard> => {
    const url = `${API_BASE_URL}/one-piece/cards`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Error fetching ${endpoint}: ${response.statusText}`
            );
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
