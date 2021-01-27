import React from 'react';
import classes from './newMessage.module.css';

const newMessageContainer = (props) => (
    <div className={classes.newMessageContainer}>
        <textarea className={classes.newMessageTextField} id="newMessageTextField" name="newMessageTextField" rows="1" placeholder="Enter Message ...">
        </textarea>
        <button 
            className={classes.sendMessageButton} 
            onClick={props.sendMessage}>
        </button>
    </div>
);

export default newMessageContainer;