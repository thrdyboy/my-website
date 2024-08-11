import Wrapper from "<prefix>/components/wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <div className="bg-indigo-700 text-white">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row p-4 md:p-8 lg:p-12 bg-indigo-800 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <img
              src="/Thrdy_Esports.jpg"
              alt="Thrdy Esports"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-4 mt-4 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold font-Montserrat mb-2">Thrdy Esports</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">A Legacy of Passion and Excellence</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Main Base: Jakarta, Indonesia</li>
              <li>Valorant Base: Seoul, South Korea</li>
              <li>Divisions: Valorant, Dota 2, and Apex Legends</li>
              <li>Color Crest: Violet Light Purple</li>
            </ul>
            <h3 className="text-lg font-extrabold mb-2">History</h3>
            <p className="text-justify leading-relaxed">
              Founded by Thrdy, who invested his earnings from CSGO Major Tournaments. Thrdy Esports is a premier gaming organization with a focus on excellence across multiple titles. With its main base in Jakarta and a dedicated Valorant hub in Seoul, the organization is strategically positioned for success. Guided by its distinctive Violet Light Purple crest, Thrdy Esports continues to thrive, driven by the passion and competitive spirit of its founder, Thrdy.
            </p>
          </div>
        </div>

        {/* Merchandise Section */}
        <div className="mt-10 p-4 md:p-8 lg:p-12 bg-indigo-900 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get to know Our Merchandise</h2>
          <p className="mb-4">
            Here&apos;s our Merchandise. If you want to know more about it, click the &quot &quot;View More&quot; button below.
          </p>
          <div className="text-center">
            <Link
              href={'/merchAndActs'}
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              View More
            </Link>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="mt-10 p-4 md:p-8 lg:p-12 bg-indigo-900 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Milestones</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Achievements:</h3>
          <ol className="list-decimal list-inside mb-6">
            <li>PUBG Global Championship Season: 2020</li>
            <li>PUBG Asia Pacific Champion 2021</li>
            <li>PUBG Global Series 2022 Phase 1</li>
            <li>Valorant Champions 2027</li>
            <li>Apex Legends 2nd Global Championship 2024 <span className="text-sm text-gray-300">*Notes: after that, Apex Legends was disbanded</span></li>
          </ol>
          <p className="mb-4">
            PUBG Gun Skin, that everyone remembers who Thrdy Esports is capable of.
          </p>
          <div className="flex justify-center">
            <Image
              src={'/Thrdy_Pubg_Guns.jpg'}
              alt="Thrdy Pubg Gun"
              width={120}
              height={90}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-10 text-center">
          <Link
            href={'/about'}
            className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Get To Know About Us
          </Link>
        </div>
      </div>

    </Wrapper>
  );
}
