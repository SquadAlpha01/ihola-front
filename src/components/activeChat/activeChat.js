import React, { Component } from 'react';
import classes from './activeChat.module.css';
import Header from './header/header'
import MessageArea from './messageArea/messageArea'
import NewMessage from './newMessage/newMessage'

class ActiveChat extends Component { 
    state = {
        easy: "peasy",
        messages: [
            {messageContent: "look there is a cat."}, 
            {messageContent: "Nah! not interested in chat"}, 
            {messageContent: "That is cause you are phaaat !!"}],
        senderIcon: false,
        receiverIcon: false
    }

    render() {
        return (
            <div class={classes.activeChat}>
                <Header />
                <MessageArea messages={this.state.messages}/>
                <NewMessage />
            </div>
        )
    }

}

export default ActiveChat;