import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import { emailChanged, passwordChange, loginUser } from '../actions';

class LoginForm extends Component{

    componentWillMount(){
        console.log(">>>>>>>>>>>", this.props.user)
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChange(text);
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email,password});
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );

    }

    renderError(){
        if(this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render(){

        return (
            <Card>
                <CardSection>
                    <Input 
                    label="Email" 
                    placeholder="email@email.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    secureTextEntry
                    label="Password" 
                    placeholder="Password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value = {this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state =>{
    return{
        email : state.auth.email,
        password : state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user
    };
}

export default connect(mapStateToProps,{emailChanged, passwordChange, loginUser})(LoginForm);