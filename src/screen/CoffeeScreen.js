import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Coffee = ({ navigation }) => {
    const coffeeId = navigation.getParam('coffeeId', 'NO-ID');
    return (
        <View>
            <Text>
                {coffeeId}
            </Text>
        </View>
    )
}

export default Coffee;

export const Styles = StyleSheet.create({

})