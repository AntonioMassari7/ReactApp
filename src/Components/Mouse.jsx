// event.clientX, clientY -> movimento mouse cordinate 
import { Grid } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react'

export default function Mouse() {

const initialState= {
    x: 0,
    y: 0
}

const [position, setPosition] = useState(initialState);


useEffect(() =>{

const changePosition = (event) => setPosition({x: event.clientX, y: event.clientY})

window.addEventListener("mousemove", changePosition)

return() =>{
    window.removeEventListener("mousemove", changePosition)
}

},[]);


  return (
    <Grid align="center" marginTop={30}>
      <Card sx={{ width: 375, background: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Mouse Tracking
          </Typography>

          <Typography variant="h5" component="div">
            <div>
              le coordinate sono:
              <br />
              X: {position.x}
              <br />
              Y: {position.y}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
