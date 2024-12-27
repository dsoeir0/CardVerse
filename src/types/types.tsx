export interface OnePieceSet {
    set_name: string;
    set_id: string;
}

export interface PokemonTCGSet {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
        unlimited: string;
        standard: string;
        expanded: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
        symbol: string;
        logo: string;
    };
};
export interface YuGiOhSet {
    set_name: string;
    set_code: string;
    num_of_cards: number;
    tcg_date: string;
    set_image?: string;
};
