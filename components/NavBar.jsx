"use client";
import Link from "next/link";

export default function NavBar() {
    return (
     <ul className="flex flex-col space-y-3 text-sm sm:text-lg">
      <li className="hover:text-white">
       <Link href="/africaShow">Africa Show</Link>
      </li>
      <li className="hover:text-white">
       <Link href="/valentineShow">Valentine Show</Link>
      </li>
     </ul>
    );
}
