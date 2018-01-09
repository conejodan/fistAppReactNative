import React, { Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import {View, Text} from 'react-native';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyChkm5Cly2Jno10oWIZt0_gg1ATeEaIqvE",
            authDomain: "auth-24699.firebaseapp.com",
            databaseURL: "https://auth-24699.firebaseio.com",
            projectId: "auth-24699",
            storageBucket: "auth-24699.appspot.com",
            messagingSenderId: "738208412998"
          };
          firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;