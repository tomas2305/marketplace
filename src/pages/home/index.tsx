import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {

  useEffect(()=>{
    characters.getById({id:1}).then(r => {
      console.log(r.data);
    }).catch(err => {console.log(err);});
  },[])

  return (
    <Container maxWidth="xl">
      <HeaderComponent element={<Button fullWidth variant="contained">unButton</Button>} title="Hola mundo!" description="Hola mundo bienvenido a marketplace "/>
    </Container>
  );
};
