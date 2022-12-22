import React, { useState } from "react";
import {Box, Button,TextField, Grid,Typography, Paper, Alert,AlertTitle,} from "@mui/material";
import logoNTT from "../Assets/NTT_Data-Logo.png";
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const InitialState = {
    utenteRegistrato: {
      username: "ntt",
      password: "data",
    },

    username: "",
    password: "",
  };


  const navigate = useNavigate();
  const [login, setLogin] = useState(InitialState);
  const [succes, setSucces] = useState(false);
  const [mostra,setMostra ] = useState(false);

  function handleSubmit() {
    setMostra(true)
    setSucces(login.username === login.utenteRegistrato.username &&login.password === login.utenteRegistrato.password ? setTimeout(()=>{
        setMostra(false)
        navigate("/home")
        }, 2000): "");
    
  }


  return (
    <Grid container component="main" justifyContent="center"alignItems="center"className="form"my={8}>
        
        <Grid item xs={10} sm={8} md={3} component={Paper} elevation={10} square px={5}>

        <Box
          sx={{
            my: 5,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            mt={-2}
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 133, md: 100, lg: 167 },
              maxWidth: { xs: 253, md: 170, lg: 250 },
            }}
            alt="Logo"
            src={logoNTT}
          />

          <Typography variant="h3" mt={-4} mb={5}>
            Accedi
          </Typography>

          <TextField
            label="Username"
            placeholder="Enter username"
            margin="dense"
            fullWidth
            required
            onChange={(event) =>
              setLogin((prevState) => ({
                ...prevState,
                username: event.target.value,
              }))
            }
          />

          <TextField
            label="Password"
            placeholder="Enter password"
            margin="dense"
            type="password"
            fullWidth
            required
            onChange={(event) =>
              setLogin((prevState) => ({
                ...prevState,
                password: event.target.value,
              }))
            }
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ my: 5 }}
            fullWidth onClick={handleSubmit}
           
          >
            Accedi
          </Button>


          <Grid align="center">
            {



             mostra?

            succes ? (
              <>
                <h2>L'Username è: {login.username}</h2>

                <h2>La Password è: {login.password}</h2>

                <Alert severity="success">
                  <AlertTitle>Login effettuata</AlertTitle>
                  Utente presente nel <strong>Database</strong>
                </Alert>
              </>
            ) : (
              <>
                <Alert severity="error">
                  <AlertTitle>Utente non trovato</AlertTitle>
                  Si prega di compilare <strong>correttamente </strong> i campi
                </Alert>

                <h2>L'Username è: {login.username}</h2>

                <h2>La Password è: {login.password}</h2>
              </>
            )
          :<></>
            
            }
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
