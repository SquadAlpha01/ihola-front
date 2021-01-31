import React from 'react';
import classes from './InputField.module.css';


const InputField = (props) => (
   <div>
       <input className={classes.input} placeholder={props.placeholder} type={props.type}/>
   </div>
);

export default InputField;