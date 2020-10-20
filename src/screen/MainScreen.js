import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from 'react-native-vector-icons';

import AllCafeScreen from "./AllCafeScreen";
import HomeScreen from "./HomeScreen";
import RankScreen from "./RankScreen";
import LikeScreen from "./LikeScreen";
import CafeMenuScreen from "./CafeMenuScreen";
import CoffeeScreen from "./CoffeeScreen";
import { createAppContainer, NavigationEvents } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
    {
        홈: {
            screen: HomeScreen,
        },
        전체메뉴: {
            screen: AllCafeScreen,
        },
        나의메뉴: {
            screen: LikeScreen,
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '홈') {
                    iconName = 'ios-home';
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
    }
);

const CoffeeStack = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigator
        },
        CafeMenu:{
            screen: CafeMenuScreen
        },
        Coffee: {
            screen: CoffeeScreen
        }
    },
    {
        initialRouteName: 'Tabs',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#BDAFA2',
            }
        }
    }
)

const AppTabContainer = createAppContainer(CoffeeStack);

export default class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: () => <Text style={{ fontSize: 24 }}>마실랩</Text>,
        //headerLeft: () => <Ionicons name='md-navigate' size={25} color="#6D3E31" style={{ paddingRight:20 }}/>,
        headerRight: () => <Ionicons.Button
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