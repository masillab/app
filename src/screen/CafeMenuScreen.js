import React from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native';
import CoffeeIcon from "../components/CoffeeIcon";
import config from "../config.json";
const APIURI = config.APIURI;

export default class CafeMenu extends React.Component {
    state = {
        coffees: [],
    }
    async componentDidMount() {
        const cafeName = this.props.navigation.getParam('cafeName', 'NO-ID');
        let coffeeUri = APIURI + "api/coffee/getCoffeeByCafe/" + cafeName;
        try {
            let coffeeData = await fetch(coffeeUri);
            let coffeeJson = await coffeeData.json();
            this.setState({ coffees: coffeeJson });
        } catch (err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            /*
            <ScrollView>
                <View style={Styles.container}>
                    {this.state.coffees.map((n) => (
                        <CoffeeIcon
                            navigation={this.props.navigation}
                            coffeeId={n._id}
                            key={n._id} />
                    ))}

                </View>
            </ScrollView>
            */
            <FlatList 
                data={this.state.coffees}
                renderItem={({item}) =>{
                    return (
                        <CoffeeIcon
                            navigation={this.props.navigation}
                            coffeeId={item._id}
                            key={item._id} />
                    )
                }}
                onEndReached={this.endReached}
                onEndReachedThreshold={.7}
                numColumns={3}
                initialNumToRender={21}
                keyExtractor={(item) => item._id } />
        )
    }
}

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    flatList:{
        flexDirection: "column",
    }
})