import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CafeCard from '../components/CafeCard';

export default class AllCafeScreen extends React.Component {

    render(){
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titleText}>
                    카페 메뉴보기
                </Text>
                <CafeCard 
                    title="스타벅스" 
                    backgroundColor="#44D362" 
                    onPress={() => {
                        this.props.navigation.navigate("CafeMenu", {
                            cafeName: "starbucks",
                        });
                    }} 
                />
                <CafeCard 
                    title="카페베네" 
                    backgroundColor="#875C36" 
                    onPress={() => {
                        this.props.navigation.navigate("CafeMenu", {
                            cafeName: "cafebene",
                        });
                    }} 
                />
            </ScrollView>
        )
    };

    cafeMenuOpen({ CafeName }){
        this.props.navigation.navigate('CafeMenu', {
            cafeName: CafeName,
        });
    }

}

export const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto",
        margin: 5,
    }
})