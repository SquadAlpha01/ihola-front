import * as actionTypes from '../actionTypes';

const initialState = {
    messages: [],
    downloadError: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEND_MSG:
            return {
                ...state,
                messages: [...state.messages, action.msg]
            };
        case actionTypes.DOWNLOAD_MSGS_FAILED:
            return {
                ...state,
                downloadError: true
            };
        case actionTypes.SET_MSGS:
            return {
                ...state,
                messages: action.msgs,
                downloadError: false
            };
        case actionTypes.MY_MSG_RECEIVED:
            return state.messages.map(msg => {
                if (msg.id !== action.msgId) {
                    return msg
                }
                return {
                    ...msg,
                    isSent: true
                }
            });
        case actionTypes.MY_MSG_SEEN:
            return state.messages.map(msg => {
                if (msg.id !== action.msgId) {
                    return msg
                }
                return {
                    ...msg,
                    isSeen: true
                }
            });
        case actionTypes.THEIR_MSG_RECEIVED:
            return state.messages.map(msg => {
                if (msg.id !== action.msgId) {
                    return msg
                }
                return {
                    ...msg,
                    isSent: true
                }
            });
        case actionTypes.THEIR_MSG_SEEN:
            return state.messages.map(msg => {
                if (msg.id !== action.msgId) {
                    return msg
                }
                return {
                    ...msg,
                    isSeen: true
                }
            });
        default:
            return state;
    }
};

export default reducer;