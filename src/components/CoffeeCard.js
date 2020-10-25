import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import config from '../config.json';
const APIURI = config.APIURI;

const CoffeeCard = ({navigation, coffeeId}) => {
    const [coffeeName, setCoffeeName] = useState('');
    const [cafeName, setCafeName] = useState('');
    const [coffeeImg, setCoffeeImg] = useState('../images.coffee.png');
    const [pointAvg, setPointAvg] = useState(0);

    useEffect(() => {
        let isMount = true;
        getCoffeeData(isMount);
        getCoffeePointAvg();
        return () => {
            isMount = false
        };
    }, []);

    const getCoffeePointAvg = async () => {
        let coffeePointUri = APIURI + "api/coffee/getCoffeePointAvg/" + coffeeId;
        try{
            let coffeePointData = await fetch(coffeePointUri);
            let coffeePointJson = await coffeePointData.json();
            if (isNaN(coffeePointJson.avg)) setPointAvg(0);
            else setPointAvg(coffeePointJson.avg);

        } catch (err) {
            console.log(err.message);
        }
    }

    const getCoffeeData = async (isMount) => {
        let coffeeUri = APIURI + "api/coffee/getCoffeeById/" + coffeeId;
        if(!isMount) return;
        try{
            let coffeeData = await fetch(coffeeUri);
            let coffeeJson = await coffeeData.json();
            setCafeName(coffeeJson.cafeName);
            setCoffeeName(coffeeJson.coffeeName);
            setCoffeeImg(coffeeJson.imgUri);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <TouchableOpacity
            onPress={()=>{
                navigation.navigate("Coffee", {
                    coffeeId: coffeeId
                })
            }}
            style={styles.container}>
            <Image style={styles.img} source={{uri: coffeeImg}} />
            <Text numberOfLines={1} style={styles.cafeText}>{cafeName}</Text>
            <Text numberOfLines={1} style={styles.coffeeText}>{coffeeName}</Text>
            <Text style={styles.coffeePointText}>{pointAvg}</Text>
        </TouchableOpacity>
    )
}

export default CoffeeCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ECE8DF",
    },
    img: {
        marginLeft: 8,
        margin: 5,
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    cafeText: {
        width: 80,
        fontSize: 16,
        fontWeight: "bold",
    },
    coffeeText: {
        width: 170,
        fontSize: 17,
        fontWeight: '900',
    },
    coffeePointText: {
        backgroundColor: "#D8CFBA",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 12,
        padding: 5,
    },
})