import React from 'react'
import {View, Text, Image,StyleSheet, ScrollView} from 'react-native'


const Like = () => {
    return(
        
        <View style={styles.container}> 
            
            <View style={styles.viewIconsWrap}>
                <Image style={styles.likeIcons} source={require('../images/like-sub/like-coffee.png')} /> 
                <Image style={styles.likeIcons} source={require('../images/like-sub/like-cafe.png')} />
            </View>
            
            <ScrollView>
                <View style={styles.imagesWrap}>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/1.jpg')}/>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/2.jpg')}/>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/3.jpg')}/>
                </View>
                <View style={styles.imagesWrap}>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/4.jpg')}/>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/5.jpg')}/>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/6.jpg')}/>
                </View>
                <View style={styles.imagesWrap}>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/1.jpg')}/>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/2.jpg')}/>
                    <Image style={styles.gallery} source={require('../images/like-sub/coffeeimages/3.jpg')}/>
                </View>
                 
            </ScrollView>
            
            
            
            
        </View>
                
               
           
       
    )
}

export default Like

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1
         

    },
    viewIconsWrap:{
        display:'flex',
        
        flexDirection:'row',
        justifyContent:'space-evenly',
        top:65
        
    },
    likeIcons:{
        width:50,
        height:50

    },
    imagesWrap:{
       
       flexDirection:'row',
       
    },
    gallery:{
        display:'flex',
        flex:1,
        height:250,
        top:100,
        margin:2
    }
   
})

/**위에 없애려면 위 코드 같이 스크롤에 넣기 */