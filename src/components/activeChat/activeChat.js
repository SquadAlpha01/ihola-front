import React, { Component } from 'react';
import classes from './activeChat.module.css';
import Header from './header/header'
import MessageArea from './messageArea/messageArea'
import NewMessage from './newMessage/newMessage'

class ActiveChat extends Component { 
    state = {
        easy: "peasy",
        messages: [
            {content: "look there is a cat.", isSeen: true, isSent: true, isOwner: !false, date: "10:40 PM"}, 
            {content: "Nah! not interested in chat", isSeen: true, isSent: true, isOwner: !true, date: "10:41 PM"}, 
            {content: "That is cause you are phaaat !!", isSeen: true, isSent: true, isOwner: !false, date: "10:42 PM"}, 
            {content: "That is cause you are phaaat !!", isSeen: true, isSent: true, isOwner: !false, date: "10:43 PM"}, 
            {content: "That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!  ", isSeen: true, isSent: true, isOwner: !false, date: "10:45 PM"}, 
            {content: "That is cause you are phaaat !!", isSeen: false, isSent: true, isOwner: !false, date: "10:40 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: true, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {content: "That is cause you are phaaat !!", isSeen: false, isSent: false, isOwner: !false, date: "11:14 PM"}],
        senderIcon: false,
        receiverIcon: false,
        receiverName: "Ramez"
    }

    render() {
        return (
            <div class={classes.activeChat}>
                <Header receiverName={this.state.receiverName} />
                <MessageArea messages={this.state.messages}/>
                <NewMessage />
            </div>
        )
    }

}

export default ActiveChat;