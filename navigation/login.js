import React, { Component } from 'react';
import { AppRegistry, Text, Alert, Button, TextInput, View } from 'react-native';
import { eth, web3, personal, net } from "../lib/gethRPC/gethCore";

export class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(){
        super();
        this.state = {
            Name : 'Test'
        }
    }

    alertLogin(){
        const { navigate } = this.props.navigation;
        Alert.alert(
            'Returning Members!',
            'Please login with your username and password',
            [
                {
                    text: 'Register Account',
                    onPress: () => navigate('Register',{name:'Jane'}),
                    style: 'cancel',
                },
                { text: 'Login', onPress: () => {
                    this.props.navigation.closeDrawer();
                    console.log('OK Pressed')
                } 
                },
            ],
            { cancelable: false },
        );
    }

    fetchName(){
        const names = ["john","bill"];
        const index = Math.round(Math.random(2) % 2);
        this.state.Name = names[index];
        return names[1];
    }

    render() {
        const { navigate } = this.props.navigation;
        this.alertLogin();
        this.fetchName();
        this.props.navigation.openDrawer();
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title={this.state.Name}
                    onPress={() => navigate('Home', { name: 'Jane' })}
                    />
            </View>
        );
    }
}
