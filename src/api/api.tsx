// api/api.ts
import { OnePieceCard } from '@/types/types';

export const getOnePiece = async (): Promise<OnePieceCard[]> => {
  const API_BASE_URL = 'https://apitcg.com/api/';
  const url = `${API_BASE_URL}/one-piece/cards`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await res.json();

  return result.data || [];
};
