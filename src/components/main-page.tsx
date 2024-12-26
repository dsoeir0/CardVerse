'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MainPage() {
  return (
    <div className="size-ful">
        <div>
            <Link href={'/one-piece'}>
            <Image src={`/images/one-piece/logo.png`} alt={`logo`} width={300} height={168} />
            </Link>
        </div>
        <div>
            <Link href={'/pokemon'}>
            <Image src={`/images/pokemon/logo.png`} alt={`logo`} width={300} height={168} />
            </Link>
        </div>
    </div>
  );
}
