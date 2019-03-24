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
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }} >
                {/* HEADER */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ fontSize: 24 }}>
                        Block Paper Scissors
                    </Text>
                </View>
                {/* BODY */}
                <View style={{ flex: 8, flexDirection: 'column', alignItems: 'center', justifyContent: "center" }} >
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
            </View>
        );
    }
}