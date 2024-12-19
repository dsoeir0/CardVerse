import { getOnePieceSets } from "@/api/api";
import MainPage from "@/components/main-page";

export default async function Home() {
    const onePieceSets = await getOnePieceSets()
    return (
        <>
            <MainPage />
        </>
    );
}
