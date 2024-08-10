import Link from "next/link";
import React from "react";
import { stringSplit } from "<prefix>/helper/SplitString";

interface PaperList {
    title: string
    slug: string
    images: string
    category: string
}

export const PaperRead: React.FC<PaperList> = ({title, slug, images, category}) => {
    return (
        <div className="bg-teal-800 rounded-xl">
            <img src={`https:${images}`} alt={title} width={250} height={110} className="rounded-full" />
            <h2>{stringSplit(title, 45)}</h2>
            <p>Categories: {category}</p>
            <Link href={`/merchAndActs/details/${slug}`}>View More</Link>
        </div>
    )
}