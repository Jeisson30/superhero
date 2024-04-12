export class Superhero {
    id: number | undefined;
    name: string | undefined;
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
    } | undefined;
    appearance: {
        gender: string;
        race: string;
        height: string[];
        weight: string[];
        eyeColor: string;
        hairColor: string;
    } | undefined;
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    } | undefined;
    work: {
        occupation: string;
        base: string;
    } | undefined;
    connections: {
        groupAffiliation: string;
        relatives: string;
    } | undefined;
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    } | undefined;
  }
  