 
import React from 'react';
/*import { StyleSheet, Text, View } from 'react-native'; */
import {SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Ionicons} from 'react-native-vector-icons';

import Splashcreen from "./src/screen/SplashScreen";
import HomeScreen from "./src/screen/HomeScreen";
import RankScreen from "./src/screen/RankScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import LikeScreen from "./src/screen/LikeScreen";

 const TabNavigator = createBottomTabNavigator({
   Home: {
    screen: HomeScreen,
   },
   Rank: {
    screen: RankScreen,
   },
   Menu: {
    screen: Splashcreen,
   },
   Like: {
    screen: LikeScreen
   }
 },
 {
   defaultNavigationOptions: ({navigation}) => ({
     tabBarIcon: ({horizontal, tintColor}) => {
       const {routeName} = navigation.state;
       let iconName;
       if(routeName === 'Home'){
        iconName = 'ios-home';
       } else if(routeName === 'Rank'){
        iconName = 'ios-medal';
       } else if(routeName === 'Menu'){
        iconName = 'ios-cafe';
       } else if(routeName === 'Like'){
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
   })
 })
/*
const App: () => React$Node = () => {
  return (
  <View style={styles.container}>
    <RankScreen/>
  </View>
    );
};
*/

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

export default createAppContainer(TabNavigator);