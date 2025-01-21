function _BoxOffice() {
    return (
        <div>
          <h3 className="font-bold uppercase mb-3">Box Office</h3>
          <p className="text-yellow-400 text-2xl font-bold">(819) 593-8852</p>
          <hr className="border-t border-gray-700 my-4" />
        </div>
    );
}


function _StayInformed() {
    return (
        <div>
          <h3 className="font-bold uppercase mb-3">Rester informé</h3>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">S'abonner</button>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
          {/* Première rangée */}
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <BoxOffice />
            <Address />
            <Navigation />
            <StayInformed />
          </div>
    
          {/* Ligne de séparation */}
          <hr className="border-t border-gray-700 my-8" />
    
          {/* Deuxième rangée : Réseaux sociaux et crédits */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-facebook"></i></button>
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-twitter"></i></button>
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-instagram"></i></button>
              <button className="text-yellow-400 hover:text-white"><i className="fab fa-youtube"></i></button>
            </div>
    
            {/* Crédits */}
            <p className="text-gray-500 text-sm">&copy; 2024 TheaTrum. Tous droits réservés.</p>
          </div>
        </footer>
    );
}
  