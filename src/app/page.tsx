import { getOnePieceSets } from "@/api/api";
import OnePiece from "@/components/one-piece";

export default async function Home() {
    const onePieceSets = await getOnePieceSets()
    return (
        <>
            <OnePiece onePieceSets={onePieceSets} />
        </>
    );
}
