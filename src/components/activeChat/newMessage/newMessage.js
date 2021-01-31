import React from 'react';
import classes from './newMessage.module.css';
import {ReactComponent as SendIcon} from '../../../assets/images/send_icon.svg'

const MessageSeenIcon = <span className={classes.receivingStatus}> 
                            <SendIcon ></SendIcon>
                        </span>
const newMessageContainer = (props) => (
    <div className={classes.newMessageContainer}>
        <textarea className={classes.newMessageTextField} id="newMessageTextField" name="newMessageTextField" rows="1" placeholder="Enter Message ...">
        </textarea>
        <button 
            className={classes.sendMessageButton} 
            onClick={props.sendMessage}>
            <SendIcon width="30px" height="30px"></SendIcon>
        </button>
    </div>
);

export default newMessageContainer;