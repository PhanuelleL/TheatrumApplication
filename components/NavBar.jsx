"use client";
import Link from "next/link";

export default function NavBar() {
    return (
     <ul className="flex space-x-4 px-2 text-white text-sm sm:text-lg">
      <li className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:border-yellow-400">
       <Link href="/">All</Link>
      </li>
      <li className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:text-yellow-100 hover-border">
       <Link href="/africaShow">Africa Show</Link>
      </li>
      <li className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:border-yellow-400">
       <Link href="/valentineShow">Valentine Show</Link>
      </li>
     </ul>
    );
}
