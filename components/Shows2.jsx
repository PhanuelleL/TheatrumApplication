import Timer from './Timer';
import BarShows from "./BarShows";
import docList from "@/public/json/valentineDoc.json";
import CarteValentine from "./CarteValentine";
import imageB_0 from "@/public/img/imageB_0.webp";
import Image from "next/image";

export default function Shows2() {
    return (
         
        <div className="relative flex-1 flex flex-col items-center p-6">

            <div className="bg-black-800 g-gray-800 rounded-lg overflow-hidden shadow-xl ">
                        
                        <Image 
                            src={imageB_0} 
                            alt="valentine event"
                            width={800}
                            height={100}
                            className="w-full h-80 object-cover" 
                        />
                        <Timer targetDate="2025-02-14T00:00:00"/>
            </div>

            <h1 className="text-3xl italic font-bold bg-black bg-opacity-50 text-white px-4 py-2 border-b-3 border-yellow-400  rounded-lg">Journée Spéciale Saint-Valentin </h1>

            <h2 className="indent-8 italic text-justify text-center overflow-hidden text-ellipsis w-3/4 "> Chers amis, chers amoureux, et chers invités, Aujourd&apos;hui, nous célébrons l&apos;amour sous toutes ses formes ! L&apos;amour qui fait battre nos cœurs, qui illumine nos vies et qui nous pousse à donner le meilleur de nous-mêmes. Cette Journée Spéciale Saint-Valentin est bien plus qu&apos;une simple fête : c&apos;est un moment de partage, d&apos;émotions et de souvenirs inoubliables.
 L&apos;amour se décline en mille couleurs : celui des âmes sœurs qui se sont trouvées, celui des amis inséparables qui se soutiennent, celui des familles unies par des liens indéfectibles. Et aujourd&apos;hui, nous sommes ici pour honorer cet amour, à travers des spectacles, des rires, des surprises et des moments magiques. Que cette journée soit une ode à la tendresse, à la complicité et à la passion ! Que vous soyez ici avec votre moitié, vos amis ou même seul, sachez que l&apos;amour est partout autour de nous et qu&apos;il se trouve dans les plus petits gestes du quotidien. Alors, laissez-vous porter par cette atmosphère féerique ! Inscrivez votre plus belle déclaration sur le Mur des Mots d&apos;Amour, plongez dans la magie du théâtre avec Le Procès de l&apos;Amour, savourez un dîner sous le signe de la romance et vibrez ensemble sous un ciel étoilé pour notre final grandiose. </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-5xl">
                {docList.map((document) => (
                    <CarteValentine key={document.id} doc={document} />
                ))}
            </div>
        </div>
    );
}
