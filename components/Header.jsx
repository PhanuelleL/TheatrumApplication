'use client';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle, MdFavorite } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { GrLanguage } from "react-icons/gr";
import Image from "next/image";
import TheaTrumBook from "@/public/img/TheaTrumBook.webp";

import Shows1 from "@/components/Shows1";
import Shows2 from "@/components/Shows2";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État du menu
    const [isShowsDropdownOpen, setIsShowsDropdownOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverser l'état
    };

    const toggleShowsDropdown = () => {
        setIsShowsDropdownOpen(!isShowsDropdownOpen); // Inverser l'état du dropdown Shows
    };

    return (
        <header className="bg-black">
            {/* Barre de navigation principale */}
            <nav className="container mx-auto flex max-w-7xl justify-between items-center p-4 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="#">
                        <Image
                            src={TheaTrumBook}
                            alt="Logo Theatrum"
                            width={100}
                            height={150}
                            className="cursor-pointer"
                        />
                    </a>
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
                    <MdAccountCircle color="FFD700" size={30} className="cursor-pointer" />
                    <IoLocationSharp color="FFD700" size={30} className="cursor-pointer" />
                    <MdFavorite color="FFD700" size={30} className="cursor-pointer" />
                    <GrLanguage color="FFD700" size={25} className="cursor-pointer" />
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
            <div
                className={`${isMenuOpen ? "block" : "hidden"} md:block bg-black py-3`}
            >
                <ul className="flex flex-col md:flex-row md:space-x-7 space-y-3 md:space-y-0 text-white text-lg items-center justify-center">
                    <li>
                        <button className="flex items-center space-x-2 hover:text-yellow-500">
                            <IoMdHome size={25} color="#FFD700" />
                        </button>
                    </li>
                    <li>
                    <div className="relative">
                            <button
                                onClick={toggleShowsDropdown}
                                className="hover:border-b-4 hover:border-yellow-500 active:border-yellow-500"
                            >
                                Shows
                            </button>
                            {/* Dropdown Shows */}
                            {isShowsDropdownOpen && (
                                <div className="absolute top-full left-0 bg-black border border-yellow-500 mt-0 rounded-lg">
                                    <p>Show1</p>
                                    <p>Show2</p>
                                </div>
                            )}
                        </div>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-yellow-500">
                            Dates
                        </button>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-yellow-500">
                            Reviews
                        </button>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-yellow-500">
                            Tickets
                        </button>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-yellow-500">
                            Books
                        </button>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-yellow-500">
                            Contacts
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}