/* 로그인 화면 
 *  
**/
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AppButton from "../components/AppButton";
const APIURI = "http://ec2-3-34-96-202.ap-northeast-2.compute.amazonaws.com:3000/";


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
            <View >
                <Image style={styles.logo} source={require('../images/coffee.png')} />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="이메일"
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="비밀번호"
                    onChangeText={text => this.setState({ password: text })}
                />
                <View style={{ margin: 20 }}></View>
                <AppButton
                    title="로그인"
                    size="sm"
                    onPress={this._signInAsync}
                    backgroundColor="#6D3E31"
                />
                <AppButton
                    title="회원가입"
                    size="sm"
                    onPress={() => this.props.navigation.navigate('SignUp')}
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
                Alert.alert('실패', '비밀번호가 틀렸습니다.');
            }
        } catch (err) {
            Alert.alert('err : ', err.message);
        }
    };
}


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 5
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
