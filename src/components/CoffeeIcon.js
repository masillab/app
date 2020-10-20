import React, { useState, useEffect } from 'react'
import {Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import config from "../config.json";
const APIURI = config.APIURI;

const CoffeeIcon = ({ coffeeId, navigation }) => {
    const [cafeName, setCafeName] = useState('');
    const [coffeeName, setCoffeeName] = useState('');
    const [imgUri, setImgUri] = useState('src\images\coffee.png');

    useEffect(() => {
        let isMount = true;
        getCoffeeData(isMount);
        return () => {
            isMount = false
        };
    }, []);

    const getCoffeeData = async (isMount) => {
        coffeeUri = APIURI + "api/coffee/getCoffeeById/" + coffeeId;
        if(!isMount) return;
        try{
            let coffeeData = await fetch(coffeeUri);
            let coffeeJson = await coffeeData.json();
            setCafeName(coffeeJson.cafeName);
            setCoffeeName(coffeeJson.coffeeName);
            setImgUri(coffeeJson.imgUri);
        } catch (err) {
            console.log(err.message);
        }
    }
    return(
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Coffee", {
                    coffeeId: coffeeId
                })
            }} 
            style={styles.container} > 
            <ImageBackground style={styles.img} source={{ uri: imgUri }}>
                <Text numberOfLines={1} style={styles.topText}>
                    {cafeName}
                </Text>
                <Text numberOfLines={1} style={styles.bottomText}>
                    {coffeeName}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CoffeeIcon

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexWrap: 'wrap',
    },
    img: {
        width: 120,
        height: 120,
    },
    topText:{
        width: 100,
        color: "white",
        fontWeight: "bold",
        marginBottom: "auto",
    },
    bottomText: {
        width: 100,
        color: "white",
        fontWeight: "bold",
        marginTop: "auto",
    },
})

/**위에 없애려면 위 코드 같이 스크롤에 넣기 */