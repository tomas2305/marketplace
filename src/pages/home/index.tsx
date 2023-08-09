import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/Character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [countPages, setCountPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setCountPages(r.data.info.pages);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

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
      {loading ? (
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      ) : (
        <div>
          {allCharacters ? (
            <Grid sx={{ my: 2 }} container spacing={2}>
              {allCharacters.map((character) => (
                <Grid item xs={3} key={character.id}>
                  <CardComponent
                    id={character.id}
                    species={character.status}
                    status={character.status}
                    image={character.image}
                    name={character.name}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            ""
          )}
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Pagination
              size="large"
              sx={{ mb: 3 }}
              color="primary"
              variant="outlined"
              count={countPages}
              page={page}
              onChange={handlePageChange}
            />
          </Grid>
        </div>
      )}
    </Container>
  );
};
