'use client';

import { YuGiOhSet } from '@/types/types';
import Image from 'next/image';
import React from 'react';

interface Props {
    yuGiOhSets: YuGiOhSet[]
}

export default function YuGiOhSets({ yuGiOhSets }: Props) {
  return (
    <div className="size-full">
      {yuGiOhSets.map((yuGiOh) => (
        <div key={yuGiOh.set_code}>
            <div>
            {yuGiOh.set_image ? (
              <Image src={yuGiOh.set_image} alt={yuGiOh.set_name} width={200} height={100} />
            ) : (
              <div style={{ width: 200, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', color: '#555' }}>
                No Image Available
              </div>
            )}
            </div>
          {yuGiOh.set_name}
        </div>
      ))}
    </div>
  );
}
