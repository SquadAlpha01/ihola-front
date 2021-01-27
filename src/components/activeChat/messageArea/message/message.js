import React from 'react';
import classes from './message.module.css';
import {ReactComponent as MessageSeen} from '../../../../assets/message_status_vectors/msgseen_icon.svg'
import {ReactComponent as MessageSent} from '../../../../assets/message_status_vectors/msgsent_icon.svg'

const MessageSeenIcon = <span className={classes.receivingStatus}> 
                            <MessageSeen height='20px' width='20px'></MessageSeen>
                        </span>
const MessageSentIcon = <span className={classes.receivingStatus}> 
                            <MessageSent height='24px' width='24px'></MessageSent>
                        </span>

const message = (props) => {
    const messageBlockClasses = [classes.messageBackground]
    let messageStatus = null;

    if (props.message.isOwner) {
        messageBlockClasses.push(classes.owner)
        if (props.message.isSeen) {
            messageStatus = MessageSeenIcon;
        } else if (props.message.isSent) {
            messageStatus = MessageSentIcon;
        }
    }

    return (
        <div className={messageBlockClasses.join(' ')}>
        <p className={classes.messageContent}>
            {props.message.content}
        </p>
        <div className={classes.messageStatus}>
            <span className={classes.date}>
                {props.message.date}
            </span>
            {messageStatus}
        </div>
    </div>
    )
}

export default message;