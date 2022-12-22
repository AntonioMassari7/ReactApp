//grid=div  //typography=paragrafo
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonCustom from './ButtonCustom';



export default function Prova() {
    const [provaState, setProvaState] = useState({ text: "Benvenuto" });

      const navigate = useNavigate();

    function handleChange(evento) {
        setProvaState({ text: evento.target.value })
    }

    function navigazione(){
        navigate("/mouse")

    }



    return (
        <Grid align="center" marginTop={30}>
            <TextField label="Scrivi qui per cambiare lo stato" onChange={handleChange}/>    
            { /* OR  onChange={(evento) => handleChange(evento)} */}

            <Typography>{provaState.text}</Typography>

            <Button variant='contained' onClick={navigazione}>Mouse</Button>
           <ButtonCustom text="vai su fetch" endpoint={"/fetch"}></ButtonCustom>
        </Grid>
    );
}


