import React, { Component } from 'react';
import { AppRegistry, Text, Button, TextInput, View } from 'react-native';
import { eth, web3, personal, net } from "../lib/gethRPC/gethCore";

export class JoinGameScreen extends React.Component {
    static navigationOptions = {
        title: 'Join a Game',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Home"
                    onPress={() => navigate('Home', { name: 'Jane' })}
                    />
            </View>
        );
    }
}