'use client';

import { OnePieceSet } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MainPage() {
  return (
    <div className="size-ful">
        <div>
            <Link href={'/one-piece'}>
            <Image src={`/images/one-piece/op-tcg-logo.png`} alt={`logo`} width={300} height={168} />
            Banana
            </Link>
        </div>
    </div>
  );
}
