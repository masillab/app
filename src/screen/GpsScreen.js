/* GPS 화면
expo install react-native-maps 해야됨 
 *  
**/
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';


export class GpsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                <MapView style={styles.mapStyle} />
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',  
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });


export default GpsScreen