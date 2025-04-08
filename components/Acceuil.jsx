"use client";
import Image from 'next/image';
import book from "@/public/img/book.webp";
import background from "@/public/img/background.webp";
import InstallPrompt from './InstallPrompt';

export default function Acceuil() {
    return (
     <div>
      <div className="relative max-w-7xl mx-auto flex bg-yellow">
       <Image
        src={background}
        alt="bg haut"
        width={1300}
        height={700}
        color="yellow"
       />

       <div className="absolute top-1/4 left-5 sm:left-10 md:left-14 lg:left-20 text-left">
        <h1 className="text-white text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
         THEATRUM CANADA
        </h1>
        <h2 className="text-yellow-200 text-lg sm:text-2xl md:text-3xl lg:text-2xl mt-2 font-light drop-shadow-lg">
         Vivez la magie des émotions de vos romans
        </h2>
        <InstallPrompt className='bg-black text-white'/>
       </div>

       <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-40 md:right-10 md:bottom-10 lg:top-32 lg:right-5">
        <Image src={book} alt="Logo Theatrum" width={500} height={500} />
       </div>
      </div>

      {/* Section Liste des documents */}
     </div>
    );
}  

