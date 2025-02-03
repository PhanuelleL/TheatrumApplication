
import BarShows from "./BarShows";
import docList from "@/public/json/valentineDoc.json";
import CarteValentine from "./CarteValentine";
import imageB_0 from "@/public/img/imageB_0.webp"
import Image from "next/image";

export default function Shows2({ changePage }) {
    return (
         
        <div className="relative flex-1 flex flex-col items-center bg-black text-white p-6">
            {/* Barre de navigation */}
            <BarShows changePage={changePage} />

            <div className="bg-black-800 g-gray-800 rounded-lg overflow-hidden shadow-xl  border-b-4 w-max border-yellow-400 rounded-lg">
                        
                        <Image 
                            src={imageB_0} 
                            alt="valentine event"
                            width={800}
                            height={100}
                            className="w-full h-80 object-cover" 
                        />
            </div>

            {/* Titre */}
            <h1 className="left-1/2 transform -translate-x-1/2 text-3xl font-bold bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">Journée Spéciale Saint-Valentin </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-5xl">
                {docList.map((document) => (
                    <CarteValentine key={document.id} doc={document} />
                ))}
            </div>
        </div>
    );
}
