
//import React from 'react';
/*import { StyleSheet, Text, View } from 'react-native'; */
//import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from "./src/screen/MainScreen";
import LoginScreen from "./src/screen/LoginScreen";
import AuthLoadingScreen from "./src/screen/AuthLoadingScreen";
import SignUp from "./src/screen/SignUpScreen";
import GpsScreen from "./src/screen/GpsScreen";

const AppStackNavigator = createStackNavigator(
    {
        Main: {
            screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
        },
        GPS: {
            screen: GpsScreen
        }
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#BDAFA2',
            }
        }
    }
);

const AuthStack = createStackNavigator(
    { 
        SignIn: { screen: LoginScreen },
        SignUp: { screen: SignUp }
    },
    {
        initialRouteName: 'SignIn'
    }
);


export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: AppStackNavigator,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);