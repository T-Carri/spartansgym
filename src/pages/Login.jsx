import React, {useState, useRef} from 'react'
//import { Form, Button, Card, Alert } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


import './Login.css'
export const Login = () => {

    const emailRef = useRef(null)
    const passwordRef= useRef(null)

    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();








    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validación del formato del correo electrónico
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(emailRef.current.value)) {
            setEmailError('El correo electrónico es inválido.');
            return;
        }
        setEmailError('');
        try {
            await signIn(emailRef.current.value, passwordRef.current.value).then((response)=>{
                navigate('/account')
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            });
        } catch (e)  {
          if(e.code === 'auth/invalid-email'){
            setError('El correo electrónico es inválido')
          }else if(e.code === 'auth/user-not-found'){
            setError('El usuario no existe')
          }else if(e.code === 'auth/wrong-password'){
            setError('La contraseña es incorrecta')
          }else{
            setError(e.message)
          }
        }
    };
    
    const test= (e)=>{
        e.preventDefault()
        console.log(emailRef.current.value, passwordRef.current.value)
    }




  return (
    <div class="full-screen-container">
    <div class="login-container">
      <h1 class="login-title">Gimnasio Espartans</h1>
      <form class="form" onSubmit={handleSubmit}>
        <div class="input-group success" >
          <label for="email">Email</label>
          <input type="email" name="email" id="email" ref={emailRef}/>
          <span class="msg">Valid email</span>
        </div>

        <div class="input-group error" >
          <label for="password">Password</label>
          <input type="password" name="password" id="password" ref={passwordRef}/>
          <span class="msg">Incorrect password</span>
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
  )
}
