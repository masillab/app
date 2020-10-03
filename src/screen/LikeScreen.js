/* 나의메뉴 화면 구성
 *  
**/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, AsyncStorage, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Like from "../components/Like";

export class LikeScreen extends Component {
    state = {
        email: '',
    };

    constructor(props) {
        super(props);
        this.getUserEmail();
    }

    render() {
        const { email } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    {email}
                </Text>
                <Button
                    title="logout"
                    onPress={this.removeItemValue}
                />
                <ScrollView style={styles.feedContainer}>
                    <Like />
                </ScrollView>
            </View>
        )
    };

    async getUserEmail() {
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            this.setState({email: userToken});
        } catch(err){
            Alert.alert('err', err.message);
        }
    };

    async removeItemValue() {
        let token = await AsyncStorage.getItem('userToken');
        try {
            if (token) {
                await AsyncStorage.removeItem('userToken');
            }
            Alert.alert('완료!', '재접속해주세요.')
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 25,
        padding: 23,
        borderBottomColor: Colors.grayl,
        borderBottomWidth: 0.5
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 20,
        padding: 17,
        borderTopColor: Colors.grayl,
        borderTopWidth: 0.5
    },
    feedContainer: {
        display: 'flex',
        flex: 1
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

