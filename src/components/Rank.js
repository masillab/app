import React from 'react'
import {View, Text, Image,StyleSheet} from 'react-native'

const Rank = () => {
    return(
        <View >
            <View style={styles.container}>
                <Image style={styles.rank1} source={require('../images/sub-rank/sex.png')} /> 
                <Text>성별</Text>
                <Image style={styles.rank1} source={require('../images/sub-rank/age.png')} />
                <Text>   연령별</Text>
                <Image style={styles.rank1} source={require('../images/sub-rank/ingredient.png')} />
                <Text>   성분별</Text>
                <Image style={styles.rank1} source={require('../images/sub-rank/cafe.png')} />
                <Text> 카페별</Text>
               
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

export default Rank

export const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-between',
        justifyContent: 'space-around',
      
        padding:45,
        top:12
      
    },
    containerText:{
        display:"flex",
        justifyContent: 'space-between',
        padding:60,
        top:-65
    },
    rank1:{
       
        width:45,
        height:45,
        borderRadius:10,
        
    }
})