import * as actionTypes from '../actionTypes'
const initalState = {
    user: {},
    findLoading: false,
    findError: false,

    addLoading: false,
    addError: false,
    userAdded: false
}

const reducer = (state=initalState, action) => {
    switch(action.type)
    {
        case(actionTypes.FIND_USER_INIT):
        return {
            ...state,
            user: null,
            findLoading: true,
            findError: false,
            addLoading: false,
            addError: false,
            userAdded: false
        }

        case(actionTypes.FIND_USER_SUCCESS):
        return {
            ...state,
            user: action.user,
            findLoading: false,
          
        }

        case(actionTypes.FIND_USER_FAIL):
        return {
            ...state,
            findLoading: false,
            findError: true
        }


        
        case(actionTypes.ADD_USER_INIT):
        return {
            ...state,
            addLoading: true,
            addError: false,
            userAdded: false
        }
        case(actionTypes.ADD_USER_SUCCESS):
        return {
            ...state,
            addLoading: false,
            userAdded: true,
          
        }
        case(actionTypes.ADD_USER_FAIL):
        return {
            ...state,
            addError: true,
            
        }
        default: return state;
    }
}

export default reducer
