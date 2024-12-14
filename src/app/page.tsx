import { getOnePiece } from "@/api/api";
import OnePiece from "@/components/one-piece";

export default async function Home() {
    const onePieceCards = await getOnePiece()
    return (
        <>
            <OnePiece onePieceCards={onePieceCards} />
        </>
    );
}
