import React from 'react';
import classes from './message.module.css';
import {ReactComponent as MessageSeen} from '../../../../assets/message_status_vectors/msgseen_icon.svg'
import {ReactComponent as MessageSent} from '../../../../assets/message_status_vectors/msgsent_icon.svg'

const message = (props) => (
    <div className={classes.messageBackground}>
        <p className={classes.messageContent}>
            {props.content}
        </p>
        <div className={classes.messageStatus}>
            <span className={classes.date}>
                10:30 pm
            </span>
            <span className={classes.receivingStatus}>
                <MessageSent height='20px' width='20px'></MessageSent>
            </span>
        </div>

    </div>
);

export default message;