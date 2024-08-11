import { TeamRead } from "<prefix>/components/listOfTeams";
import Wrapper from "<prefix>/components/wrapper";
import { getTeam } from "<prefix>/lib/contentful";
import { Teams } from "<prefix>/type/teams";

export default async function About() {
    const getData = await getTeam()
    return (
        <Wrapper>
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl leading-9 font-extrabold text-neutral-100 sm:text-4xl sm:leading-10">
                        Thrdy Esports: A Legacy of Passion and Excellence
                    </h2>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl leading-8 font-semibold text-neutral-100">
                        Overview
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-50">
                        Thrdy Esports, a name synonymous with competitive gaming excellence, has its main base in Jakarta, Indonesia, and a dedicated Valorant base in Seoul, South Korea. With divisions in Valorant, Dota 2, and PUBG, the organization has carved out a significant presence in the esports landscape. Guided by a distinct Violet Light Purple crest, Thrdy Esports embodies a legacy of passion, driven by its founder&apos;s deep-rooted love for gaming.
                    </p>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl leading-8 font-semibold text-neutral-100">
                        Main Base and Valorant Hub
                    </h3>
                    <ul className="list-disc list-inside mt-4 space-y-4 text-base leading-7 text-neutral-100">
                        <li className="text-neutral-50">
                            <strong className="text-stone-100">Jakarta, Indonesia</strong>: Serving as the heart of Thrdy Esports, the Jakarta base is where the organization&apos;s operations and strategic planning are centered. This location is crucial for managing the diverse and dynamic teams competing across various titles.
                        </li>
                        <li className="text-neutral-50">
                            <strong className="text-stone-100">Seoul, South Korea</strong>: The Valorant division finds its home in Seoul, chosen for its significance as a major hub for Regional League LAN events. South Korea&apos;s thriving esports scene makes it the perfect location for a dedicated Valorant base, allowing the team to train and compete in a highly competitive environment. It&apos;s also our Bootcamp for Valorant Champions Tour Pacific League
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl leading-8 font-semibold text-neutral-50">
                        Divisions
                    </h3>
                    <ul className="list-disc list-inside mt-4 space-y-4 text-base leading-7 text-neutral-50">
                        <li>
                            <strong className="text-neutral-50">Valorant</strong>: With a dedicated base in Seoul, the Valorant team is well-positioned to compete at the highest levels, taking advantage of the VCT Pacific LAN infrastructure and intense competitive atmosphere. For your Information, we also get the Ascension from Indonesia Challengers League into winning against DPlus from Korea 3-2
                        </li>
                        <li>
                            <strong className="text-neutral-50">Dota 2</strong>: Thrdy&apos;s Dota 2 team is a force to be reckoned with, blending strategy, teamwork, and skill to dominate the global stage. Based out of Jakarta, this team reflects the organization&apos;s roots and commitment to excellence.
                        </li>
                        <li>
                            <strong className="text-neutral-50">PUBG</strong>: The PUBG division showcases the versatility and adaptability of Thrdy Esports, competing in a fast-paced and ever-evolving battle royale scene. The team thrives on the excitement and unpredictability that PUBG offers.
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl leading-8 font-semibold text-neutral-50">
                        Color Crest: Violet Light Purple
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-50">
                        The color Violet Light Purple is more than just a crest for Thrdy Esports; it represents the organization’s identity and ethos. This color symbolizes creativity, ambition, and a forward-thinking approach, traits that are deeply embedded in the organization’s culture. The violet hue is a nod to the unique and vibrant energy that Thrdy Esports brings to the esports arena.
                    </p>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl leading-8 font-semibold text-neutral-50">
                        A History Forged in Competition
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-50">
                        Thrdy Esports was founded by a gamer known as <strong>Thrdy</strong>, who made a name for himself in the world of Counter-Strike: Global Offensive (CSGO). Leveraging his earnings from major CSGO tournaments, Thrdy invested in creating an esports organization that would not only compete at the highest levels but also nurture and develop new talent. His journey from a player to an entrepreneur is a testament to the power of passion, perseverance, and strategic vision.
                    </p>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl leading-8 font-semibold text-neutral-50">
                        Conclusion
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-50">
                        Thrdy Esports stands as a beacon of innovation and excellence in the global esports community. With its main base in Jakarta and a dedicated Valorant hub in Seoul, the organization is strategically positioned to make a lasting impact across multiple gaming titles. Guided by its Violet Light Purple crest and a history rooted in competitive success, Thrdy Esports continues to push the boundaries of what’s possible in the world of esports.
                    </p>
                </div>

                <div className="grid-container">
                    <p className="text-wrap mb-7 mt-10 text-neutral-50">Here&apos;s our Main Department members in our Organization</p>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            getData.map((items: Teams) => {
                                return (
                                    <TeamRead
                                        key={items.sys.id}
                                        profile={items.fields.profile.fields.file.url}
                                        name={items.fields.name}
                                        slug={items.fields.slug}
                                        hometown={items.fields.hometown}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}