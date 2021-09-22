import React from 'react';
import { Button, TextField } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import './styles.css';
import Display from '../Display/Display';
import axios from 'axios';

const Login = () =>{

 

  const { 
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (formData)=>{
  
    console.log(formData);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };



  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          fullWidth sx={{ m: 1 }}
          placeholder = "name" 
          type="text"
          {...register("username")}
          />
        <TextField
          fullWidth sx={{ m: 1 }}
          placeholder = "password" 
          type="text" 
          {...register("password")}
          />
        <Button type="submit" variant="contained" color="primary">enviar</Button>
      </form>
      <Display/>
    </>
  )
}
export default  Login;
