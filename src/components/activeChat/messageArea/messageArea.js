import React from 'react'
import classes from './messageArea.module.css'
import Message from './message/message'

const messageArea = (props) => {
    const messages = []
    props.messages.forEach(message => {
        messages.push(<Message message={message}></Message>)
    })

    return (
        <div className={classes.messageArea}>
            <div className={classes.messageAreaContent}>        
                <p style={{color: "#909497", textAlign: 'center'}}>Conversation Started</p>
                {messages}
            </div>
        </div>
    )
} 

export default messageArea