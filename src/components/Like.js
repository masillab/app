import React, { useState, useEffect } from 'react'
import {View, Text, Image,StyleSheet, ScrollView} from 'react-native'
const APIURI = "http://ec2-3-34-96-202.ap-northeast-2.compute.amazonaws.com:3000/";

const Like = (props) => {
    const [cafeName, setCafeName] = useState('');
    const [coffeeName, setCoffeeName] = useState('');
    const [imgUri, setImgUri] = useState('src\images\coffee.png');

    useEffect(() => {
        getCoffeeData();
    });

    const getCoffeeData = async () => {
        coffeeUri = APIURI + "api/coffee/getCoffeeById/" + props.coffeeId;
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
        <View style={styles.container}> 
            <Image 
                style={styles.img}
                source={{
                    uri: imgUri,
                }}
            />
            <Text numberOfLines={1} style={{width: 100}}>
                {coffeeName}
            </Text>
        </View>
    )
}

export default Like

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexWrap: 'wrap',
    },
    img: {
        width: 120,
        height: 120,
    }
})

/**위에 없애려면 위 코드 같이 스크롤에 넣기 */