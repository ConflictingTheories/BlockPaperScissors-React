import React, { Component } from 'react';
import { AppRegistry, Text, Button, TextInput, Image, View } from 'react-native';
import { eth, web3, personal, net } from '../lib/gethRPC/gethCore';

// Home Screen
export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Block Paper Scissors',
    };
    constructor(){
        super();
        
        this.state = {
            name: "Helo"
        }

        this.testRPC();
    }

    testRPC () {
        let string = "hello";
        let hex = string.hexEncode(16);

        web3.sha3(hex)
            .then((response) => {
                this.setState({
                    name: response.data.result
                })
            })
            .catch((err) => console.error(err))
    }

    render() {
        const { navigate } = this.props.navigation;
        // this.props.navigation.openDrawer();
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Welcome to Block Paper Scissors - Open the side menu for options
                </Text>
                <Text>
                    {this.state.name}
                </Text>
                {/* <Button
                    title="Login"
                    onPress={() => navigate('Login', { name: 'Jane' })}
                />
                <Button
                    title="Create Account"
                    onPress={() => navigate('Register', { name: 'Jane' })}
                />
                <Button
                    title="Create a Game"
                    onPress={() => navigate('CreateGame', { name: 'Jane' })}
                />
                <Button
                    title="Join a Game"
                    onPress={() => navigate('JoinGame', { name: 'Jane' })}
                /> */}
            </View>
        );
    }
}