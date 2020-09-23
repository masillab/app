 
import React from 'react';
/*import { StyleSheet, Text, View } from 'react-native'; */
import {SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';


import Splashcreen from "./src/screen/SplashScreen";
import HomeScreen from "./src/screen/HomeScreen";
import RankScreen from "./src/screen/RankScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import LikeScreen from "./src/screen/LikeScreen";

 

const App: () => React$Node = () => {
  return (
  <View style={styles.container}>
    <LikeScreen/>
  </View>
    );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  }
});


export default App;