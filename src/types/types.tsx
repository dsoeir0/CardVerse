export interface OnePieceCard {
    id: string;
    code: string;
    rarity: string;
    type: string;
    name: string;
    images: {
        small: string;
        large: string;
    };
    cost: number;
    attribute: {
        name: string;
        image: string;
    };
    power: number;
    counter: string;
    color: string;
    family: string;
    ability: string;
    trigger: string;
    set: {
        name: string;
    };
    notes?: {
        name: string;
        url: string;
    }[];
}
