import React,{useState} from 'react';
import { View,Text,Image,TouchableOpacity , TextInput,StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const axios = require('axios');

export default function Forgotpass ({navigation}) {
    
    const [email,setEmail]=useState("")
    const [username,setUsername]=useState("")
    const handleForgotpass=async ()=>{
        if(email&&username)
        {
           await axios.post('https://olikraft.shubhchintak.co/api/letscms/v1/auth/forgot-password', {
                username: username,
                email: email
              })
              .then(async function (response) {
                if(response.data.status)
                {
                    alert(response.data.message)
                    navigation.navigate("Login")
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
    return (

        <View style={{alignItems:"center",backgroundColor:"rgb(249,249,249)",flex:1,justifyContent:"space-evenly"}}>
            <View style={{width:"100%",flex:0.8,justifyContent:"flex-start"}}>
                <Appbar.Header style = {styles.item}>
                    <Ionicons style ={styles.icon} name="arrow-back" size={24} color="black"  onPress={()=>{navigation.goBack()}}/>                    
                </Appbar.Header>
            </View>

            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Image style={{width:125,height:125,marginBottom:"5%"}} source={require("../assets/Forgotpass.png")}/> 
                
                <Text style={{fontSize:14,color:"black",textAlign:"center"}}>Please enter your registered Username and email address </Text>            
                <Text style={{fontSize:14,color:"black"}}>We will send the password reset link to your email</Text>            
               
            </View>
            <View style={{width:"100%",flex:1,justifyContent:"space-evenly",alignItems:"center",marginTop:10}}>
            <TextInput  style={{ height: 50,borderColor:"grey",borderWidth:0.5,borderRadius:10,backgroundColor:"white",width:"90%",paddingLeft:20}} placeholder="Enter Username" onChangeText={setUsername} value={username}/>
            <TextInput  style={{ height: 50,borderColor:"grey",borderWidth:0.5,borderRadius:10,backgroundColor:"white",width:"90%",paddingLeft:20}} placeholder="Enter Email" onChangeText={setEmail} value={email}/>
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}> 
                    <TouchableOpacity style={styles.cancel}>
                        <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.send} onPress={handleForgotpass}>
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
        flex:0.5,
        justifyContent:"flex-end",
        width:"100%"
       
    },

    button:{
        backgroundColor:"white",
        elevation:5,
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