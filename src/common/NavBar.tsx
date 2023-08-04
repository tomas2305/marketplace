import { AppBar, Box, Toolbar, Container, Grid, Typography, Button, Stack } from "@mui/material";
import React from "react";

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1}} mb={2}>
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
                    <Typography>MarketPlace</Typography>
                </Grid>
                <Grid item>
                    <Stack direction="row" spacing={2}> 
                    <Button variant="contained"> Login</Button>
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
