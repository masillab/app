import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
/* import { Colors } from "../config/Colors"; */

export class ProfileScreen extends Component {
    render(){
        return (
            <View style={styles.container}> 
                <View style = {styles.header}>
                    <View style={styles.leftHeaderWrap}>
                        <Image style={styles.leftarrow} source={require('../images/profile-sub/left-arrow.png')} />
                      
                        <View>
                            <Image style={styles.leftarrow} source={require('../images/profile-sub/checked.png')} />
                        </View> 
                    </View>
                </View>

                

                    <View style={styles.ProfileScreenWrap}>
                        <View style={styles.ImageSection}>
                            <Image style={styles.userimage} source={require('../images/profile-sub/user-profile.png')} /> 
                            <Text style={styles.userName}>user name</Text>
                        </View>
                        

                    </View>
                    <View style={styles.userinfo}>
                            <View style={styles.infoAlign}>
                                 
                            
                           
                    
                    <View style={styles.buttonWrap}>
                             
                            <TouchableOpacity style={styles.tastebutton1}><Text style={styles.buttonText}>성별을 선택해 주세요.</Text></TouchableOpacity>
                            <Text> </Text>
                            <TouchableOpacity style={styles.tastebutton1}><Text style={styles.buttonText}>취향을 선택해 주세요1</Text></TouchableOpacity>
                            <Text> </Text>
                            <TouchableOpacity style={styles.tastebutton1}><Text style={styles.buttonText}>취향을 선택해 주세요2</Text></TouchableOpacity>
                            <Text> </Text>
                            <TouchableOpacity style={styles.tastebutton1}><Text style={styles.buttonText}>알레르기 정보를 선택해주세요.</Text></TouchableOpacity>
                    </View>
                        </View>

                    </View>
                
            </View>
        )
    }
}

export default ProfileScreen

export const styles=StyleSheet.create({
    container:{
        display:"flex",
        flex:1
    },
    header:{
        display:'flex',
        top:10,
        padding:15,
        borderBottomColor:Colors.grayl,
        borderBottomWidth:0.5,

    },
    
    leftarrow:{  
        width:50,
        height:50
    }
    ,
    leftHeaderWrap:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',   
        paddingHorizontal:10,
        paddingTop:10,
        alignItems:'center',
        textAlign:'center'
        
    },
     
    ProfileScreenWrap:{
        display:'flex',
        flexDirection:'row',
        paddingTop:70,
        alignItems:'center'
    },
    ImageSection:{
        display:'flex',
        alignItems:'center',
        flex:1,
         
    },
    userimage:{
        position:'absolute',
        width:135,
        height:135,
        borderRadius:70,
        margin:13,
       

    },
    userinfo:{
        display:'flex',
        
        flex:1,
        top:200,
        padding:40,
        
    },
    infoAlign:{
        display:'flex',
        flex:1,
        
    },
    
  
    buttonWrap:{
        display:'flex',
        alignItems:'center',
        top: 40
    },
    tastebutton1:{
        borderRadius:5,
        borderWidth:1,
        borderColor: Colors.grayl,
        width:'93%',
 
    },
    buttonText:{
        fontSize:20,
        fontWeight:'700',
        textAlign:'center',
        
    }
    ,
    userName:{
        fontSize:19,
        fontWeight:'700',
        textAlign:'center',
        top:180
    }
   

})

 
/* 마진넣기 */

/* <ScrollView> 넣기 */