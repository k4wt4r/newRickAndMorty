export interface ICharacterOrigin{
    name: string;
    url: string;
}
export interface ICharacterLocation{
    name: string;
    url: string;
    episode: Array<string>;
}
export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: ICharacterOrigin;
    location: ICharacterLocation;
    image: string;
}

export interface ILocation{
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array<string>;
    url: string;
    created: string;
}

export interface IEpisode{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Array<string>;
    url: string;
    created: string;
}