import Link from "next/link";
import React from "react";
import { stringSplit } from "<prefix>/helper/SplitString";

interface ListOfValorant {
    name: string;
    slug: string;
    images: string;
}

export const ValorantThings: React.FC<ListOfValorant> = ({name, slug, images}) => {
    return (
        <div>
            <ul className="mt-5">
                <img src={`https:${images}`} alt={name} width={250} height={110} className="rounded-full" />
                <li>{stringSplit(name, 50)}</li>
                <li><Link href={`/playerAndTeam/valorant/player/${slug}`}>Click More</Link></li>
            </ul>
        </div>
    )
}