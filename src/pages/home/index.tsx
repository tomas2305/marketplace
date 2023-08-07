import { Button, Container } from "@mui/material";
import React from "react";
import { useNotificationContext } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {

  const {getError} = useNotificationContext();

  const handleClick = () => {
    getError("Algo salio mal! :(");
  }

  return (
    <Container maxWidth="xl">
      <Button onClick={handleClick} variant="contained">Hola Home!</Button>
    </Container>
  );
};
