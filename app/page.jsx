import Image from 'next/image';
import book from "@/public/img/book.webp";
import background from "@/public/img/background.webp";
import book2 from "@/public/img/book2.webp";
import twilight from "@/public/img/twilight.webp";
import nosetoiles from "@/public/img/nosetoiles.webp";
import levent from "@/public/img/levent.webp";
export default function Home() {

    return (
        <main>
            <div className="relative w-full h-screen bg-black">
                <Image
                    src={background}
                    alt="bg haut"
                    layout="fill"
                    objectFit="cover"
                    className="absolute w-full h-full"
                />
                <div className ='absolute top-0 left-0 w-full bg-opacity-30 bg-black flex justify-center py-4'>
                    <ul className= "flex space-x-10 text-white text-lg">
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
                        <li className="rounded-full border-solid border-2 w-1/5 h-8 text-center hover:border-yellow-400">
                            <a href="#">Genre</a>
                        </li>
                    </ul>
                </div>
                <div className="absolute top-40 left-10">
                    <h1 className="text-white text-7xl font-bold tracking-wide">
                        THEATRUM CANADA
                    </h1>
                    <h2 className="text-yellow-200 text-2xl mt-2 font-light drop-shadow-lg">
                        Vivez la magie des émotions de vos romans
                    </h2>
                    <div className="absolute top-60 left-10">
                        <Image
                        src={book2}
                        alt="Logo Theatrum"
                        width={300}
                        height={150}
                        />
                    </div>
                </div>

                <div className="absolute top-40 right-10">
                    <Image
                    src={book}
                    alt="Logo Theatrum"
                    width={500}
                    height={500}
                    />
                </div>
            </div>
            
        </main>
    );
}
