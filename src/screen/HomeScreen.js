import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from "../components/Home";


export class HomeScreen extends Component {
    render(){
        return (
           <View style={styles.container}>
                 
                    <View style={styles.header}>
                        <Image style={styles.icon} source={require('../images/gps.png')}/>
                        <Image style={styles.icon} source={require('../images/coffee.png')}/>
                    <View style={styles.headerRightWrap}>
                        <Image style={styles.icon} source={require('../images/user.png')}/>
                    </View> 
                    </View>
                    <ScrollView style={styles.feedContainer}>
                        <Home/>
                    </ScrollView>
                    {/*
                    <View style={styles.footer}>
                        <Image style={styles.icon} source={require('../images/home.png')}/>
                        <Image style={styles.icon} source={require('../images/rank.png')}/>
                        <Image style={styles.icon} source={require('../images/menu.png')}/>
                        <Image style={styles.icon} source={require('../images/like.png')}/>
                    </View>
                    */}
           </View>
        )
    }
}

export default HomeScreen

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:5
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        top:25,
        padding:23,
        borderBottomColor:Colors.grayl,
        borderBottomWidth:0.5
    },
    footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',   
        bottom:20,
        padding:17,
        borderTopColor:Colors.grayl,
        borderTopWidth:0.5
    },
    feedContainer:{
        display:'flex',
        flex:1
    },
    icon:{
        width:40,
        height:40
    },
    logo:{
        width:150,
        height: '100%'
    },
    headerRightWrap:{
        display:'flex',
        flexDirection:'row',
        
    }
})

