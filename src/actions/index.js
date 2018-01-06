import firebase from 'firebase';

import {EMAIL_CHANGE, PASSWORD_CHANGE} from './types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    };
};

export const passwordChange = (text) =>{
    return{
        type: PASSWORD_CHANGE,
        payload: text
    }
};

export const loginUser = ({email, password}) =>{
    console.log("Login " + email + " " + password)
    
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => {
            dispatch({
                type: 'login_user_success', payload: user
            });
        });
    }
};

