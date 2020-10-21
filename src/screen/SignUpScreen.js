/* 회원가입 화면 
 *  
**/
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import AppButton from "../components/AppButton";
import config from "../config.json";
const APIURI = config.APIURI;

export default class SignUpScreen extends React.Component {
    state = {
        checked: 'male',
        email: '',
        password: '',
        passwordCheck: '',
        birthYear: '',
    };

    static navigationOptions = {
        title: '회원가입',
    };

    render() {
        const { checked } = this.state;
        return (
            <View >
                <View style={{ margin: 30 }}></View>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="이메일"
                    autoCapitalize= "none"
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="비밀번호"
                    autoCapitalize= "none"
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="비밀번호 확인"
                    autoCapitalize= "none"
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ passwordCheck: text })}
                />
                <TextInput
                    style={styles.inputContainer}
                    keyboardType="numeric"
                    placeholder="출생년도 ex:1995"
                    onChangeText={text => this.setState({ birthYear: text })}
                />
                <View style={styles.radioContainer}>
                    <Text>
                        남자
                    </Text>
                    <RadioButton
                        value="male"
                        status={checked === 'male' ? 'checked' : 'unchecked'}
                        onPress={() => this.setState({ checked: 'male' })}
                    />
                    <Text>
                        여자
                    </Text>
                    <RadioButton
                        value="female"
                        status={checked === 'female' ? 'checked' : 'unchecked'}
                        onPress={() => this.setState({ checked: 'female' })}
                    />
                </View>
                <View style={{ margin: 20 }}></View>
                <AppButton
                    title="회원가입"
                    size="sm"
                    onPress={this._signUpAsync}
                    margin={80}
                    backgroundColor="#6D3E31"
                />
            </View>
        );
    }

    _signUpAsync = async () => {
        let signUpAPI = APIURI + "api/user/signup";
        if(this.state.email.length < 1 ||
            this.state.password.length < 1 ||
            this.state.passwordCheck.length < 1 ||
            this.state.birthYear.length < 1){
                Alert.alert('오류', '비어있는 칸이 있습니다.')
                return 0;
        }
        if(this.state.password !== this.state.passwordCheck){
            Alert.alert('오류', '비밀번호 확인이 잘못되었습니다.');
            return 0;
        }
        try{
            const res = await fetch(signUpAPI, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    birthYear: this.state.birthYear,
                    gender: this.state.checked,
                })
            })
            const resJson = await res.json();
            if(resJson.result === 1){
                await AsyncStorage.setItem('userToken', this.state.email);
                this.props.navigation.navigate('App');
            } else {
                Alert.alert('오류', JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    birthYear: this.state.birthYear,
                    gender: this.state.checked,
                }));
                return;
            }
        } catch (err) {
            Alert.alert('err', err.message);
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
        marginTop: 15,
        fontSize: 15,
    },
    radioContainer: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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

