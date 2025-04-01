"use client";
import { useState } from "react";
import { Inter } from 'next/font/google';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Acceuil from '@/components/Acceuil';
import Shows1 from '@/components/Shows1';
import Shows2 from '@/components/Shows2';
import Body from "@/components/Body";

import MyContextProvider from "@/provider/MyContextProvider";
import { appWithTranslation } from "next-i18next";
import i18n from "@/i18next";
import metadata from "./metadata"
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'TheaTrum-app',
//   description: 'Site web de présentation des différentes pièces de théâtre',
// };
<metadata/>

function RootLayout({ children }) {
    return (
     <html lang="en">
      <MyContextProvider>
       {""}
       <Body children={children}/>
      </MyContextProvider>
     </html>
    );
}
export default appWithTranslation(RootLayout);

