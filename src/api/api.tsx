import { OnePieceSet, PokemonTCGSet, YuGiOhSet } from '@/types/types';

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

export const getPokemonSets = async (): Promise<PokemonTCGSet[]> => {

  const res = await fetch(`https://api.pokemontcg.io/v2/sets/`, {
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

  return result.data;
};

export const getYuGiOhSets = async (): Promise<YuGiOhSet[]> => {

  const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardsets.php`, {
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
