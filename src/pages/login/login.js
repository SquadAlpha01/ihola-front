import React from 'react';
import InputField from '../../UI/InputField/InputField';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import classes from './Login.module.css';


const Login = () => (
    <div className={classes.p}>
        <Logo/>
        <p style={{fontSize:"16px", textAlign:"center"}}>Login</p>
        <p style={{textAlign:"center"}}>Login to continue to iHOLA!</p>
        <p>Email</p>
        <InputField type ='email' placeholder='Please Enter Your Email'/>
        <p>Password</p>
        <InputField type ='password' placeholder='Please Enter Your Password'/>
        <Button content='Login'/>
        <div className={classes.SignUp}>
            <p>Dont have an account?</p>
            <a>Sign up now !</a>
        </div>      
    </div>
);

export default Login;