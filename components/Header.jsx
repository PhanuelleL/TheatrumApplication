import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { GrLanguage } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";

import Image from "next/image";
import TheaTrumBook from "@/public/img/TheaTrumBook.webp";

export default function Header(){
    return <header className = "bg-black">
        <nav className="flex justify-center items-center">
            <Image
                src={TheaTrumBook}
                alt="Logo Theatrum"
                width={120}
                height={150}
                className="cursor-pointer"
            />
            <TiThMenu className="md:hidden" color="FFD700"/>

            <div className="flex justify-center flex-grow mt-20 mr-24">
                <ul className="flex justify-center gap-x-7 text-white text-lg">
                    <li>
                        <button><IoMdHome size={25} color="#FFD700"/></button>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-white active:border-white">Shows</button>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-white">Dates</button>
                    </li>
                    <li>
                        <button className="hover:border-b-4 hover:border-white">Revews</button>
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

            <div className=" justify-center  items-center pr-5 absolute top-5 right-0">
                <ul className="flex items-center gap-x-1">
                    <li className="flex">
                        <input
                            className="bg-zinc-600 rounded-lg pl-5 w-80 h-8 text-white focus:outline-none" 
                            type="text" 
                            name="research" 
                            placeholder="Search..."/>
                        <FaSearch 
                        className="absolute right-60 top-1/2 transform -translate-y-1/2 text-yellow-500"/>
                    </li>
                    <li className="pl-4">
                        <MdAccountCircle color="FFD700" size={30}/>
                    </li>
                    <span className="h-6 w-px bg-gray-400"></span>
                    <li className="pl-4">
                        <IoLocationSharp color="FFD700" size={30}/>
                    </li>
                    <span className="pt-15 h-6 w-px bg-gray-400"></span>
                    <li className="pl-4">
                        <MdFavorite color="FFD700" size={30}/>
                    </li>
                    <span className="pt-15 h-6 w-px bg-gray-400"></span>
                    <li className="pl-4">
                        <GrLanguage  color="FFD700" size={25}/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}
