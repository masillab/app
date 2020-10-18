import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CafeMenu = ({ navigation }) => {
    const cafeName = navigation.getParam('cafeName', 'NO-ID');
    return (
        <View>
            <Text>
                {cafeName}
            </Text>
        </View>
    )
}

export default CafeMenu;

export const Styles = StyleSheet.create({

})