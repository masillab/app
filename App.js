 
import React from 'react';
/*import { StyleSheet, Text, View } from 'react-native'; */
import {SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from 'react-native-vector-icons';

import Splashcreen from "./src/screen/SplashScreen";
import HomeScreen from "./src/screen/HomeScreen";
import RankScreen from "./src/screen/RankScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import LikeScreen from "./src/screen/LikeScreen";


 const TabNavigator = createBottomTabNavigator({
   홈: {
    screen: HomeScreen,
   },
   랭킹: {
    screen: RankScreen,
   },
   전체메뉴: {
    screen: Splashcreen,
   },
   나의메뉴: {
    screen: LikeScreen
   }
 },
 {
   defaultNavigationOptions: ({navigation}) => ({
     title: "마실랩",
     tabBarIcon: ({horizontal, tintColor}) => {
       const {routeName} = navigation.state;
       let iconName;
       if(routeName === '홈'){
        iconName = 'ios-home';
       } else if(routeName === '랭킹'){
        iconName = 'ios-medal';
       } else if(routeName === '전체메뉴'){
        iconName = 'ios-cafe';
       } else if(routeName === '나의메뉴'){
        iconName = 'ios-thumbs-up';
       }
       return (
         <Ionicons
          name={iconName}
          size={horizontal ? 20 : 25}
          color={tintColor}
        />
       );
     }
   }),
  tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#6D3E31',
        style: {
          backgroundColor: '#BDAFA2',
        },
      },
 });

/*
const App: () => React$Node = () => {
  return (
  <View style={styles.container}>
    <RankScreen/>
  </View>
    );
};

const styles = StyleSheet.create({
  logo:{
      width:150,
      height: '100%'
  },
  container: {
    display: 'flex',
    flex: 1,
  }
});

*/
export default createAppContainer(TabNavigator);