import * as actionTypes from '../actionTypes';
// import axios from '../../axiosInstance';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://testing.testing.com'
});

export const sendMsg = ( message ) => {
    // todo

    // if error => sendMsgFailed()
    console.log('hsfs')
    console.log(message)
    return {
        type: actionTypes.SEND_MSG,
        msg: message
    }
}

export const sendMsgFailed = ( message ) => {
    // todo
    return {
        type: actionTypes.SEND_MSG_FAILED,
        msgId: message.id
    }
}

export const setMsgs = ( msgs ) => {
    return {
        type: actionTypes.SET_MSGS,
        msgs: msgs
    };
};

export const downloadingMsgsFailed = ( userId ) => {
    return {
        type: actionTypes.DOWNLOAD_MSGS_FAILED,
        userId: userId
    };
};

export const downloadMsgs = ( userId ) => {
    // todo
    return {
        type: actionTypes.SET_MSGS,
        msgs: [
            {id: 111564, content: "look there is a caat.", isSeen: true, isSent: true, isOwner: !false, date: "10:40 PM"}, 
            {id: 2515, content: "Nah! not interested in chat", isSeen: true, isSent: true, isOwner: !true, date: "10:41 PM"}, 
            {id: 31312, content: "That is cause you are phaaat !!", isSeen: true, isSent: true, isOwner: !false, date: "10:42 PM"}, 
            {id: 10321, content: "That is cause you are phaaat !!", isSeen: true, isSent: true, isOwner: !false, date: "10:43 PM"}, 
            {id: 150165, content: "That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!That is cause you are phaaat !!  ", isSeen: true, isSent: true, isOwner: !false, date: "10:45 PM"}, 
            {id: 135616, content: "That is cause you are phaaat !!", isSeen: false, isSent: true, isOwner: !false, date: "10:40 PM"}, 
            {id: 1313, content: "Nah! not interested in chat", isSeen: false, isSent: true, isOwner: !true, date: "11:13 PM"}, 
            {id: 1213, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 5641, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 1153, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 113, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 1894, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 113, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 31, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 115, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 116, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 148, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 1131, content: "Nah! not interested in chat", isSeen: false, isSent: false, isOwner: !true, date: "11:13 PM"}, 
            {id: 1358, content: "That is cause you are phaaat !!", isSeen: false, isSent: false, isOwner: !false, date: "11:14 PM"}
        ], 
    };

    // return dispatch => {
    //     axios.get( `chat/getchat?${userId}` )
    //         .then( response => {
    //             dispatch(setMsgs(response.data));
    //         } )
    //         .catch( error => {
    //             dispatch(downloadingMsgsFailed());
    //         } );
    // };
}

// todo now, after writing those two actions (my and their) i think only need one

export const myMsgReceived = ( msgId ) => {
    // todo server sends that my msg is received .. sockets?
    return {
        actionType: actionTypes.MY_MSG_RECEIVED,
        msgId: msgId
    }
}

export const myMsgSeen = ( msgId ) => {
    // todo server sends that my msg is seen.. sockets?
    return {
        actionType: actionTypes.MY_MSG_SEEN,
        msgId: msgId
    }
}

export const theirMsgReceived = ( msgId ) => {
    // todo fire this action when i receive a msg
    return {
        actionType: actionTypes.THEIR_MSG_RECEIVED,
        msgId: msgId
    }
}

export const theirMSgSeen = ( msgId ) => {
    // todo fire this action when i see a msg
    return {
        actionType: actionTypes.THEIR_MSG_SEEN,
        msgId: msgId
    }
}
