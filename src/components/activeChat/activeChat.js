import React, { Component } from 'react';
import classes from './activeChat.module.css';
import Header from './header/header'
import MessageArea from './messageArea/messageArea'
import NewMessage from './newMessage/newMessage'

import * as actions  from '../../store/actions'
import { connect } from 'react-redux';

class ActiveChat extends Component { 
    state = {
        easy: "peasy",
        senderIcon: false,
        receiverIcon: false,
        receiverName: "Ramez"
    }

    componentDidMount () {
        this.props.onInitMessages();
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
        const newMessage = {
            content: newMsgContent,
            isSeen: false,
            isSent: false,
            isOwner: true,
            date: this.getCurrentTime()
        };

        this.props.onSendMessage(newMessage)
        // this.setState({
            // ...this.state,
            // messages
        // })
    }

    render() {
        return (
            <div class={classes.activeChat}>
                <Header receiverName={this.state.receiverName} />
                <MessageArea messages={this.props.messages}/>
                <NewMessage sendMessage={this.sendMessage}/>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        messages: state.messages.messages,
        downloadError: state.messages.downloadError,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSendMessage: (messageContent) => dispatch(actions.sendMsg(messageContent)),
        onInitMessages: () => dispatch(actions.downloadMsgs()),
        onMyMsgReceived: () => dispatch(actions.myMsgReceived()),
        onMyMsgSeen: () => dispatch(actions.myMsgSeen()),
        onTheirMsgReceived: () => dispatch(actions.theirMsgReceived()),
        onTheirMSgSeen: () => dispatch(actions.theirMSgSeen()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChat);
