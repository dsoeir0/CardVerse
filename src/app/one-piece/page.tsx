import { getOnePieceSets } from "@/api/api";
import OnePieceSets from "@/components/one-piece-sets";

export default async function Page() {
    const onePieceSets = await getOnePieceSets()
    return (
        <>
            <OnePieceSets onePieceSets={onePieceSets} />
        </>
    );
}
