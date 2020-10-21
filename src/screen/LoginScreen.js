/* 로그인 화면 
 *  
**/
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AppButton from "../components/AppButton";
import config from "../config.json";
const APIURI = config.APIURI;


export default class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    };

    static navigationOptions = {
        title: '마실랩',
    };

    render() {
        return (
            <View style={styles.container}>
                {/*<Image style={styles.logo} source={require('../images/coffee.png')} />*/}
                <View style={{margin: 15}}></View>
                <Text style={{fontSize: 20, display: 'flex', marginLeft: 50}}>로그인해주세요!</Text>
                <View style={{margin: 15}}></View>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="이메일"
                    autoCapitalize= "none"
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.inputContainer}
                    secureTextEntry={true}
                    placeholder="비밀번호"
                    autoCapitalize= "none"
                    onChangeText={text => this.setState({ password: text })}
                />
                <View style={{ margin: 30 }}></View>
                <AppButton
                    title="로그인"
                    size="sm"
                    onPress={this._signInAsync}
                    margin={80}
                    backgroundColor="#6D3E31"
                />
                <AppButton
                    title="회원가입"
                    size="sm"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    margin={80}
                    backgroundColor="#6D3E31"
                />
            </View>
        );
    }

    _signInAsync = async () => {
        let userEmail = this.state.email;
        let loginAPI = APIURI + "api/user/getUserByEmail/" + userEmail;
        try {
            let res = await fetch(loginAPI);
            let userJson = await res.json();
            if (this.state.password === userJson.password) {
                await AsyncStorage.setItem('userToken', userEmail);
                this.props.navigation.navigate('App');

            } else {
                Alert.alert('오류', '이메일 또는 비밀번호가 틀렸습니다.');
            }
        } catch (err) {
            Alert.alert('err : ', err.message);
        }
    };
}


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    feedContainer: {
        display: 'flex',
        flex: 1
    },
    mainContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 50,
        height: 100,
        width: 100,
    },
    inputContainer: {
        padding: 5,
        marginLeft: 50,
        marginRight: 50,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 8,
        fontSize: 15,
    },
    icon: {
        width: 32,
        height: 32
    },
    headerRightWrap: {
        display: 'flex',
        flexDirection: 'row',

    }
})

