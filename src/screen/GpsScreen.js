/* GPS 화면
 *  
**/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export class GpsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    test
                </Text>
            </View>
        )
    }
}

export default GpsScreen

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 5
    },
})

