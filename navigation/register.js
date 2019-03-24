import React, { Component } from 'react';
import { AppRegistry, Text, Button, TextInput, View } from 'react-native';
import { eth, web3, personal, net } from "../lib/gethRPC/gethCore";

export class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Username
                </Text>
                <TextInput />
                <Text>
                    Password
                </Text>
                <TextInput />
                <Button
                    title="Home"
                    onPress={() => navigate('Home')}
                    />
            </View>
        );
    }
}