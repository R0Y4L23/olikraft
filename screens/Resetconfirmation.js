import React from 'react';
import { View,Text,Image,TouchableOpacity , StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
export default function Resetconfirmation () {
    return (

        <View style={{alignItems:"center",backgroundColor:"rgb(249,249,249)",height:"100%"}}>
            <View style={{width:"100%",margin:15}}>
                <Appbar.Header style = {styles.item}>
                    <Ionicons style ={styles.icon} name="arrow-back" size={24} color="black" />                    
                </Appbar.Header>
            </View>

            <View style={{alignItems:"center",marginTop:"50%"}}>
                <Image style={{width:75,height:75}} source={require("../assets/check.png")}/> 
                <Text style={{fontSize:20,marginVertical:'5%'}}>Awesome!</Text>
                <Text style={{fontSize:14,color:"grey"}}>Your password changed successfully.</Text>            
            </View>

            <View style={{flex:1,justifyContent:"flex-end",marginBottom:"10%"}}>
                <TouchableOpacity style={{backgroundColor:'rgb(5,23,41)',borderRadius:10,height:50,width:380,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"white",fontSize:16}}>Back to home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    item: {
        backgroundColor : "rgb(249,249,249)",
     },
     icon: {
         marginLeft: 20
     },
 
     title:{
         fontSize:17
     },
})