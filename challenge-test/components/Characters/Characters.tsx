import React from "react";
import CharacterRow from "./CharacterRow";
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useCharacters, CHARACTERS_LIST } from '../../hooks/queries/useCustomCharacters';
import { ICharacter } from "../../interfaces/ICharacter";

const Characters: React.FC = () => {

    const { data: characters, isError, isLoading } = useCharacters();

		return (
			<> 
        {isLoading ? (
            <Skeleton height={300} width="100%" />
          ) : (
            <div className="container-grid">
              <span className="title-tab">All characters</span>
              <Grid
                container
                alignContent="center"
                sx={{ width: '100%'}}
                spacing={3}
              >
                {characters &&
                  characters.map((row: ICharacter) => (
                    <CharacterRow
                      key={`character_${row.id}`} row={{ ...row }}
                    />
                ))}
              </Grid>
            </div>
          )}
      </>
    )
	
}

export default Characters;
