import { OnePieceSet } from '@/types/types';

export const getOnePieceSets = async (): Promise<OnePieceSet[]> => {

  const res = await fetch(`https://optcgapi.com/api/allSets/`, {
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

  return result;
};
