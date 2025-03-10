"use client";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Image from "next/image";

export default function CarteValentine({ doc }) {
    const [isExpanded, setIsExpanded] = useState(false);
return (
 <div
  key={doc.id}
  className=" border-b-4 border-yellow-400 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
 >
  <Image
   src={doc.image}
   alt={doc.title}
   width={800}
   height={80}
   className="w-full h-80 object-cover"
  />

  <div className="p-6">
   <button onClick={() => setIsExpanded(!isExpanded)}>
    {" "}
    <h2 className="text-2xl font-semibold text-yellow-400">{doc.title}</h2>
   </button>

   {isExpanded ? (
    <div>
     <p className="text-gray-300">{doc.time}</p>
     <p className="text-gray-300">{doc.description}</p>
     <p className="text-yellow-400">Prix : {doc.price}</p>
     <p className="text-gray-400">Lieu : {doc.location}</p>
    </div>
   ) : (
    <div>
     <button onClick={() => setIsExpanded(!isExpanded)}>
                            <h2>voir plus</h2>
                            <span>
       
      </span>
      <FiPlusCircle />
     </button>
    </div>
   )}
  </div>
 </div>
);
}
