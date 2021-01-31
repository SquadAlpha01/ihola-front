import React from 'react';
import ihola2 from '../../assets/ChatAppLogos/ihola2.png';
import classes from './Logo.module.css'

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={ihola2} alt="logo"></img>
    </div>
)

export default Logo;