import React from 'react'
import classes from './messageArea.module.css'
import Message from './message/message'

const messageArea = (props) => {
    const messages = []
    props.messages.forEach(message => {
        messages.push(<Message content={message.messageContent}></Message>)
    })

    return (
        <div className={classes.messageArea}>
            <div className={classes.messageAreaContent}>
                {messages}
            </div>
        </div>
    )
} 

export default messageArea