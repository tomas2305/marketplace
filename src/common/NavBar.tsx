import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Grow,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} mb={2}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grow in timeout={1500}>
                  <Typography sx={{cursor:"pointer"}} onClick={() => navigate("/")}>
                    MarketPlace
                  </Typography>
                </Grow>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Link to="/login">
                    <Button variant="contained"> Login</Button>
                  </Link>
                  <Button variant="outlined"> Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
