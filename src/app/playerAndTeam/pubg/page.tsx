import Wrapper from "<prefix>/components/wrapper";
import Link from "next/link";

export default function Pubg() {
    return (
        <Wrapper>
            <div>
                <Link href={'/playerAndTeam'}>Go Back</Link>
                <p>Pubg Division's Player</p>
            </div>
        </Wrapper>
    )
}