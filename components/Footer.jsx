import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
 
export default function Footer() {
    const { t } = useTranslation("footer");
    
    return (
     <footer className=" py-8">
      {/* Section principale */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
       {/* Box Office */}
       <div className="text-center md:text-left">
        <h3 className="font-bold uppercase mb-3 text-lg">
         {t("footer.boxText")}
        </h3>
        <p className="text-2xl font-bold">(819) 593-8852</p>
        <p className="mt-2">{t("footer.dispoText")}</p>
       </div>

       {/* Rester informé */}
       <div className="text-center md:text-left">
        <h3 className="font-bold uppercase mb-3 text-lg">
         {t("footer.infoText")}
        </h3>
        <form className="flex flex-col gap-3">
         <input
          type="email"
          placeholder="Votre email"
          className="bg-black rounded-lg px-4 py-2 focus:outline-none"
         />
         <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
          {t("footer.abonner")}
         </button>
        </form>
       </div>

       {/* mes Navigation rapide */}
       <div className="text-center md:text-left">
        <h3 className="font-bold uppercase mb-3 text-lg">
         {t("footer.navcolumn")}
        </h3>
        <ul className="flex flex-col gap-2">
         <li>
          <button className="hover:underline">
           {t("footer.accueil")}
          </button>
         </li>
         <li>
          <button className="hover:underline">
           {t("footer.spectacles")}
          </button>
         </li>
         <li>
          <button className="hover:underline">
           {t("footer.dates")}
          </button>
         </li>
         <li>
          <button className="hover:underline">
           {t("footer.billets")}
          </button>
         </li>
         <li>
          <button className="hover:underline">
           {t("footer.contacts")}
          </button>
         </li>
        </ul>
       </div>

       {/* pour tout les differents Réseaux sociaux */}
       <div className="text-center md:text-left">
        <h3 className="font-bold uppercase mb-3 text-lg">
         {t("footer.follow")}
        </h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <FaFacebook className="text-yellow-400 hover:text-white" />
          <FaTwitter className="text-yellow-400 hover:text-white" />
          <FaInstagram className="text-yellow-400 hover:text-white" />
          <FaYoutube className="text-yellow-400 hover:text-white" />
        </div>
       </div>
      </div>

      {/*pour la Ligne de séparation */}
      <hr className="border-t border-gray-700 my-8" />

      {/* Crédits */}
      <div className="container mx-auto text-center text-gray-500 text-sm">
       &copy; {t("footer.credit")}
      </div>
     </footer>
    );
}