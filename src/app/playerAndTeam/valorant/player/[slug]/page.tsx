import { getValorant, getValorantSlug } from "<prefix>/lib/contentful";
import Link from "next/link";
import { PlayersofValorant } from "<prefix>/type/playersValorant";
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Wrapper from "<prefix>/components/wrapper";
import { BLOCKS } from "@contentful/rich-text-types";

export const revalidate = 3600

export const generateStaticParams = async () => {
    const gotData = await getValorant()
    return gotData.map((items: PlayersofValorant) => ({
        params: {
            slug: items.fields.slug
        }
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const FeatureSlug = await getValorantSlug(params.slug)

    return {
        name: FeatureSlug.fields.name,
        images: `https:${FeatureSlug.fields.images.fields.file.url}`,
        agents: FeatureSlug.fields.agents
    }
}

export default async function Player({ params }: { params: { slug: string } }) {
    const gotData1 = await getValorantSlug(params.slug)

    const options: Options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (_node, children) => <h1 className="my-[2.5px] md:text-3xl sm:text-2xl text-xl">{children}</h1>,
            [BLOCKS.HEADING_2]: (_node, children) => <h2 className="my-[2.5px] md:text-2xl sm:text-xl text-lg">{children}</h2>,
            [BLOCKS.HEADING_3]: (_node, children) => <h3 className="my-5 md:text-xl sm:text-lg text-base">{children}</h3>,
            [BLOCKS.HEADING_4]: (_node, children) => <h4 className="my-5 md:text-lg sm:text-base text-sm">{children}</h4>,
            [BLOCKS.HEADING_5]: (_node, children) => <h5 className="my-10 md:text-base sm:text-sm text-xs">{children}</h5>,
            [BLOCKS.HEADING_6]: (_node, children) => <h6 className="my-10 mb-20 md:text-base sm:text-sm text-xs">{children}</h6>,
            [BLOCKS.OL_LIST]: (_node, children) => <ol className="list-decimal ml-5">{children}</ol>,
            [BLOCKS.UL_LIST]: (_node, children) => <ul className="list-disc ml-5">{children}</ul>,
            [BLOCKS.LIST_ITEM]: (_node, children) => <li className="my-2">{children}</li>,
        },
    };

    return (
        <Wrapper>
            <div>
                <Link href={'/playerAndTeam/valorant'}>Go Back</Link>
                <img src={`http:${gotData1.fields.images.fields.file.url}`} alt={gotData1.fields.name} height={400} width={220} />
                <h3 className="font-bold">Agents: {gotData1.fields.agents}</h3>
                <p>{documentToReactComponents(gotData1.fields.about, options)}</p>
            </div>
        </Wrapper>
    )

}