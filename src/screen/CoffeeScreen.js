import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
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
        <View style={Styles.container}>
            <Image style={Styles.img} source={{ uri: imgUri }}/>
            <Text style={Styles.cafeText}>
                {cafeName}
            </Text>
            <Text style={Styles.coffeeText}>
                {coffeeName}
            </Text>
            <Text style={Styles.pointText}>
                평점 : {pointAvg}
            </Text>
            <AppButton title="좋아요" size="sm" />
        </View>
    )
}

export default Coffee;

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        height: 200,
    },
    cafeText: {
        marginTop: 25,
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        textTransform: "uppercase",
    },
    coffeeText: {
        marginTop: 5,
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: "bold",
        fontSize: 25,
    },
    pointText: {
        marginTop: 15,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        fontSize: 20,
    }
})