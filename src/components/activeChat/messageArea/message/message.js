import React from 'react';
import classes from './message.module.css';

const message = (props) => (
    <div className={classes.message}>
        {props.content}
    </div>
);

export default message;