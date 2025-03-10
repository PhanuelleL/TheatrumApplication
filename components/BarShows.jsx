"use client";
import NavBar from "./NavBar";

export default function BarShows({ changePage }) { 
    return (
        <div className='flex relative top-0 left-0 w-full bg-opacity-30 flex justify-center py-4'>
            <NavBar changePage={changePage} /> 
        </div>
    );
}
