import { Button, Container } from "@mui/material";
import React from "react";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl">
      <Button variant="contained">Hola Home!</Button>
    </Container>
  );
};
