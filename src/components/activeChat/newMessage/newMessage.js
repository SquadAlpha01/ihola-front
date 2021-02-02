import React, { useState } from 'react';
import classes from './newMessage.module.css';
import {ReactComponent as SendIcon} from '../../../assets/images/send_icon.svg'

const NewMessageContainer = (props) => {
    const [newContent, setNewContent] = useState("")

    return (
    <div className={classes.newMessageContainer}>
        <input className={classes.newMessageTextField} 
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
            rows="1" 
            placeholder="Enter Message ...">
        </input>
        <button 
            className={classes.sendMessageButton} 
            onClick={() => props.sendMessage(newContent) }
            >
            <SendIcon width="30px" height="30px"></SendIcon>
        </button>
    </div>)
};

export default NewMessageContainer;