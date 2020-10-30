import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, AsyncStorage, Modal, Alert, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import config from "../config.json";
import starImg from "../images/starOpac.png";
const APIURI = config.APIURI;

const CoffeeScreen = ({ navigation }) => {
    const coffeeId = navigation.getParam('coffeeId', 'NO-ID');
    const [cafeName, setCafeName] = useState('');
    const [coffeeName, setCoffeeName] = useState('');
    const [imgUri, setImgUri] = useState('../images/coffee.png');
    const [pointAvg, setPointAvg] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [userId, setUserId] = useState('');
    const [isPointed, setIsPointed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [starCount, setStarCount] = useState(0);
    const [tags, setTags] = useState("");

    useEffect(() => {
        let isMount = true;
        getCoffeeData(isMount);
        return () => {
            isMount = false;
        }
    }, []);

    const getCoffeeData = async (isMount) => {
        if (!isMount) return;
        let userToken = await AsyncStorage.getItem('userToken');
        let coffeeUri = APIURI + "api/coffee/getCoffeeById/" + coffeeId;
        let userUri = APIURI + "api/user/getUserByEmail/" + userToken;
        try {
            let coffeeData = await fetch(coffeeUri);
            let coffeeJson = await coffeeData.json();
            let coffeeTags = coffeeJson.tags;
            let tagsStr = "";
            if(coffeeTags.length !== 0){
                coffeeTags.forEach(i => {
                    let tagtmp = i.tag;
                    tagsStr += `#${tagtmp} `
                });
            }
            setTags(tagsStr);
            setCafeName(coffeeJson.cafeName);
            setCoffeeName(coffeeJson.coffeeName);
            setImgUri(coffeeJson.imgUri);
            let coffeePoints = coffeeJson.points;

            getCoffeePointAvg();

            let userData = await fetch(userUri);
            let userJson = await userData.json();
            let userLikes = userJson.likes;
            let userStars = userJson.stars;
            setUserId(userJson._id);
            if (userLikes.find(i => i.coffeeId === coffeeId) !== undefined) setIsLiked(true)
            if (userStars.find(i => i.coffeeId === coffeeId) !== undefined) setIsPointed(true);
        } catch (err) {
            console.log(err.message);
        }
    }

    const getCoffeePointAvg = async () => {
        let coffeePointUri = APIURI + "api/coffee/getCoffeePointAvg/" + coffeeId;
        try {
            let coffeePointData = await fetch(coffeePointUri);
            let coffeePointJson = await coffeePointData.json();
            if (isNaN(coffeePointJson.avg)) setPointAvg(0);
            else setPointAvg(coffeePointJson.avg);

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
                    margin={80}
                    onPress={disLike} />
            )
        }
        return <AppButton
            title="좋아요"
            size="sm"
            backgroundColor="#68BBAF"
            margin={80}
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

    const pointButton = () => {
        if (isPointed) {
            return (
                <AppButton
                    title="평가 완료"
                    size="sm"
                    backgroundColor="gray"
                    fontColor="#323232"
                    margin={120} />
            )
        }
        return (
            <AppButton
                title="별점 주기"
                size="sm"
                backgroundColor="#FDFD95"
                fontColor="#323232"
                margin={120}
                onPress={() => {
                    setModalVisible(true);
                }} />
        )
    }

    const starPointInsert = async () => {
        let starPointUserUri = APIURI + "api/user/userStarInsert/" + userId + '/' + coffeeId + '/' + starCount;
        let starPointCoffeeUri = APIURI + "api/coffee/coffeeStarInsert/" + coffeeId + '/' + userId + '/' + starCount;
        try {
            const userStarInsertRes = await fetch(starPointUserUri, {
                method: "put",
            });
            const CoffeeStarInsertRes = await fetch(starPointCoffeeUri, {
                method: "put",
            });
            setIsPointed(true);
            setModalVisible(!modalVisible);
            getCoffeePointAvg();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <View style={Styles.container}>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
            >
                <View style={Styles.modalContainer}>
                    <View style={Styles.modal}>
                        <Text style={Styles.modalText}>
                            별점 주기 : {starCount} 점
                        </Text>
                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <TouchableOpacity onPress={() => setStarCount(1)}>
                                <Image style={[
                                    Styles.starImg,
                                    (starCount > 0 && starCount >= 1) ?
                                        { backgroundColor: "yellow" } : { backgroundColor: "white" }
                                ]} source={starImg} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStarCount(2)}>
                                <Image style={[
                                    Styles.starImg,
                                    (starCount > 0 && starCount >= 2) ?
                                        { backgroundColor: "yellow" } : { backgroundColor: "white" }
                                ]} source={starImg} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStarCount(3)}>
                                <Image style={[
                                    Styles.starImg,
                                    (starCount > 0 && starCount >= 3) ?
                                        { backgroundColor: "yellow" } : { backgroundColor: "white" }
                                ]} source={starImg} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStarCount(4)}>
                                <Image style={[
                                    Styles.starImg,
                                    (starCount > 0 && starCount >= 4) ?
                                        { backgroundColor: "yellow" } : { backgroundColor: "white" }
                                ]} source={starImg} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStarCount(5)}>
                                <Image style={[
                                    Styles.starImg,
                                    (starCount > 0 && starCount >= 5) ?
                                        { backgroundColor: "yellow" } : { backgroundColor: "white" }
                                ]} source={starImg} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <AppButton
                                backgroundColor="#68BBAF"
                                title="확인"
                                size="sm"
                                margin={3}
                                onPress={starPointInsert} />
                            <AppButton
                                backgroundColor="gray"
                                title="취소"
                                size="sm"
                                margin={3}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setStarCount(0);
                                }} />
                        </View>
                    </View>
                </View>
            </Modal>
            <Image style={Styles.img} source={{ uri: imgUri }} />
            <Text style={Styles.cafeText}>
                {cafeName}
            </Text>
            <Text style={Styles.coffeeText}>
                {coffeeName}
            </Text>
            <Text style={Styles.tagText}>
                {tags}
            </Text>
            <Text style={Styles.pointText}>
                평점 : {pointAvg}
            </Text>
            {likeButton(isLiked)}
            {pointButton(isPointed)}
        </View>
    )
}

export default CoffeeScreen;

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
    tagText: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        color: "#488529",
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
    },
    modalContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: '80%',
        height: '30%',
        margin: 0,
        ...Platform.select({
            ios: {
                shadowColor: '#4d4d4d',
                shadowOffset: {
                    width: 8,
                    height: 8,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    modalText: {
        color: "#565551",
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
    },
    starImg: {
        width: 45,
        height: 45,
        margin: 2,
    },
})