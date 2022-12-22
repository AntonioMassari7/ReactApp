import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Academy
          </Typography>
          <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to ={"/prova"}> Prova </Link></Button>
          <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to ={"/mouse"}> Mouse </Link></Button>
          <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to ={"/fetch"}> Fetch </Link></Button>
          <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to ={"/login"}> LOGIN </Link></Button>
          <Stack direction="row" spacing={5}>
          <Avatar alt="Remy Sharp" src="https://ecuphar.it/assets/images/ecu_interne/news_procanicare_1000x600.jpg" />
      </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}