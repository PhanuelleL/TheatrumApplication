"use client";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import Image from 'next/image';
export default function SlideImage({images}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    };
       
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return(
        <div className="relative max-w-3xl mx-auto">
            {/* Image */}
            <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                width={650}
                height={700}
                objectFit="cover"
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500"
            />
            {/* Boutons navigation */}
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
            >
                
                <GrFormPrevious />
            </button>
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
            >
                <MdNavigateNext />
            </button>
        </div>
    );
}