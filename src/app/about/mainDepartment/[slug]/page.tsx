import Wrapper from "<prefix>/components/wrapper"
import { getTeam, getTeamSlug } from "<prefix>/lib/contentful"
import Link from "next/link"
import { Teams } from "<prefix>/type/teams"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export const revalidate = 3600

export const getStaticParams = async () => {
    const data = await getTeam()
    data.map((Team1: Teams) => ({
        params: Team1.fields.slug
    }))
}
export async function generateMetaData({params}: {params: {slug: string}}) {
    const FeatureSlug = await getTeamSlug(params.slug)

    return {
        name: FeatureSlug.fields.name,
        profile: `https:${FeatureSlug.fields.profile.fields.file.url}`,
        specialization: FeatureSlug.fields.specialization
    }
}

export default async function MainDepartment({params} : {params: {slug: string}}) {
    const TeamsData = await getTeamSlug(params.slug)

    return (
        <Wrapper>
            <div>
                <Link href={'/about'}>Go Back</Link>
            </div>
            <div>
                <img src={`http:${TeamsData.fields.profile.fields.file.url}`} alt={TeamsData.fields.name} />
                <h4>{TeamsData.fields.name}</h4>
                <p>Position: {TeamsData.fields.position}</p>
                <p>{documentToReactComponents(TeamsData.fields.background)}</p>
                <p className="mt-2">Specialization: {TeamsData.fields.specialization}</p>
            </div>
        </Wrapper>
    )
} 