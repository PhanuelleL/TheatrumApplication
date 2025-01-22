import { Inter } from 'next/font/google';
import Header from '@/components/Header'
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TheaTrum-app',
  description: 'Site web de présentation des différentes pièces de théâtre',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
        <body className={inter.className}>
            <Header/>
            {children}
        </body>
        
        </html>
    );
}

