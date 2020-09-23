import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Home= () => {
    return(
        <View style={styles.container}>
            <View>
                <Text>HEADER</Text>
            </View>
            <View>
                <Text>IMAGE</Text>
            </View>
            <View>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

export default Home

export const styles=StyleSheet.create({
    container:{
        display:"flex",
    }
})