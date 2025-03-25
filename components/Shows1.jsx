import docList from "@/public/json/africaDoc.json";
import imageA_0 from "@/public/img/imageA_0.webp";
import CarteValentine from "./CarteValentine";
import Image from "next/image";
import Timer  from "./Timer";


export default function Shows1() {
    return (
        
        <div className="relative flex-1 flex flex-col items-center p-6">
            <div className=" rounded-lg overflow-hidden shadow-xl">             
                <Image 
                    src={imageA_0} 
                    alt="africa event"
                    width={800}
                    height={100}
                    className="w-full h-80 object-cover" 
                />
                <Timer targetDate="2025-04-24T00:00:00"/>
            </div>
    
            {/* Conteneur de la galerie
            <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105`}>
            <SlideImage images={images} className="w-full h-60 object-cover"/> */}

            <h1 className=" text-3xl italic font-bold bg-opacity-50 px-4 py-2 rounded-lg">
                Journée speciale Spectale Africain
            </h1>
            <p className="indent-8 italic  text-justify text-center overflow-hidden text-ellipsis w-3/4">Aujourd&apos;hui, nous nous réunissons pour célébrer l&apos;âme vibrante du théâtre africain ! Une journée exceptionnelle dédiée à l&apos;expression, à l&apos;histoire et aux traditions qui ont façonné les scènes de tout un continent. Le théâtre africain, c&apos;est la voix d&apos;un peuple, l&apos;écho d&apos;une histoire, la transmission d&apos;un héritage. C&apos;est la parole des anciens qui traverse le temps, les contes et légendes qui s&apos;animent sous nos yeux, les danses et chants qui font vibrer nos âmes. À travers ses multiples formes  du théâtre rituel aux spectacles contemporains il nous transporte dans un univers où la parole et le geste fusionnent pour raconter des récits empreints de sagesse, de joie et d&apos;émotions profondes. Aujourd&apos;hui, nous vous invitons à plonger dans cet univers fascinant à travers des pièces captivantes, des performances improvisées, des contes vivants et des dialogues rythmés au son du tam-tam. Chaque scène, chaque mot, chaque geste que vous verrez ici porte en lui une part de notre identité et de notre richesse culturelle. Que cette journée soit une célébration du talent, de la mémoire et de la créativité africaine ! Rions ensemble, réfléchissons ensemble, et laissons-nous emporter par la magie du spectacle. Que vous soyez spectateurs ou acteurs d&apos;un jour, cette scène est la vôtre, et ce moment est unique. Ensemble, faisons résonner le théâtre africain au-delà des murs, au-delà des frontières, pour que son éclat illumine le monde entier !</p>


            <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-4xl">
                            {docList.map((document) => (
                                <CarteValentine key={document.id} doc={document} />
                            ))}
            </div>
        </div>
    );
}