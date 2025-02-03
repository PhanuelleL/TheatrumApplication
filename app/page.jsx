"use client";
import { useState } from "react";
import Acceuil from "@/components/Acceuil";
import Shows1 from '@/components/Shows1';
import Shows2 from '@/components/Shows2';

export default function Home() {
    const [page, setPage] = useState("all");
    return (
        <main className='flex-1 bg-black'>
            {page === "all" ? (
                <Acceuil changePage={setPage} />
            ):
            page === "show1" ? (
                <Shows1 changePage={setPage} />
            ) : page === "show2" ? (
                <Shows2 changePage={setPage} />
            ) : null
                
            }
        </main>
    );
}
