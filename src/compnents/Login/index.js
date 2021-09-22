import React from 'react';
import { useState } from 'react';
//import Box from '@mui/material/Box';
//import Card from '@mui/material/Card';
import { Button, TextField } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import './styles.css';
import Display from '../Display/Display';
import axios from 'axios';

const Login = () =>{
const [isLogged, setIsLogged] = useState()
  const logar =()=>{
    setIsLogged(
    !isLogged
    )
  }

  const { 
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (formData)=>{
  
    console.log(formData);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then((response) => {
        logar()
      //  setIsLogged(![isLogged])
 console.log(isLogged);
      })

      .catch((err) => console.log(err));
  };



  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          fullWidth sx={{ m: 3 }}
          placeholder = "name" 
          type="text"
          {...register("username")}
          />
        <TextField
          fullWidth sx={{ m: 3 }}
          placeholder = "password" 
          type="text" 
          {...register("password")}
          />
        <Button type="submit" variant="contained" color="primary">enviar</Button>
      </form>
      <Display 
        isLogged = {isLogged}
      />
    </>
  )
}
export default  Login;
