"use client";
import Link from "next/link";

import BarShows from "./BarShows";
import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoMdLogIn, IoMdMoon, IoMdClose, IoMdHome } from "react-icons/io";
import { IoLocationSharp, IoSunny } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useMyContext } from "@/provider/MyContextProvider";

import Image from "next/image";
import TheaTrumBook from "@/public/img/TheaTrumBook.webp";

export default function Header({ changePage }) {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 const [isSpecialOpen, setIsSpecialOpen] = useState(false);

 const { theme, toggleTheme } = useMyContext();
 const { t } = useTranslation("header");

 return (
  <header
   className={`fixed top-0 left-0 w-full h-50 ${
    theme === "light" ? "bg-white" : "bg-black"
   } z-50`}
  >
   {/* Barre de navigation principale */}
   <nav className="container mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 h-full">
    {/* Logo */}
    <div className="flex items-center">
     <Link href="/">
      <Image
       src={TheaTrumBook}
       alt="Logo Theatrum"
       width={100}
       height={50}
       className="cursor-pointer"
      />
     </Link>
    </div>

    {/* Barre de recherche (cachée en mobile) */}
    <div className="hidden md:flex flex-grow justify-center">
     <div className="relative w-full max-w-md">
      <input
       className="bg-zinc-600 text-white rounded-lg pl-10 pr-3 w-full h-10 focus:outline-none"
       type="text"
       name="research"
       placeholder="Search..."
       aria-label="Search"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
     </div>
    </div>

    {/* Icônes de navigation */}
    <div className="flex items-center space-x-4">
     <Link href="/connexion" aria-label="Login">
      <IoMdLogIn size={28} className="text-yellow-500 cursor-pointer" />
     </Link>
     <IoLocationSharp size={28} className="text-yellow-500 cursor-pointer" />
     <MdFavorite size={28} className="text-yellow-500 cursor-pointer" />
     <Link href="/contact" aria-label="contact">
      <FaPhone size={24} className="text-yellow-500 cursor-pointer" />
     </Link>

     {/* Toggle Theme */}
     <button
      className="text-2xl"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
     >
      {theme === "light" ? (
       <IoMdMoon className="text-yellow-500" />
      ) : (
       <IoSunny className="text-yellow-500" />
      )}
     </button>

     {/* Langue */}
     <select
      onChange={(e) => i18next.changeLanguage(e.target.value)}
      defaultValue={i18next.language}
      className="text-black bg-yellow-400 p-1 rounded"
      aria-label="l"
     >
      <option value="en">EN</option>
      <option value="fr">FR</option>
     </select>

     {/* Menu burger pour mobile */}
     <button
      onClick={toggleMenu}
      className="md:hidden"
      aria-label="Toggle Menu"
     >
      {isMenuOpen ? (
       <IoMdClose size={30} className="text-yellow-500" />
      ) : (
       <TiThMenu size={30} className="text-yellow-500" />
      )}
     </button>
    </div>
   </nav>

   {/* Menu mobile */}
   <div
    className={`py-2 ${
     isMenuOpen ? "block" : "hidden"
    } md:flex md:space-x-7 md:items-center md:justify-center`}
   >
    <ul className="flex flex-col md:flex-row md:space-x-7 space-y-3 md:space-y-0 text-lg">
     <li>
      <Link
       href="/"
       aria-label="Accueuil"
       className="flex items-center space-x-2 hover:text-yellow-500"
      >
       <IoMdHome size={25} color="#FFD700" />
      </Link>
     </li>

     <li>
      <Link
       href="/livres"
       className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:text-yellow-100 hover-border"
      >
       {t("header.book")}
      </Link>
     </li>

     <li>
      <Link
       href="/contact"
       className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:text-yellow-100 hover-border"
      >
       {t("header.contact")}
      </Link>
     </li>

     {/* Bouton avec sous-menu */}
     <li className="relative">
      <button
       className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:text-yellow-100 hover-border"
       onClick={() => setIsSpecialOpen(!isSpecialOpen)}
      >
       {t("header.special")}
      </button>

      {/* Sous-menu */}
      {isSpecialOpen && (
       <BarShows changePage={changePage} setIsSpecialOpen={setIsSpecialOpen} />
      )}
     </li>
    </ul>
   </div>
  </header>
 );
}
