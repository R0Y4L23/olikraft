import React,{useState} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');
const Login = ({navigation}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [passVisible,setPassVisible]=useState(false)
    const storeToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
        } catch (e) {
         console.log(e)
        }
      }
      const storeProfileData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('profileData', jsonValue)
        } catch (e) {
          console.log(e)
        }
      }
    const handleLogin=async ()=>{
        if(email&&password)
        {
           await axios.post('https://olikraft.shubhchintak.co/api/letscms/v1/auth/login', {
                username: email,
                password: password
              })
              .then(async function (response) {
                if(response.data.status)
                {
                    await storeToken(response.data.letscms_token)
                    await storeProfileData(response.data.user)
                    navigation.navigate("BNS")
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
    return (
       <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f9f9f9"}}>
           <Image style={{width:100,height:100,marginBottom:100}} source={require("../assets/logo.png")}/> 
               <Text style={{fontSize:25}}>Login</Text>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setEmail} value={email} placeholder="Email" />
                   <MaterialIcons style={{flex:1.5}} name="email" size={35} color="black" />
               </View>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry={!passVisible}/>
                   <Feather name={`${passVisible?"eye-off":"eye"}`} size={35} color="black" style={{flex:1.5}} onPress={()=>{setPassVisible(!passVisible)}}/>
               </View>
               <TouchableOpacity style={{backgroundColor:"#051729",height:40,width:300,display:"flex",justifyContent:"center",alignItems:"center",marginVertical:12}} onPress={handleLogin}>
                   <Text style={{color:"white",fontSize:16}}>Login</Text>
               </TouchableOpacity>
               <View style={{width:300}}>
                   <TouchableOpacity onPress={()=>{navigation.navigate("Forgotpass")}}>
                  <Text style={{textAlign:"right",textDecorationLine:"underline"}}>Forget Password?</Text>
                  </TouchableOpacity>
               </View>
               {/* <TouchableOpacity style={{backgroundColor:"white",height:50,width:300,display:"flex",flexDirection:"row",alignItems:"center",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5}}>
                   <Image style={{width:22,height:22,marginLeft:10}} source={require("../assets/google.png")}/> 
                   <Text style={{fontSize:15,color:"black",textAlign:"center",width:"90%"}}>Login with Google</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{backgroundColor:"white",height:50,width:300,display:"flex",flexDirection:"row",alignItems:"center",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5}}>
                   <Image style={{width:22,height:22,marginLeft:10}} source={require("../assets/facebook.png")}/> 
                   <Text style={{fontSize:15,color:"black",textAlign:"center",width:"90%"}}>Login with Facebook</Text>
               </TouchableOpacity> */}
               <Text style={{marginTop:120}}>If you dont have an account. <Text style={{textDecorationLine:"underline"}} onPress={()=>{navigation.navigate("Signup")}}>Signup</Text></Text>
       </View>
    )
}
export default Login