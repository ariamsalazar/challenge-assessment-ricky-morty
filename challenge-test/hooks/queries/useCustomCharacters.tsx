import { useQuery } from 'react-query';
import { CHARACTERS_LIST } from '../../constants/reactQueryKeys';
import { Characters } from '../../services/Characters';

export function useCharacters() {
  return useQuery([CHARACTERS_LIST], () => Characters.getAllCharacters());
}

export { CHARACTERS_LIST } from '../../constants/reactQueryKeys';
