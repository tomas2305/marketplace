import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { TypeCharacter } from "../home/interface/Character.interface";
import { Backdrop, Box, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";

const CharacterPage: React.FC = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<TypeCharacter | null>(null);

  useEffect(() => {
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        {loading ? (
          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant="h1">{character!.name}</Typography>
                <Divider sx={{my:2}}/>
                <Typography variant="h5">Species: {character!.species}</Typography>
                <Typography variant="h5">Status: {character!.status}</Typography>
                <Typography variant="h5">Gender: {character!.gender}</Typography>
            </Grid>
            <Grid item xs={6}>
              <img src={character!.image} alt="" style={{width:"80%", borderRadius:"0.5em"}}/>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CharacterPage;