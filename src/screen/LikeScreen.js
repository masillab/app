/* 나의메뉴 화면 구성
 *  
**/
import { Updates } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage, Alert } from 'react-native';
import CoffeeIcon from "../components/CoffeeIcon";
import AppButton from "../components/AppButton";
import config from "../config.json";
const APIURI = config.APIURI;

export class LikeScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
        coffees: []
    };

    async componentDidMount() {
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            this.setState({ email: userToken });
            let userUri = APIURI + "api/user/getUserByEmail/" + userToken;
            let res = await fetch(userUri);
            let userJson = await res.json();
            this.setState({ coffees: userJson.likes });
        } catch (err) {
            Alert.alert('err', err.message);
        }
    }

    render() {
        const { email } = this.state;
        return (
            <ScrollView style={styles.Container}>
                <View style={{ margin: 15 }}></View>
                <Text style={styles.idText}>
                    {email}
                </Text>
                <View style={{ margin: 5 }}></View>
                <AppButton
                    size="sm"
                    title="로그아웃"
                    onPress={this.removeItemValue}
                    margin={80}
                    backgroundColor="#6D3E31"
                />
                <View style={{ margin: 15 }}></View>
                <View style={styles.coffeeContainer}>
                    {this.state.coffees.map((n) => (
                        <CoffeeIcon 
                            navigation={this.props.navigation}
                            coffeeId={n.coffeeId} 
                            key={n.coffeeId} />
                    ))}
                </View>
            </ScrollView>
        )
    };

    async removeItemValue() {
        let token = await AsyncStorage.getItem('userToken');
        try {
            if (token) {
                await AsyncStorage.removeItem('userToken');
            }
            Updates.reload();
            //Alert.alert('완료!', '재접속해주세요.')
            //this.props.navigation.dispatch({type: 'Navigation/BACK'});
            return true;
        }
        catch (exception) {
            Alert.alert('fail', exception.message);
            return false;
        }
    }
}

export default LikeScreen

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    idText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
    },
    coffeeContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    logoutButton: {
        margin: 100,
    },
    icon: {
        width: 40,
        height: 40
    },
    logo: {
        width: 150,
        height: '100%'
    },
    headerRightWrap: {
        display: 'flex',
        flexDirection: 'row',

    }
})

