import Wrapper from "<prefix>/components/wrapper";
import { getTeam, getTeamSlug } from "<prefix>/lib/contentful";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Teams } from "<prefix>/type/teams";

export const revalidate = 3600

export const generateStaticParams = async () => {
    const users = await getTeam()

    return users.map((team: Teams) => ({
        params: {
            slug: team.fields.slug
        } as any
    }))
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
    const team = await getTeamSlug(params.slug)

    return {
        title: team.fields.name,
        position: team.fields.position,
    } as any
}

export default async function MainDepartment({params} : {params: {slug: string}}) {
    const ListTeams = await getTeamSlug(params.slug)
    return (
        <Wrapper>
            <div>
                <Link href="/about">Go Back</Link>
            </div>
            <div>
                <img
                    src={`http:${ListTeams.fields.profile.fields.file.url}`}
                    alt={ListTeams.fields.name}
                />
                <h4>{ListTeams.fields.name}</h4>
                <p>Position: {ListTeams.fields.position}</p>
                <p>{documentToReactComponents(ListTeams.fields.background)}</p>
                <p className="mt-2">Specialization: {ListTeams.fields.specialization}</p>
            </div>
        </Wrapper>
    );
};


