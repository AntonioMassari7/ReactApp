import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



export default function Homepage() {
  
  return (
   
   <>
   
   <h1 style={{ textAlign: "center" }}>Welcome to Home</h1>
   <Box style={{justifyContent: "center"}} sx={{ display: 'flex' }}>
          <CircularProgress />
      </Box>



      </>
  );
  
 

  

}
