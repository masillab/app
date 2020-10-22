/* 홈 화면 구성
 * 전체 카페 랭킹 (3위까지), 전체 커피 랭킹 (3위), 
**/
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CoffeeCard from '../components/CoffeeCard';
import config from '../config.json';
const APIURI = config.APIURI;

export class HomeScreen extends Component {
    state = {
        coffees: []
    };

    async componentDidMount() {
        try{
            let topCoffeeUri = APIURI + "api/coffee/getPointTopCoffees"
            let res = await fetch(topCoffeeUri);
            let coffeeData = await res.json();
            if(coffeeData.length > 10) coffeeData = coffeeData.slice(0, 10);
            this.setState({coffees: coffeeData});
        } catch(err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            <ScrollView style={styles.feedContainer}>
                <Text style={styles.text}>최고 인기!</Text>
                {this.state.coffees.map((i) => (
                    <CoffeeCard
                        navigation={this.props.navigation}
                        coffeeId={i.coffeeId}
                        key={i.coffeeId} />
                ))}
                <Text style={styles.text}>개인 추천!</Text>
                <Text style={{fontSize: 15, paddingLeft: 30, backgroundColor: '#ECE8DF' }}> 준비중..!</Text>
            </ScrollView>
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
        fontSize: 18,
        paddingLeft: 20,
        padding: 7,
        backgroundColor: '#E9DCBE'
    },
})

