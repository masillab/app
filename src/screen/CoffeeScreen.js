import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
const APIURI = "http://ec2-3-34-96-202.ap-northeast-2.compute.amazonaws.com:3000/";

const Coffee = ({ navigation }) => {
    const coffeeId = navigation.getParam('coffeeId', 'NO-ID');
    const [cafeName, setCafeName] = useState('');
    const [coffeeName, setCoffeeName] = useState('');
    const [imgUri, setImgUri] = useState('src\images\coffee.png');
    const [pointAvg, setPointAvg] = useState(0);

    useEffect(() => {
        getCoffeeData();
    }, []);

    const getCoffeeData = async () => {
        let coffeeUri = APIURI + "api/coffee/getCoffeeById/" + coffeeId;
        let coffeePointUri = APIURI + "api/coffee/getCoffeePointAvg/" + coffeeId;
        try{
            let coffeeData = await fetch(coffeeUri);
            let coffeeJson = await coffeeData.json();
            setCafeName(coffeeJson.cafeName);
            setCoffeeName(coffeeJson.coffeeName);
            setImgUri(coffeeJson.imgUri);

            let coffeePointData = await fetch(coffeePointUri);
            let coffeePointJson = await coffeePointData.json();
            if(isNaN(coffeePointJson.avg)) setPointAvg(0);
            else setPointAvg(coffeePointJson.avg);
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <View>
            <Image style={Styles.img} source={{ uri: imgUri }}/>
            <Text style={Styles.cafeText}>
                {cafeName}
            </Text>
            <Text>
                {coffeeName}
            </Text>
            <Text>
                평점 : {pointAvg}
            </Text>
            
        </View>
    )
}

export default Coffee;

export const Styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    },
    cafeText: {
        textTransform: "uppercase",
    }
})