import { Button, Container } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {


  return (
    <Container maxWidth="xl">
      <HeaderComponent element={<Button fullWidth variant="contained">unButton</Button>} title="Hola mundo!" description="Hola mundo bienvenido a marketplace "/>
    </Container>
  );
};
