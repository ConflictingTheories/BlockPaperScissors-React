import React from 'react';
import { SafeAreaView, Text, Alert, Button, View } from 'react-native';
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
        this.fetchName();
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
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }} >
                {/* HEADER */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ fontSize: 24 }}>
                        Block Paper Scissors
                    </Text>
                </View>
                {/* BODY */}
                <View style={{ flex: 8, flexDirection: 'column', alignItems: 'center', justifyContent: "center" }} >
                    <Button
                        title={"Login as " + this.state.Name}
                        onPress={() => navigate('Application', { name: this.state.Name})}
                        />
                </View>
            </SafeAreaView>
        );
    }
}
