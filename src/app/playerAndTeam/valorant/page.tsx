import { ValorantThings } from "<prefix>/components/listOfValorant";
import Wrapper from "<prefix>/components/wrapper";
import { getValorant } from "<prefix>/lib/contentful";
import { PlayersofValorant } from "<prefix>/type/playersValorant";
import Link from "next/link";

export default async function Valorant() {
    const getData = await getValorant()
    return (
        <Wrapper>
            <div className="container mx-auto p-6">
                <Link href={'/playerAndTeam'} className="text-blue-500 hover:underline mb-6 inline-block">Go Back</Link>
                <h1 className="text-4xl font-bold mb-6">Valorant Champions Tour: Pacific League</h1>

                <section className="mb-12">
                    <h5 className="text-3xl font-semibold mb-6">Meet The Players</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getData.map((items: PlayersofValorant) => (
                            <ValorantThings
                                key={items.sys.id}
                                images={items.fields.images.fields.file.url}
                                name={items.fields.name}
                                slug={items.fields.slug}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <p className="text-lg text-gray-700 mb-6">Here&apos;s the Incredible Journey</p>
                    <h2 className="text-3xl font-bold mb-6">Thrdy Esports Valorant Division: The Journey to Champions Glory</h2>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg mb-4">
                            In a short span, Thrdy Esports has evolved from a promising team into one of the most
                            formidable forces in the Valorant competitive scene. Their journey, filled with highs and
                            lows, is a testament to the team&apos;s resilience, strategic depth, and the undeniable talent of its roster.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">The Formation of a Powerhouse</h3>
                        <p className="text-lg mb-4">
                            Thrdy Esports Valorant division became a true powerhouse with the addition of two star
                            players: Jaccob &quot;yay&quot; Whittaker and Fahmi &quot;GingerHead&quot; Rafif. With these additions, the
                            team entered the VCT Pacific League Phase 1 with high expectations. However, despite their
                            efforts, they faced a tough challenge against Paper Rex, narrowly losing with a 2-1 score.
                            This loss meant that Thrdy Esports did not qualify for Valorant Masters New York Phase 1,
                            a setback that tested the team&apos;s resolve.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">A Shift in the Meta, A Rise in Performance</h3>
                        <p className="text-lg mb-4">
                            The team&apos;s fortunes began to change with a shift in the game&apos;s meta, which seemed to
                            activate Yay&apos;s full potential. Thrdy Esports demonstrated a solid performance in VCT Pacific
                            League Phase 2, securing a 3rd place finish. This strong showing earned them a spot in
                            Valorant Masters London Phase 2, where they would make their much-anticipated international debut.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">Thrdy Esports International Debut</h3>
                        <p className="text-lg mb-4">
                            As the team stepped onto the international stage, many expected the pressures of such a
                            high-level competition to affect their performance. However, Thrdy Esports proved the
                            doubters wrong, starting with an impressive 2-0 victory over 100 Thieves. The 100 Thieves
                            roster, featuring well-known names like Boostio, Demon1, and Victor, was no match for the
                            brilliance of GingerHead, who outperformed former Evil Geniuses.
                        </p>
                        <p className="text-lg mb-4">
                            Nicole &quot;Nicole&quot; Tuapattinaya, the team&apos;s in-game leader, made a significant impact during the
                            match, particularly on Icebox, which seemed to be her favorite map. Her exceptional calls
                            and calm decision-making led to her being named the MVP of the match.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">Subsequent Matches and Triumphs</h3>
                        <p className="text-lg mb-4">
                            Next, Thrdy Esports faced BiliBili Gaming, a team that had previously caused trouble for many
                            top-tier teams, including NRG. In a hard-fought series, Thrdy Esports emerged victorious
                            with a 2-1 score, securing a spot in the playoffs. They then went on to defeat Sentinels,
                            featuring TenZ and Zekken, with another commanding performance.
                        </p>
                        <p className="text-lg mb-4">
                            In the Pacific Derby against T1, featuring players like Xccurate and Sayaplayer, Thrdy
                            Esports continued their winning streak with a 2-1 victory. However, in the upper bracket
                            final, they were bested by China&apos;s powerhouse, Edward Gaming, and then narrowly lost in
                            the lower bracket to Team Heretics, the EMEA&apos;s finest, led by benjyfishy.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">Thrdy Esports Triumph at Valorant Champions</h3>
                        <p className="text-lg mb-4">
                            Despite their earlier setbacks, Thrdy Esports true moment of glory came at the Valorant
                            Champions event. In the grand finals, they faced off against Leviatán, an Americas
                            powerhouse featuring stars like Aspas and Mazino. The match was a nail-biting series that
                            went to five games, with Thrdy Esports emerging as the champions with a 3-2 victory.
                        </p>
                        <p className="text-lg mb-4">
                            Nicole, once again, played a crucial role, showcasing her incredible game sense and
                            leadership. Her performance throughout the tournament, especially in key matches against
                            Sentinels, 100 Thieves, and Fnatic, solidified her reputation as one of the smartest and
                            most talented IGLs in the world.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">A Historic Victory</h3>
                        <p className="text-lg mb-4">
                            This victory was historic for Thrdy Esports, as they became the first team to win the
                            Valorant Champions after promoting from the Challengers and Ascension tournaments. The
                            final standings of the event were a testament to their hard work and dedication:
                        </p>
                        <ul className="list-disc list-inside text-lg mb-4">
                            <li>1st - Thrdy Esports</li>
                            <li>2nd - Leviatán</li>
                            <li>3rd - Edward Gaming</li>
                            <li>4th - Fnatic</li>
                        </ul>
                        <p className="text-lg">
                            This championship victory marks the pinnacle of Thrdy Esports journey, establishing them
                            as a top-tier team on the global stage. With Nicole leading the charge, alongside the
                            high-caliber performances of Yay, GingerHead, and the rest of the team, Thrdy Esports has
                            set a new standard for excellence in Valorant.
                        </p>
                    </div>
                </section>

                <div className="bg-gray-100 p-6 rounded-lg">
                    <main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                        <h1 className="text-3xl font-bold mb-6">Valorant Champions 2027 Tournament Statistics</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            The latest Valorant Champions tournament has concluded, and the competition was nothing short of spectacular. Here are the standout performances and achievements that defined the tournament:
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">MVP of the Tournament: Nicole of Thrdy Esports</h2>
                            <p className="text-gray-600">
                                Nicole Tuapattinaya of Thrdy Esports captured the title of MVP with her exceptional leadership and gameplay. Her strategic decisions and calm execution under pressure were instrumental in Thrdy Esports victorious campaign. Nicole&apos;s ability to read the game and make crucial plays solidified her position as one of the top players in the tournament.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Most High-Percentage Headshots: yay of Thrdy Esports (25%)</h2>
                            <p className="text-gray-600">
                                Jaccob “yay” Whittaker delivered a remarkable performance with the highest percentage of headshots, clocking in at an impressive 25%. His precision and sharp shooting were key factors in Thrdy Esports strong showing, making him a formidable force on the battlefield.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Most Clutch Player: Nicole of Thrdy Esports (3.4 Clutch Points per Match)</h2>
                            <p className="text-gray-600">
                                Nicole also stood out as the most clutch player of the tournament, with an average of 3.4 clutch points per match. Her ability to come through in critical moments played a significant role in Thrdy Esports successful run, showcasing her exceptional skill and composure.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Most Impactful Play: Nicole&apos;s Retake on Icebox</h2>
                            <p className="text-gray-600">
                                One of the most memorable moments of the tournament was Nicole&apos;s incredible retake on Icebox. With a perfect read of the opponent&apos;s positioning and precise use of her abilities, Nicole turned the tide in a crucial round, earning her a spot in the tournament&apos;s highlight reel.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Final Standings</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>1st - Thrdy Esports</li>
                                <li>2nd - Leviatán</li>
                                <li>3rd - Edward Gaming</li>
                                <li>4th - Fnatic</li>
                            </ul>
                        </section>
                    </main>
                </div>
            </div>

        </Wrapper>
    )
}