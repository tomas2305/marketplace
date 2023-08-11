import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNotificationContext } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type LoginType = {
  username: string;
  password: string;
};

const LoginPage: React.FC<{}> = () => {
  const { getSuccess } = useNotificationContext();

  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values) => {
      getSuccess(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="username"
                type="email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                {" "}
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;