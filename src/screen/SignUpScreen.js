/* 회원가입 화면 
 *  
**/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';

const APIURI = "http://ec2-3-34-96-202.ap-northeast-2.compute.amazonaws.com:3000/";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[
            styles.appButtonContainer,
            size === "sm" && {
                paddingHorizontal: 8,
                paddingVertical: 6,
                elevation: 6
            },
            backgroundColor && { backgroundColor }
        ]}
    >
        <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
            {title}
        </Text>
    </TouchableOpacity>
);

export default class SignUpScreen extends React.Component {
    state = {
        checked: '남자',
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
                <View style={{ margin: 100 }}></View>
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
                <TextInput
                    style={styles.inputContainer}
                    placeholder="비밀번호 확인"
                    onChangeText={text => this.setState({ passwordCheck: text })}
                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="출생년도 ex:1995"
                    onChangeText={text => this.setState({ birthYear: text })}
                />
                <View style={styles.radioContainer}>
                    <Text>
                        남자
                    </Text>
                    <RadioButton
                        value="남자"
                        status={checked === '남자' ? 'checked' : 'unchecked'}
                        onPress={() => this.setState({ checked: '남자' })}
                    />
                    <Text>
                        여자
                    </Text>
                    <RadioButton
                        value="여자"
                        status={checked === '여자' ? 'checked' : 'unchecked'}
                        onPress={() => this.setState({ checked: '여자' })}
                    />
                </View>
                <View style={{ margin: 20 }}></View>
                <AppButton
                    title="회원가입"
                    size="sm"
                    onPress={() => { Alert.alert('회원가입') }}
                    backgroundColor="#6D3E31"
                />
            </View>
        );
    }
    _signUpReq = () => {
        axios.post(`${APIURI}signup`);
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
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
    appButtonContainer: {
        height: 36,
        marginTop: 8,
        marginLeft: 80,
        marginRight: 80,
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
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

