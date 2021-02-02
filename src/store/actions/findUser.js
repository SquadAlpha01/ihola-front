import * as actionTypes from '../actionTypes'
import axios from 'axios'

const findUserInit = () => {
    return {
        type: actionTypes.FIND_USER_INIT
    }
}
const findUserSuccess= (user) => {
    return {
        type: actionTypes.FIND_USER_SUCCESS,
        user
    }
}
const findUserFail = (error) => {
    return {
        type: actionTypes.FIND_USER_FAIL,
        error //mesh ba3mel beha 7aga
    }
}

export const findUser =(username) => {
    console.log("finding", username)
    return dispatch => {
        dispatch(findUserInit());
        // add params
         
        axios.get('https://ihola-84fc3-default-rtdb.firebaseio.com/contacts.json') // change this to match our apis
        .then(res => {
            let user={}
            
            for(const [key, value] of Object.entries(res.data))
            {
           
                if(res.data[key].username === username) 
                {
                    user=res.data[key]
                    break; 
                }
            }

            dispatch(findUserSuccess(user));
            //dispatch(findUserSuccess(res.data)); //check this // change this to match us
        })
        .catch(error => {
            
            dispatch(findUserFail(error))
        })
    }
}


const addUserInit = () => {
    return {
        type: actionTypes.ADD_USER_INIT
    }
}
const addUserSuccess= () => {
    return {
        type: actionTypes.ADD_USER_SUCCESS
    }
}
const addUserFail = (error) => {
    return {
        type: actionTypes.ADD_USER_FAIL,
        error //mesh ba3mel beha 7aga
    }
}

export const addUser =() => {

    return dispatch => {
        
        dispatch(addUserInit());
        axios.get('https://ihola-84fc3-default-rtdb.firebaseio.com/contacts.json') // change this to match our apis
        .then(res => {
            dispatch(addUserSuccess()); //check this // change this to match us
        })
        .catch(error => {
            dispatch(addUserFail(error))
        })
    }
}