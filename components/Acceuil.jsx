"use client";
import CarteAcceuil from "./CarteAcceuil";
import NavBar from "./NavBar";
import BarShows from "./BarShows";
import docList from "@/public/json/doc.json";
import Image from 'next/image';
import book from "@/public/img/book.webp";
import background from "@/public/img/background.webp";

export default function Acceuil({ changePage }) {
    return (
        <div>
          
            <div className="relative h-screen max-w-7xl mx-auto flex">
                <Image
                    src={background}
                    alt="bg haut"
                    layout="fill"
                    objectFit="cover"
                    className="absolute w-full h-full"
                />
                
                <BarShows changePage={changePage} />

                <div className="absolute top-1/4 left-5 sm:left-10 md:left-14 lg:left-20 text-left">
                    <h1 className="text-white text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
                        THEATRUM CANADA
                    </h1>
                    <h2 className="text-yellow-200 text-lg sm:text-2xl md:text-3xl lg:text-2xl mt-2 font-light drop-shadow-lg">
                        Vivez la magie des émotions de vos romans
                    </h2>
                </div>

                <div className="absolute bottom-10 right-5 sm:bottom-10 sm:right-10 md:right-10 md:bottom-10 lg:top-32 lg:right-1">
                    <Image
                        src={book}
                        alt="Logo Theatrum"
                        width={650}
                        height={700}
                    />
                </div>
            </div>

            {/* Section Liste des documents */}
            <div className="max-w-6xl mx-auto px- py-20">
                <h1 className="text-4xl font-bold text-center my-8">Liste des documents</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {docList.map((document) => (
                        <CarteAcceuil key={document.id} doc={document} />
                    ))}
                </div>
            </div>
        </div>
    );
}  

