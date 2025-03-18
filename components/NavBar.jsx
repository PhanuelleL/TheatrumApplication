"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar({ setIsSpecialOpen }) {

    const routeur = useRouter();
 return (
  <ul className="flex flex-col space-y-3 text-sm sm:text-lg">
   <li className="hover:text-white">
             <button onClick={() => {
                 setIsSpecialOpen(false);
                 routeur.push("/africaShow")
    }} >Africa Show</button>
   </li>
   <li className="hover:text-white">
    <Link href="/valentineShow">Valentine Show</Link>
   </li>
  </ul>
 );
}
