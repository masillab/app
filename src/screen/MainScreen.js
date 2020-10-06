import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, ScrollView, Button, Alert } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from 'react-native-vector-icons';
import gpsImg from '../images/gps.png';

import Splashcreen from "./SplashScreen";
import HomeScreen from "./HomeScreen";
import RankScreen from "./RankScreen";
import ProfileScreen from "./ProfileScreen";
import LikeScreen from "./LikeScreen";
import { createAppContainer, NavigationEvents } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
    {
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
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '홈') {
                    iconName = 'ios-home';
                } else if (routeName === '랭킹') {
                    iconName = 'ios-medal';
                } else if (routeName === '전체메뉴') {
                    iconName = 'ios-cafe';
                } else if (routeName === '나의메뉴') {
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

const AppTabContainer = createAppContainer(TabNavigator);

export default class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: () => <Text style={{ fontSize: 24 }}>마실랩</Text>,
        //headerLeft: () => <Ionicons name='md-navigate' size={25} color="#6D3E31" style={{ paddingRight:20 }}/>,
        headerRight: () =>  <Ionicons.Button 
                                name='md-navigate' 
                                size={30} 
                                color="#6D3E31"
                                backgroundColor="#BDAFA2" 
                                onPress={() => navigation.navigate('GPS')}
                                style={{ paddingRight: 20 }} 
                            />,
    });
    
    render() {
        return <AppTabContainer />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});