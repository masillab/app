/* 홈 화면 구성
 * 전체 카페 랭킹 (3위까지), 전체 커피 랭킹 (3위), 
**/
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CoffeeCard from '../components/CoffeeCard';

export class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.feedContainer}>
                    <Text style={styles.text}>최고 인기!</Text>
                    <CoffeeCard />
                    <Text style={styles.text}>개인 추천!</Text>
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
    feedContainer: {
        display: 'flex',
        flex: 1
    },
    text: {
        fontSize: 15,
        paddingLeft: 20,
        padding: 7,
        backgroundColor: '#F4E2D2'
    },
})

