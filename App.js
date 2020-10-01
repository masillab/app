
import React from 'react';
/*import { StyleSheet, Text, View } from 'react-native'; */
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from "./src/screen/MainScreen";

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
  }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#BDAFA2',
      }
    }
  });
/*

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
export default createAppContainer(AppStackNavigator);