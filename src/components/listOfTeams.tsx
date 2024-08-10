import Link from "next/link";
import React from "react";
import { stringSplit } from "<prefix>/helper/SplitString";

interface TeamsList {
    profile: string;
    name: string;
    slug: string;
    hometown: string;
}

export const TeamRead: React.FC<TeamsList> = ({ profile, name, slug, hometown }) => {
    return (
        <div className="bg-teal-600 rounded-xl p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src={`https:${profile}`} alt={name} width={250} height={110} className="rounded-full" />
            <h2 className="text-xl font-semibold mt-2 text-white">{stringSplit(name, 45)}</h2>
            <p className="text-sm mt-1 text-white">Location: {hometown}</p>
            <Link href={`/about/mainDepartment/${slug}`} className="block mt-2 text-center text-blue-300 hover:text-blue-500 font-semibold transition-colors duration-300">
                Read More
            </Link>
        </div>
    )
}
