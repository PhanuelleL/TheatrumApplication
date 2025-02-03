import Image from 'next/image';
import book from "@/public/img/book.webp";
import background from "@/public/img/background.webp";

export default function Acceuil() {
    return (
        <div className="relative h-screen max-w-7xl mx-auto flex flex-col">
            {/* Image de fond */}
            <div className="absolute w-full h-full">
                <Image
                    src={background}
                    alt="bg haut"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute w-full h-full"
                />
            </div>

            {/* Barre de filtres */}
            <div className="relative top-0 left-0 w-full bg-opacity-30 bg-black flex justify-center py-4">
                <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 px-4 text-white text-sm sm:text-lg">
                    {["All", "Date", "Tonight", "This Week", "This Weekend"].map((item, index) => (
                        <li key={index} className="rounded-full border-solid border-2 border-white px-4 py-2 text-center hover:border-yellow-400">
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Titres */}
            <div className="absolute top-1/4 left-5 sm:left-10 md:left-14 lg:left-20 text-left">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                    THEATRUM CANADA
                </h1>
                <h2 className="text-yellow-200 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 font-light drop-shadow-lg">
                    Vivez la magie des émotions de vos romans
                </h2>
            </div>

            {/* Image du livre */}
            <div className="absolute bottom-10 right-5 sm:bottom-10 sm:right-10 md:right-10 lg:top-1/4 lg:right-10 flex justify-center items-center">
                <Image
                    src={book}
                    alt="Logo Theatrum"
                    width={300}
                    height={300}
                    className="w-40 sm:w-60 md:w-80 lg:w-[400px]"
                />
            </div>
        </div>
    );
}


