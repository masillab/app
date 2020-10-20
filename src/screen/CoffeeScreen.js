import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, AsyncStorage } from 'react-native';
import AppButton from '../components/AppButton';
import config from "../config.json";
const APIURI = config.APIURI;

const Coffee = ({ navigation }) => {
    const coffeeId = navigation.getParam('coffeeId', 'NO-ID');
    const [cafeName, setCafeName] = useState('');
    const [coffeeName, setCoffeeName] = useState('');
    const [imgUri, setImgUri] = useState('src\images\coffee.png');
    const [pointAvg, setPointAvg] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        let isMount = true;
        getCoffeeData(isMount);
        return () => {
            isMount = false;
        }
    }, []);

    const getCoffeeData = async (isMount) => {
        if(!isMount) return;
        let userToken = await AsyncStorage.getItem('userToken');
        let coffeeUri = APIURI + "api/coffee/getCoffeeById/" + coffeeId;
        let coffeePointUri = APIURI + "api/coffee/getCoffeePointAvg/" + coffeeId;
        let userUri = APIURI + "api/user/getUserByEmail/" + userToken;
        try {
            let coffeeData = await fetch(coffeeUri);
            let coffeeJson = await coffeeData.json();
            setCafeName(coffeeJson.cafeName);
            setCoffeeName(coffeeJson.coffeeName);
            setImgUri(coffeeJson.imgUri);

            let coffeePointData = await fetch(coffeePointUri);
            let coffeePointJson = await coffeePointData.json();
            if (isNaN(coffeePointJson.avg)) setPointAvg(0);
            else setPointAvg(coffeePointJson.avg);

            let userData = await fetch(userUri);
            let userJson = await userData.json();
            let userLikes = userJson.likes;
            setUserId(userJson._id);
            if (userLikes.find(i => i.coffeeId == coffeeId) != undefined) {
                setIsLiked(true)
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const likeButton = (isLiked) => {
        if (isLiked) {
            return (
                <AppButton
                    title="좋아요 취소"
                    size="sm"
                    backgroundColor="gray"
                    onPress={disLike} />
            )
        }
        return <AppButton
            title="좋아요"
            size="sm"
            backgroundColor="#68BBAF"
            onPress={like} />
    }

    const like = async () => {
        let likeUri = APIURI + "api/user/userLikeInsert/" + userId + '/' + coffeeId;
        try {
            const insertRes = await fetch(likeUri, {
                method: "put",
            });
            setIsLiked(true);
        } catch (err) {
            console.log(err.message);
        }
    }

    const disLike = async () => {
        let disLikeUri = APIURI + "api/user/userLikeDelete/" + userId + '/' + coffeeId;
        try {
            const deleteRes = await fetch(disLikeUri, {
                method: "put",
            });
            setIsLiked(false);
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <View style={Styles.container}>
            <Image style={Styles.img} source={{ uri: imgUri }} />
            <Text style={Styles.cafeText}>
                {cafeName}
            </Text>
            <Text style={Styles.coffeeText}>
                {coffeeName}
            </Text>
            <Text style={Styles.pointText}>
                평점 : {pointAvg}
            </Text>
            {likeButton(isLiked)}
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