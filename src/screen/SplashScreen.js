import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export class SplashScreen extends Component {
    render(){
        return (
            <View style={styles.container}> 
                <View style={styles.iconcontainer}>
                    <Image style={styles.icon}source={require('../images/coffee.png')}/>
                </View>
                <View style={styles.logocontainer}>
                    <Text style={styles.from}>from</Text>
                    <View style={styles.logotextwrap}>
                    <Image style={styles.logo} source={require('../images/coffee.png')}/>  
                    </View>
                </View>
            </View>
        )
    }
}

export default SplashScreen

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1     
    },
    iconcontainer:{
        display:'flex',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logocontainer:{
        display:'flex',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:30
    },
    logotextwrap:{
        width:'10%',
        height:30
    },
    icon:{
        width:100,
        height:100
    },
    logo:{
        flex:1,
        width:undefined
    },
    from:{
        color:'gray',
        marginBottom:15
    }
})