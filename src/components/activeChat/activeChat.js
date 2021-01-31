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

    getCurrentTime = () => {
        const today = new Date();
        if (today.getHours() >=12) {
            const hours = today.getHours() === 12 ? 12: today.getHours() % 12
            return `${hours}:${today.getMinutes()} PM`
        } else {
            return `${today.getHours()}:${today.getMinutes()} AM`
        }
    } 

    sendMessage = (newMsgContent) => {
        if (!newMsgContent) {
            return
        }
        const messages = [...this.state.messages, {
            content: newMsgContent,
            isSeen: false,
            isSent: false,
            isOwner: true,
            date: this.getCurrentTime()
        }]
        this.setState({
            ...this.state,
            messages
        })
    }

    render() {
        return (
            <div class={classes.activeChat}>
                <Header receiverName={this.state.receiverName} />
                <MessageArea messages={this.state.messages}/>
                <NewMessage sendMessage={this.sendMessage}/>
            </div>
        )
    }

}

export default ActiveChat;