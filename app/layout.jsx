"use client";
import { useState } from "react";
import { Inter } from 'next/font/google';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Acceuil from '@/components/Acceuil';
import Shows1 from '@/components/Shows1';
import Shows2 from '@/components/Shows2';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'TheaTrum-app',
//   description: 'Site web de présentation des différentes pièces de théâtre',
// };

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header/>
                {children}
                
                <Footer/>
            </body>
        </html>
    );
}

