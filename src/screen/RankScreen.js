/* 랭킹 화면 구성
 *  
**/
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Rank from "../components/Rank";


export class RankScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.feedContainer}>
                    <Rank />
                </ScrollView>
            </View>
        )
    }
}

export default RankScreen

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

