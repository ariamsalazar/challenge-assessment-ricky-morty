export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOriginalCharacter;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface IOriginalCharacter {
  name: string;
  url: string;
}
  