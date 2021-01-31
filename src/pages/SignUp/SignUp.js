import React from 'react';
import InputField from '../../UI/InputField/InputField';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import classes from './SignUp.module.css';


const SignUp = () => (
    <div className={classes.p}>
        <Logo/>
        <p style={{fontSize:"16px", textAlign:"center"}}>Sign Up</p>
        <p style={{textAlign:"center"}}>Get your iHola account now!</p>
        <p>Email</p>
        <InputField type ='email' placeholder='Please Enter Your Email'/>
        <p>Username</p>
        <InputField type ='text' placeholder='Please Enter Your Username'/>
        <p>Password</p>
        <InputField type ='password' placeholder='Please Enter Your Password'/>
        <Button content='Sign Up'/>
        <div className={classes.Login}>
            <p>Already have an acount?</p>
            <a>Login</a>
        </div>
        
        
        
    </div>
);

export default SignUp;