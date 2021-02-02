import React from 'react';
import classes from './LogOutButton.module.css';


const LogOutButton = (props) => (
   <div>
       <button className={classes.Button} children="Log out"/>
   </div>
);

export default LogOutButton;