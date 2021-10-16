import React,{useState} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity,ActivityIndicator,ScrollView} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');
const Login = ({navigation}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [passVisible,setPassVisible]=useState(false)
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
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
        setError("")
        setLoading(true)
        if(email&&password)
        {
           await axios.post('https://olikraft.com/api/letscms/v1/auth/login', {
                username: email,
                password: password
              })
              .then(async function (response) {
                if(response.data.status)
                {
                   // console.log(response.data)
                    setLoading(false)
                    await storeToken(response.data.letscms_token)
                    await storeProfileData(response.data.user)
                    //navigation.navigate("BNS",{screen:"Home"})
                    navigation.reset({
                      index: 0,
                      routes: [{name: 'BNS'}],
                    });
                }
                else{
                  setLoading(false)
                  setError(response.data.message)
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else{
          setError("All fields must be filled")
          setLoading(false)
        }
    }
    return (
      <View style={{flex:1}}>
       <ScrollView>
       <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f9f9f9",paddingTop:20}}>
           <Image style={{width:100,height:100,marginBottom:100,backgroundColor:"#f9f9f9"}} source={require("../assets/icon.png")}/> 
               <Text style={{fontSize:25}}>Login</Text>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setEmail} value={email} placeholder="Username" />
                   <MaterialIcons style={{flex:1.5}} name="email" size={35} color="black" />
               </View>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry={!passVisible}/>
                   <Feather name={`${passVisible?"eye-off":"eye"}`} size={35} color="black" style={{flex:1.5}} onPress={()=>{setPassVisible(!passVisible)}}/>
               </View>
               <Text>{error&&<Text style={{color:"red",fontSize:18,marginVertical:8,textTransform:"capitalize"}}>{error}</Text>}</Text>
               <TouchableOpacity style={{backgroundColor:"#051729",height:40,width:300,display:"flex",justifyContent:"center",alignItems:"center",marginVertical:12}} onPress={handleLogin}>
                   {!loading&&<Text style={{color:"white",fontSize:16}}>Login</Text>}
                   {loading&&<ActivityIndicator size="small" color="white" />}
               </TouchableOpacity>
               <View style={{width:300}}>
                   <TouchableOpacity onPress={()=>{navigation.navigate("Forgotpass")}}>
                  <Text style={{textAlign:"right",textDecorationLine:"underline"}}>Forget Password?</Text>
                  </TouchableOpacity>
               </View>
               <Text style={{marginTop:100,marginBottom:20}}>If you dont have an account. <Text style={{textDecorationLine:"underline"}} onPress={()=>{navigation.navigate("Signup")}}>Signup</Text></Text>
       </View>
       </ScrollView>
       </View>
    )
}
export default Login