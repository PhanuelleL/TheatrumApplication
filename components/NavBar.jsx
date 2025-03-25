"use client";
import { useRouter } from "next/navigation";

export default function NavBar({ setIsSpecialOpen }) {

    const routeur = useRouter();
 return (
  <ul className="flex flex-col space-y-3 text-sm sm:text-lg">
   <li className="hover:border-b-2">
    <button
     onClick={() => {
      setIsSpecialOpen(false);
      routeur.push("/africaShow");
     }}
    >
     Africa Show
    </button>
   </li>
   <li className="hover:border-b-2">
    <button
     onClick={() => {
      setIsSpecialOpen(false);
      routeur.push("/valentineShow");
     }}
    >
     Valentine Show
    </button>
   </li>
  </ul>
 );
}
