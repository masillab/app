import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import CoffeeIcon from "../components/CoffeeIcon";
const APIURI = "http://ec2-3-34-96-202.ap-northeast-2.compute.amazonaws.com:3000/";

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
        )

    }
}


export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})