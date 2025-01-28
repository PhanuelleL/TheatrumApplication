'use client';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

import { GrLanguage } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";

import Image from "next/image";
import TheaTrumBook from "@/public/img/TheaTrumBook.webp";

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false); // État du menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverser l'état
    };

    return <header className = "bg-black">

        <nav className="container mx-auto flex max-w-7xl justify-between items-center lg:px-8">
            
            <div className="flex lg:flex-1">
                <a href="#"><Image src={TheaTrumBook} alt="Logo Theatrum"  width={100} height={150} className="cursor-pointer"/></a>
            </div>
            

            <div className="flex-grow flex justify-center">
                <div className="relative w-full max-w-md">
                    <input
                    className="bg-zinc-600 rounded-lg pl-10 pr-3 w-full h-10 text-white focus:outline-none"
                    type="text"
                    name="research"
                    placeholder="Search..."
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
                </div>
            </div>

            <div className="flex items-center space-x-5">
            <MdAccountCircle color="FFD700" size={30} />
            <IoLocationSharp color="FFD700" size={30} />
            <MdFavorite color="FFD700" size={30} />
            <GrLanguage color="FFD700" size={25} />
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

        <div className={`${isMenuOpen ? "block" : "hidden"} md:flex justify-center bg-black py-3 md:flex flex-col md:flex-row justify-center bg-black py-3`} >
            <ul className="flex flex-col md:flex-row md:space-x-7 space-y-3 md:space-y-0 text-white text-lg">
            <li>
                <button>
                <IoMdHome size={25} color="#FFD700" />
                </button>
            </li>
            <li>
                <button className="hover:border-b-4 hover:border-white active:border-white">Shows</button>
            </li>
            <li>
                <button className="hover:border-b-4 hover:border-white">Dates</button>
            </li>
            <li>
                <button className="hover:border-b-4 hover:border-white">Reviews</button>
            </li>
            <li>
                <button className="hover:border-b-4 hover:border-white">Tickets</button>
            </li>
            <li>
                <button className="hover:border-b-4 hover:border-white">Books</button>
            </li>
            <li>
                <button className="hover:border-b-4 hover:border-white">Contacts</button>
            </li>
            </ul>
      </div>
    </header>
}
