import BarShows from "./BarShows";
import SlideImage from "./SlideImages";
import docList from "@/public/json/africaDoc.json"
import CarteValentine from "./CarteValentine";
import image_A1 from "@/public/img/image_A1.webp";
import image_A2 from "@/public/img/image_A2.webp";
import image_A3 from "@/public/img/image_A3.webp";
import image_A4 from "@/public/img/image_A4.webp";


export default function Shows1({ changePage }) {
    const images = [image_A1, image_A2, image_A3, image_A4]
    return (
        
        <div className="relative flex-1 flex flex-col items-center w-screen">
        {/* Barre de navigation */}
        <BarShows changePage={changePage} />
    
        {/* Conteneur de la galerie */}
        <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105`}>
        <SlideImage images={images} className="w-full h-60 object-cover"/>

        {/* Texte superposé sur l'image */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            Galerie d'Images
        </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-5xl">
                        {docList.map((document) => (
                            <CarteValentine key={document.id} doc={document} />
                        ))}
        </div>
    </div>
    );
}