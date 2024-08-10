import Wrapper from "<prefix>/components/wrapper";
import { getFeature, getFeatureSlug } from "<prefix>/lib/contentful";
import { Features } from "<prefix>/type/feature";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS } from "@contentful/rich-text-types"; // Use it for Later

export const revalidate = 3600

export const generateStaticParams = async () => {
    const Feature = await getFeature()

    return Feature.map((feature: Features) => ({
        params: {
            slug: feature.fields.slug
        }
    }))
}

export async function generateMetaData({params}: {params: {slug: string}}) {
    const FeatureSlug = await getFeatureSlug(params.slug)

    return {
        title: FeatureSlug.fields.title,
        images: `https:${FeatureSlug.fields.images.fields.file.url}`,
        category: FeatureSlug.fields.category
    }
}

export default async function MerchDetails({params}: {params: {slug: string}}) {
    const StoreSlug = await getFeatureSlug(params.slug)
    return (
        <Wrapper>
            <div className="flex">
                <Link href={'/merchAndActs'} className="mb-10">Go Back</Link>
            </div>
            <div>
                <h4>{StoreSlug.fields.title}</h4>
                <img src={`https:${StoreSlug.fields.images.fields.file.url}`} alt={StoreSlug.fields.title} />
                {documentToReactComponents(StoreSlug.fields.fullText)}
            </div>
        </Wrapper>
    )
}