import React, {useEffect} from 'react'
import { 
    useNavigate, 
    Outlet
  } from 'react-router-dom';
  import { UserAuth } from '../../context/AuthContext';


import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MenuIcon from '@mui/icons-material/Menu';
import  Container  from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import clientes from './clientes.jpg'
import inventario from './inventario.jpg'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];








const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode ===  '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const Perfil = () => {


    const {logout}= UserAuth();
    const navigate = useNavigate();
    
  
  
    useEffect(()=>{
      let authToken = sessionStorage.getItem('Auth Token')
      if(authToken){
          navigate('/account')
      }
      if(!authToken){
          navigate('/')
      }
  },
  
  
  [])
  //LOGOUT
  const handleLogout = async()=>{
        try{
          await logout().then(
            navigate('/'), 
            sessionStorage.removeItem('Auth Token')
           
          )
          console.log('You are logged out')
        } catch(e) {
          console.log(e.message);
        
        }
      };



  


    return (
        <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <FitnessCenterIcon/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Spartans gym
              </Typography>
              <Button color="inherit" onClick={handleLogout}>Salir</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>

<Grid container spacing={1}>
  <Grid item xs={8} >
<Container fixed   >
<Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        sx={{ height:700 }}
        image={inventario}
        title="inventario"
        onClick={()=>console.log("click image")}
      />
        <Typography variant="h2" gutterBottom sx={{ position: 'absolute', top: '60%', left: '12%', transform: 'translate(-50%, -50%)', color: 'white'  }}>
    
  </Typography>
    </Card>

</Container>
  </Grid>
  <Grid item xs={4}>
  <Container fixed /* className={classes.root} */>
 
  <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height:200 }}
        image={clientes}
        title="inventario"
        onClick={()=>console.log("click image")}
      />
        <Typography variant="h2" gutterBottom sx={{ position: 'absolute', top: '60%', left: '12%', transform: 'translate(-50%, -50%)', color: 'white'  }}>
    Clientes
  </Typography>
    </Card>
</Container>
  </Grid>

</Grid>
</>


    )
  }
  
  export default Perfil
  