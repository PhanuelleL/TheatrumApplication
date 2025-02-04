"use client";

export default function NavBar({ changePage }) {
    return (
        <ul className="flex space-x-4 px-2 text-white text-sm sm:text-lg">
            <li className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:border-yellow-400">
                <button onClick={() => changePage("all")} className="w-full h-full">
                    All
                </button>
            </li>
            <li className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:text-yellow-100 hover-border">
                <button onClick={() => changePage("show1")} className="w-full h-full">
                    Africa Show
                </button>
            </li>
            <li className="rounded-full border-solid border-yellow-400 border-b-2 w-40 h-8 text-center hover:border-yellow-400">
                <button onClick={() => changePage("show2")} className="w-full h-full">
                    Valentine Show
                </button>
            </li>
        </ul>
    );
}
