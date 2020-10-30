/* 홈 화면 구성
 * 전체 카페 랭킹 (3위까지), 전체 커피 랭킹 (3위), 
**/
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage } from 'react-native';
import CoffeeCard from '../components/CoffeeCard';
import config from '../config.json';
const APIURI = config.APIURI;

export class HomeScreen extends Component {
    state = {
        topCoffees: [],
        ageLikes: [],
        userBirthYear: null,
    };

    async componentDidMount() {
        let userEmail = await AsyncStorage.getItem('userToken');
        let userDataUri = APIURI + "api/user/getUserByEmail/" + userEmail;
        let allUserUri = APIURI + "api/user/getUsers";
        let topCoffeeUri = APIURI + "api/coffee/getPointTopCoffees"
        try{
            let res = await fetch(topCoffeeUri);
            let coffeeData = await res.json();
            if(coffeeData.length > 5) coffeeData = coffeeData.slice(0, 5);
            this.setState({topCoffees: coffeeData});

            let userRes = await fetch(userDataUri);
            let userJson = await userRes.json();
            this.setState({userBirthYear: userJson.birthYear});
            
            let allUserRes = await fetch(allUserUri);
            let allUserJson = await allUserRes.json();
            let ageSimilarUsers = allUserJson.filter(v => Math.abs(v.birthYear - this.state.userBirthYear) <= 5);
            let ageSimilarUserLikes = new Set();
            for(let i = 0; i < ageSimilarUsers.length; i++){
                ageSimilarUsers[i].likes.forEach(j => ageSimilarUserLikes.add(j.coffeeId));
            }
            let tmp = [...ageSimilarUserLikes];
            if(tmp.length > 5) tmp = tmp.slice(0, 5);
            this.setState({ageLikes: tmp});
        } catch(err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            <ScrollView style={styles.feedContainer}>
                <Text style={styles.text}>최고 인기!</Text>
                {this.state.topCoffees.map((i) => (
                    <CoffeeCard
                        navigation={this.props.navigation}
                        coffeeId={i.coffeeId}
                        key={i.coffeeId} />
                ))}
                <Text style={styles.text}>나이대 추천 {this.state.userBirthYear-5} ~ {this.state.userBirthYear+5} 년대생</Text>
                {this.state.ageLikes.map((i) => (
                    <CoffeeCard
                        navigation={this.props.navigation}
                        coffeeId={i}
                        key={i} />
                ))}
                <Text style={styles.text}>취향 추천</Text>
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

