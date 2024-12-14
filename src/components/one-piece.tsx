'use client';

import { OnePieceCard } from '@/types/types';
import React from 'react';

interface Props {
  onePieceCards: OnePieceCard[];
}

export default function OnePiece({ onePieceCards }: Props) {
  return (
    <div className="size-full bg-red-500">
      {onePieceCards.map((card) => (
        <div key={card.id}>
          {card.set.name}
        </div>
      ))}
    </div>
  );
}
