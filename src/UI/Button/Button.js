import React from 'react';
import classes from './Button.module.css';


const Button = (props) => (
   <div>
       <button className={classes.Button} children={props.content}/>
   </div>
);

export default Button;