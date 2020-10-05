/* 홈 화면 구성
 * 전체 카페 랭킹 (3위까지), 전체 커피 랭킹 (3위), 
**/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from "../components/Home";
import { Ionicons } from 'react-native-vector-icons';


export class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.feedContainer}>
                    <Home />
                </ScrollView>
            </View>
        )
    }
}

export default HomeScreen

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 5
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 20,
        padding: 15,
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
        width: 32,
        height: 32
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

