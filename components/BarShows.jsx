"use client";
import NavBar from "./NavBar";

export default function BarShows({ changePage }) { 
    return (
     <div className="bg-black-400 text-yellow-400 flex justify-center py-2 rounded-md border-solid border-yellow-400 border-b-2 border-t-2">
      <NavBar changePage={changePage} />
     </div>
    );
}
