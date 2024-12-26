'use client';

import { OnePieceSet } from '@/types/types';
import Image from 'next/image';
import React from 'react';

interface Props {
    onePieceSets: OnePieceSet[];
}

export default function OnePieceSets({ onePieceSets }: Props) {
  return (
    <div className="size-full">
      {onePieceSets.map((onePiece) => (
        <div key={onePiece.set_id}>
            <div>
                <Image src={`/images/one-piece/sets/${onePiece.set_id}.png`} alt={`${onePiece.set_name}`} width={200} height={100} />
            </div>
          {onePiece.set_name}
        </div>
      ))}
    </div>
  );
}
