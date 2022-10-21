import { ICharacter } from '../interfaces/ICharacter';
import Api from './Api';
import { API_ROUTE } from '../constants/constants';

const CHARACTERS = '/character';

export const Characters = {
  async getAllCharacters(): Promise<any[]> {
    const { results } = await Api.get(`${API_ROUTE}/${CHARACTERS}`);
    return results;
  },
};
