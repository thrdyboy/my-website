"use client";

import Wrapper from "<prefix>/components/wrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define CSS for the fade-in animation
const fadeInStyle = `
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
`;

export default function PlayerAndTeam() {
    const fonts = ["'Poppins', sans-serif", "'Roboto', sans-serif", "'Lora', serif", "'Montserrat', sans-serif"];
    const [currentFont, setCurrentFont] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFont((prevFont) => (prevFont + 1) % fonts.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style jsx>{fadeInStyle}</style>
            <Wrapper>
                <div
                    className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white animate-fade-in"
                    style={{ fontFamily: fonts[currentFont] }}
                >
                    <h1 className="text-4xl font-bold text-center mb-6">
                        Thrdy Esports: A Multi-Divisional Powerhouse
                    </h1>

                    <section className="mb-8 p-4 bg-purple-800 rounded-lg shadow-md">
                        <p className="text-lg">
                            Thrdy Esports has rapidly become a formidable force in the global esports scene, known for its strategic approach to gaming and its commitment to fostering talent. With its roots in Jakarta, Indonesia, and a specialized Valorant base in Seoul, South Korea, Thrdy Esports is home to top-tier teams across multiple gaming divisions, including Valorant, Dota 2, and Apex Legends.
                        </p>
                    </section>

                    <section className="mb-8 p-4 bg-purple-700 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Valorant Division</h2>
                        <p className="text-lg">
                            The Valorant division of Thrdy Esports is based in Seoul, South Korea, strategically located to take advantage of the region’s highly competitive esports environment. Seoul was chosen as the base due to its status as a hub for the Valorant Regional League, offering the team access to top-tier LAN events and training facilities.
                        </p>
                        <p className="text-lg mt-4">
                            The Valorant team, managed by Ayu &quot;Vexa&quot; Rahmadani, is known for its tactical prowess and innovative gameplay. With the guidance of head coach Leona &quot;Leona&quot; Tuapattinaya, the team has consistently performed at a high level, making waves in both regional and international tournaments. The division&apos;s success is bolstered by a strong support system, including analyst Eko &quot;Denyut&quot; Siregar, who provides in-depth game analysis to keep the team ahead of its competition.
                        </p>
                        <Link href={'/playerAndTeam/valorant'} className="text-violet-300 hover:text-violet-200">More about the Teams</Link>
                    </section>

                    <section className="mb-8 p-4 bg-purple-600 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Dota 2 Division</h2>
                        <p className="text-lg">
                            The Dota 2 division, headquartered in Jakarta, Indonesia, is one of Thrdy Esports flagship teams. Led by manager Dimas &quot;Blitz&quot; Wijaya and head coach Fajar &quot;Spectra&quot; Rahman, the Dota 2 team has earned a reputation for its strategic depth and strong team cohesion. Jakarta, being the main base of operations, provides the team with access to a growing esports community and a supportive environment for player development.
                        </p>
                        <p className="text-lg mt-4">
                            Thrdy Esports Dota 2 team is a consistent contender in regional and international competitions, known for its innovative drafting strategies and adaptability. The division is focused on continuous improvement and has its eyes set on dominating the global Dota 2 scene.
                        </p>
                    </section>

                    <section className="mb-8 p-4 bg-purple-500 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">PUBG Division</h2>
                        <p className="text-lg">
                            The PUBG division at Thrdy Esports is another testament to the organization&apos;s diverse gaming portfolio. Managed by Putri &quot;Nova&quot; Kurniawan, the team is based in Jakarta and is composed of some of the most talented and agile players in the region. PUBG, a intense-util battle royale game, requires quick thinking and flawless team coordination—skills that Nova and head coach Laila &quot;Nyala&quot; Hasan have honed within their squad.
                        </p>
                        <p className="text-lg mt-4">
                            The PUBG team has made a name for itself with its aggressive playstyle and clutch performances in high-pressure situations. The division’s focus on continuous practice, mental resilience, and in-game strategy has positioned Thrdy Esports as a rising star in the PUBG competitive scene.
                        </p>
                    </section>

                    <section className="mb-8 p-4 bg-purple-400 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Color Crest: Violet Light Purple</h2>
                        <p className="text-lg">
                            The color crest of Thrdy Esports, Violet Light Purple, symbolizes the organization’s unity, creativity, and ambition. It represents the balance between strategy and innovation, qualities that are deeply ingrained in every aspect of Thrdy Esports. The color is a beacon for the organization’s identity, reflecting its vibrant community and forward-thinking approach to esports.
                        </p>
                    </section>
                </div>
            </Wrapper>
        </>
    )
}
