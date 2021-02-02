import React, { Component } from 'react';
import InputField from '../../UI/InputField/InputField';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import classes from './login.module.css';
import { SnackbarProvider, useSnackbar } from "notistack";

const Login = (props) =>  {

    function LoginValidation() {
        const { enqueueSnackbar } = useSnackbar();
      
        const handleClickVariant = (variant) => () => {
          enqueueSnackbar("Sorry, wrong email/password", { variant });
        };

        return (
            <Button content='Login' clicked={handleClickVariant("error")}/>
          );
      }

    return(
    <div className={classes.p}>
        <Logo/>
        <p style={{fontSize:"16px", textAlign:"center"}}>Login</p>
        <p style={{textAlign:"center"}}>Login to continue to iHOLA!</p>
        <p>Email</p>
        <InputField type ='email' placeholder='Please Enter Your Email'/>
        <p>Password</p>
        <InputField type ='password' placeholder='Please Enter Your Password'/>

        <SnackbarProvider maxSnack={1}>
             <LoginValidation />
        </SnackbarProvider>

        <div className={classes.SignUp}>
            <p>Dont have an account?</p>
            <a>Sign up now !</a>
        </div>      
    </div>
    );
    }


export default Login;