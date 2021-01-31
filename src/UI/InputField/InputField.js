import React from 'react';
import classes from './InputField.module.css';


const InputField = (props) => (
   <div>
       <input className={classes.input} placeholder={props.placeholder}/>
   </div>
);

export default InputField;