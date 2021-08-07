import React,{useState} from 'react';
import { View,Text,Image,TouchableOpacity , TextInput,StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
export default function Forgotpass () {
    const [email,setEmail]=useState("")
    return (

        <View style={{alignItems:"center",backgroundColor:"rgb(249,249,249)",height:"100%"}}>
            <View style={{width:"100%",margin:15}}>
                <Appbar.Header style = {styles.item}>
                    <Ionicons style ={styles.icon} name="arrow-back" size={24} color="black" />                    
                </Appbar.Header>
            </View>

            <View style={{alignItems:"center",marginTop:"30%"}}>
                <Image style={{width:125,height:125,marginBottom:"5%"}} source={require("../assets/Forgotpass.png")}/> 
                <Text style={{fontSize:14,color:"black"}}>Please enter your registered email address </Text>            
                <Text style={{fontSize:14,color:"black"}}>We will send the password reset link </Text>            
            </View>
            <TextInput  style={{ height: 50,marginTop:"10%",borderColor:"grey",borderWidth:0.5,borderRadius:10,backgroundColor:"white",width:"90%",paddingLeft:20}} placeholder="Enter here..." onChangeText={setEmail} value={email}/>
           
            <View style={styles.buttoncontainer}>
                <View style={styles.button}> 
                    <TouchableOpacity style={styles.cancel}>
                        <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.send}>
                        <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Submit</Text>
                    </TouchableOpacity>
                </View>
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
     buttoncontainer:{
        backgroundColor:"rgb(249,249,249)",
        flex:1,
        justifyContent:"flex-end",
        marginBottom:18,
        width:"100%"
       
    },

    button:{
        backgroundColor:"white",
        borderTopWidth:0.5,
        borderColor:"grey",
        flexDirection:"row",
        padding:15
    },
    cancel:{
        backgroundColor:"white",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    send:{
        backgroundColor:"rgb(33,184,97)",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})