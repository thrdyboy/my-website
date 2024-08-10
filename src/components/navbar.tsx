import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-indigo-100 text-violet-500 fixed w-full top-0 z-10 shadow-lg">
            <div className="max-w-full sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <ul className="flex space-x-4">
                    <li><Link href={"/"} className="hover:underline">Home</Link></li>
                    <li><Link href={"/about"} className="hover:underline">About</Link></li>
                    <li><Link href={"/merchAndActs"} className="hover:underline">Merch and Activities</Link></li>
                    <li><Link href={"/playerAndTeam"} className="hover:underline">Teams</Link></li>
                </ul>
            </div>
        </div>

    )
}