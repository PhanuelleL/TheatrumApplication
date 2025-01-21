import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TheaTrum-app',
  description: 'Site web de présentation des différentes pièces de théâtre',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Contenu principal */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-8">
          {/* Première rangée */}
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Colonne 1 : Box Office */}
            <div>
              <h3 className="font-bold uppercase mb-3">Box Office</h3>
              <p className="text-yellow-400 text-2xl font-bold">(819) 593-8852</p>
              <hr className="border-t border-gray-700 my-4" />
              <div className="flex space-x-4">
                {/* Réseaux sociaux */}
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-facebook"></i></button>
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-twitter"></i></button>
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-instagram"></i></button>
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-youtube"></i></button>
            </div>
              </div>

            {/* Colonne 2 : Adresse */}
            <div>
              <h3 className="font-bold uppercase mb-3">Adresse</h3>
              <p>300-1227 Wellington St. W.</p>
              <p>Ottawa, Ontario, Canada K1Y 0G7</p>
              <button className="text-yellow-400 hover:underline">Voir les horaires d'ouverture</button>
            </div>

            {/* Colonne 3 : Navigation */}
            <div>
              <h3 className="font-bold uppercase mb-3">Navigation</h3>
              <nav className="flex flex-col space-y-2">
                <button className="text-yellow-400 hover:underline">Accueil</button>
                <button className="text-yellow-400 hover:underline">Spectacles</button>
                <button className="text-yellow-400 hover:underline">Contact</button>
              </nav>
            </div>

            {/* Colonne 4 : Rester informé */}
            <div>
              <h3 className="font-bold uppercase mb-3">Rester informé</h3>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                S'abonner
              </button>
            </div>
          </div>

          {/* Ligne de séparation */}
          <hr className="border-t border-gray-700 my-8" />

          {/* Deuxième rangée : Réseaux sociaux et crédits */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
          
            {/* Crédits */}
            <p className="text-gray-500 text-sm">&copy; 2024 TheaTrum. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

