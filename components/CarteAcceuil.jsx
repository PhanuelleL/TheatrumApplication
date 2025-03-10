"use client";
import { useState } from "react";

import Image from "next/image";

export default function CarteAcceuil({ doc }) {
    return (
        <div key={doc.id} className=" shadow-md border-r-4 border-b-4 border-yellow-400 rounded-2xl overflow-hidden w-72">
            <Image src={doc.image} alt={doc.title} width={288} height={160} className="object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{doc.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{doc.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                    📅 {doc.date} | 📍 {doc.location}
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600">
                    Voir Plus
                </button>
            </div>
        </div>
    );
}
