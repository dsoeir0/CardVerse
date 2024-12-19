'use client';

import Image from 'next/image';
import React from 'react';

export default function Header() {
    return (
        <header className="flex w-full bg-black text-white">
            <div className='flex flex-row w-full'>
                <Image src={'/images/chopper-logo.png'} alt='Chopper Skull' width={128} height={128} className='text-left pl-4'/>
            <div className='size-full flex items-center justify-center text-5xl font-rubik-glitch'>CardVerse</div>
            </div>
        </header>
    );
}
