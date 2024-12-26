'use client';

import { PokemonTCGSet } from '@/types/types';
import Image from 'next/image';
import React from 'react';

interface Props {
    pokemonSets: PokemonTCGSet[];
}

export default function PokemonSets({ pokemonSets }: Props) {
  return (
    <div className="size-full">
      {pokemonSets.map((pokemon) => (
        <div key={pokemon.id}>
            <div>
                <Image src={`${pokemon.images.logo}`} alt={`${pokemon.name}`} width={200} height={100} />
            </div>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}
