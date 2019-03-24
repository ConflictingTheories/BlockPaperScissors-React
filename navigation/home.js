import React from 'react';
import { Text, Button, View, SafeAreaView } from 'react-native';
// import { SafeAreaView } from 'react-navigation';
import { eth, web3, personal, net } from '../lib/gethRPC/gethCore';

// Home Screen
export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Block Paper Scissors',
    };
    // Homescreen Constructor
    constructor(){
        super();
        this.state = {
            name: "Helo"
        };
        this.testRPC();
    }

    // Fetch RPC Call
    testRPC () {
        let string = "hello";
        let hex = string.hexEncode(16);

        web3.sha3(hex)
            .then((response) => {
                this.setState({ name: response.data.result });
            })
            .catch((err) => console.error(err))
    }

    // Display
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems:'stretch' }} >
                    {/* HEADER */}
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                        <Text style={{ fontSize: 24 }}>
                        Block Paper Scissors
                        </Text>
                    </View>
                    
                    {/* BODY */}
                    <View style={{ flex: 8, flexDirection: 'column', alignItems:'center', justifyContent: "center" }} >
                        <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <Text>
                                Welcome to Block Paper Scissors
                                Open the side menu for options
                            </Text>
                            <Text>
                                ---------------
                                SHA3 TEST BELOW
                                ---------------
                            </Text>
                            <Text>{this.state.name}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'stretch' }} >
                            <Button
                                title="Login" 
                                onPress={() => navigate("Login")} 
                                />
                            <Button
                                title="Register"
                                onPress={() => navigate("Register")}
                                />
                        </View>
                    </View>
            </SafeAreaView>
        );
    }
}