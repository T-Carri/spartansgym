import React, {useEffect} from 'react'
import { 
    useNavigate, 
    Outlet
  } from 'react-router-dom';
  import { UserAuth } from '../../context/AuthContext';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  Container  from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import magie2 from './magie2.jpg' 
import magie1 from './magie1.jpg' 
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];







const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });
  
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
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Para magie
              </Typography>
              <Button color="inherit" onClick={handleLogout}>Salir</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>

<Container fixed>
<h2>test</h2>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={magie1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Esa sonrisa
        </Typography>
        <Typography variant="body2" color="text.secondary">
     <strong> Para la sonricita que tanto amo ver y oir que nunca me falte, porque es la mejor musica que he escuchado. Te amo.</strong>     
        </Typography>
      </CardContent>
      <CardActions>
      {/*   <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>, 
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={magie2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Los ojitos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Una de las cosas que mas amo en esta vida: <strong>Esos ojitos porque le dan color a mi vida.</strong>   
        </Typography>
      </CardContent>
      <CardActions>
      {/*   <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
</Container>
</>


    )
  }
  
  export default Perfil
  