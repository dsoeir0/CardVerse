import { getYuGiOhSets } from "@/api/api";
import YuGiOhSets from "@/components/yu-gi-oh-sets";

export default async function Page() {
    const yuGiOhSets = await getYuGiOhSets()
    return (
        <>
            <YuGiOhSets yuGiOhSets={yuGiOhSets} />
        </>
    );
}
