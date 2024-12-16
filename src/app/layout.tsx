import Header from '@/components/header';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'CardVerse',
    icons: '/images/chopper-skull.png',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="size-full" lang="en" suppressHydrationWarning>
            <head>
            <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet"></link>
            </head>
            <body className="m-0 size-full bg-red-500">
                <Header />
                <div className='size-full'>{children}</div>
            </body>
        </html>
    );
}
