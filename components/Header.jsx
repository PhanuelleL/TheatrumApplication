'use client';
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle, MdFavorite } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { GrLanguage } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

import i18next from 'i18next';
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useMyContext } from "@/provider/MyContextProvider";

import Image from "next/image";
import TheaTrumBook from "@/public/img/TheaTrumBook.webp";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverser l'état
    };
    const { theme, toggleTheme } = useMyContext();

    const { t } = useTranslation("header");
    const routeur = useRouter();
    
    return (
     <header>
      {/* Barre de navigation principale */}
      <nav className="container mx-auto flex max-w-7xl justify-between items-center p-4 lg:px-8">
       {/* Logo */}
       <div className="flex lg:flex-1">
        <Link href="/">
         <Image
          src={TheaTrumBook}
          alt="Logo Theatrum"
          width={100}
          height={150}
          className="cursor-pointer"
         />
        </Link>
       </div>

       {/* Barre de recherche (visible sur tous les écrans) */}
       <div className="flex-grow flex justify-center mx-4">
        <div className="relative w-full max-w-md">
         <input
          className="bg-zinc-600 rounded-lg pl-10 pr-3 w-full h-10 text-white focus:outline-none"
          type="text"
          name="research"
          placeholder="Search..."
          aria-label="Search"
         />
         <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
        </div>
       </div>

       {/* Icônes (compte, localisation, favoris, langue) */}
       <div className="flex items-center space-x-5">
        <Link href="/connexion">
         <MdAccountCircle color="FFD700" size={30} className="cursor-pointer" />
        </Link>

        <IoLocationSharp color="FFD700" size={30} className="cursor-pointer" />
        <MdFavorite color="FFD700" size={30} className="cursor-pointer" />
        <Link href="/contact">
         <FaPhone color="FFD700" size={25} className="cursor-pointer" />
        </Link>
        <button className="ml-auto text-2xl" onClick={toggleTheme}>
         {theme === "light" ? (
          <IoMdMoon color="FFD700" />
         ) : (
          <IoSunny color="FFD700" />
         )}
        </button>

        <select
         onChange={(e) => i18next.changeLanguage(e.target.value)}
         defaultValue={i18next.language}
         className="text-black bg-yellow-400 border-color-yellow"
        >
         <option value="en">EN</option>
         <option value="fr">FR</option>
        </select>

        {/* Bouton du menu mobile (visible uniquement sur les petits écrans) */}
        <button
         className="md:hidden"
         onClick={toggleMenu}
         aria-label="Toggle menu"
        >
         {isMenuOpen ? (
          <IoMdClose size={25} color="FFD700" />
         ) : (
          <TiThMenu size={25} color="FFD700" />
         )}
        </button>
       </div>
      </nav>

      {/* Menu de navigation (mobile et desktop) */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:block py-3`}>
       <ul className="flex flex-col md:flex-row md:space-x-7 space-y-3 md:space-y-0 text-lg items-center justify-center">
        <li>
         <Link
          href="/"
          className="flex items-center space-x-2 hover:text-yellow-500"
         >
          <IoMdHome size={25} color="#FFD700" />
         </Link>
        </li>

        <li>
         <button className="hover:border-b-4 hover:border-yellow-500">
          {t("header.dates")}
         </button>
        </li>
        <li>
         <button className="hover:border-b-4 hover:border-yellow-500">
          {t("header.reviews")}
         </button>
        </li>
        <li>
         <button className="hover:border-b-4 hover:border-yellow-500">
          {t("header.tickets")}
         </button>
        </li>
        <li>
         <button className="hover:border-b-4 hover:border-yellow-500">
          {t("header.book")}
         </button>
        </li>
        <li>
         <button className="hover:border-b-4 hover:border-yellow-500">
          {t("header.special")}
         </button>
        </li>
       </ul>
      </div>
     </header>
    );
}