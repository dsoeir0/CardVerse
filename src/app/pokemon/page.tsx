import { getPokemonSets } from "@/api/api";
import PokemonSets from "@/components/pokemon-sets";

export default async function Page() {
    const pokemonSets = await getPokemonSets()
    return (
        <>
            <PokemonSets pokemonSets={pokemonSets} />
        </>
    );
}
