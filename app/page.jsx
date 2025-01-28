import Image from 'next/image';
import book from "@/public/img/book.webp";
import background from "@/public/img/background.webp";
import book2 from "@/public/img/book2.webp";
import twilight from "@/public/img/twilight.webp";
import nosetoiles from "@/public/img/nosetoiles.webp";
import levent from "@/public/img/levent.webp";
export default function Home() {

    return (
        <main className='flex-1 bg-black'>
            <div className="relative h-screen max-w-7xl mx-auto flex">
                <Image
                    src={background}
                    alt="bg haut"
                    layout="fill"
                    objectFit="cover"
                    className="absolute w-full h-full"
                />
                <div className ='flex relative top-0 left-0 w-full bg-opacity-30 bg-black flex justify-center py-4 '>
                    <ul className= "flex space-x-4 px-2 text-white text-sm sm:text-lg">
                        <li className="rounded-full border-solid border-2 w-1/5 h-8 text-center  hover:border-yellow-400">
                            <a href="#">All</a>
                        </li>
                        <li className="rounded-full border-solid border-2 w-1/5 h-8 text-center  hover:border-yellow-400">
                            <a href="#">Date</a>
                        </li>
                        <li className="rounded-full border-solid border-2 w-1/5 h-8 text-center  hover:border-yellow-400">
                            <a href="#">Tonight</a>
                        </li>
                        <li className="rounded-full border-solid border-2 w-60 h-8 text-center hover:border-yellow-400">
                            <a href="#">This Week</a>
                        </li>
                        <li className="rounded-full border-solid border-2 w-80 h-8 text-center hover:border-yellow-400">
                            <a href="#">This Weekend</a>
                        </li>
                        <li className="rounded-full border-solid border-2 w-1/5 h-8 text-center hover:border-yellow-400">
                            <a href="#">Summer</a>
                        </li>
                        
                    </ul>
                </div>

                <div className="absolute top-1/4  left-5 sm:left-10 md:left-14 lg:left-20 text-left">
                    <h1 className="text-white text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
                        THEATRUM CANADA
                    </h1>
                    <h2 className="text-yellow-200 text-lg sm:text-2xl md:text-3xl lg:text-2xl mt-2 font-light drop-shadow-lg">
                        Vivez la magie des émotions de vos romans
                    </h2>
                </div>

                <div className="absolute bottom-20 right-5 sm:bottom-10 sm:right-10 md:right-10 lg:top-1/4 lg:right-10">
                    <Image
                    src={book}
                    alt="Logo Theatrum"
                    width={600}
                    height={600}
                    />
                </div>
            </div>
            
        </main>
    );
}
