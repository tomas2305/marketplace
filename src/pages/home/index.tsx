import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/Character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );

  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
        console.log(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        element={
          <Button fullWidth variant="contained">
            unButton
          </Button>
        }
        title="Hola mundo!"
        description="Hola mundo bienvenido a marketplace "
      />
      {allCharacters ? (
        <Grid container spacing={2}>
          {allCharacters.map((character) => (
            <Grid item xs={3} key={character.id}>
              <CardComponent
                species={character.status}
                status={character.status}
                name={character.name}
                image={character.image}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        ""
      )}
    </Container>
  );
};
