import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
    title: 'Theatrum-app',
    description: 'Site web de presentation des differentes piece de theatre',
};
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
