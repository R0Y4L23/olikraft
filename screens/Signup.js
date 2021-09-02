import React,{useState} from 'react'
import {View,Text,TextInput,TouchableOpacity,ActivityIndicator} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');
const Signup = ({navigation}) => {
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [passVisible,setPassVisible]=useState(false)
    const [confirmPassVisible,setConfirmPassVisible]=useState(false)
    const [confirmPass,setConfirmPass]=useState("")
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
    const handleSignup=async ()=>{
        setError("")
        setLoading(true)
        if(name&&email&&password&&confirmPass&&password==confirmPass)
        {
            await axios.post('https://olikraft.com/api/letscms/v1/auth/register', {
                first_name : name.split(" ")[0],
                last_name : name.split(" ")[1],
                username : username,
                password : password,
                email : email
              })
              .then(async function (response) {
                console.log(response.data.errors)
                if(response.data.status)
                {
                    setLoading(false)
                    await storeToken(response.data.letscms_token)
                    await storeProfileData(response.data.user)
                   // navigation.navigate("Confirmation")
                   navigation.reset({
                    index: 0,
                    routes: [{name: 'Confirmation'}],
                  });
                }
                else
                {
                    setLoading(false)
                    setError(`${response.data.errors.username?response.data.errors.username:""}\n${response.data.errors.password?response.data.errors.password:""}`)
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else if(password!=confirmPass)
        {
            setLoading(false)
            setError("Passwords are not equal")
        }
        else{
            setLoading(false)
            setError("All fields must be filled")
        }
    }
    return (
       <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f9f9f9"}}>
               <Text style={{fontSize:25,marginBottom:50}}>Signup</Text>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,borderColor:"grey",marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setName} value={name} placeholder="Firstname + Lastname"/>
                   <FontAwesome name="user" size={35} color="black" style={{flex:1.5}}/>
               </View>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,borderColor:"grey",marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setUsername} value={username} placeholder="Username"/>
                   <FontAwesome name="user" size={35} color="black" style={{flex:1.5}}/>
               </View>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,borderColor:"grey",marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setEmail} value={email} placeholder="Email"/>
                   <MaterialIcons style={{flex:1.5}} name="email" size={35} color="black" />
               </View>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry={!passVisible}/>
                   <Feather name={`${passVisible?"eye-off":"eye"}`} size={35} color="black" style={{flex:1.5}} onPress={()=>{setPassVisible(!passVisible)}}/>
               </View>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5,marginVertical:12}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setConfirmPass} value={confirmPass} placeholder="Confirm Password" secureTextEntry={!confirmPassVisible}/>
                   <Feather name={`${confirmPassVisible?"eye-off":"eye"}`} size={35} color="black" style={{flex:1.5}} onPress={()=>{setConfirmPassVisible(!confirmPassVisible)}}/>
               </View>
               <Text>{error&&<Text style={{color:"red",marginVertical:8,textTransform:"capitalize",textAlign:"center"}}>{error}</Text>}</Text>
               <TouchableOpacity style={{backgroundColor:"#051729",height:40,width:300,display:"flex",justifyContent:"center",alignItems:"center",marginVertical:12}} onPress={handleSignup}>
                   {!loading&&<Text style={{color:"white",fontSize:16}}>Signup</Text>}
                   {loading&&<ActivityIndicator size="small" color="white"/>}
               </TouchableOpacity>
               {/* <TouchableOpacity style={{backgroundColor:"white",height:50,width:300,display:"flex",flexDirection:"row",alignItems:"center",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5}}>
                   <Image style={{width:22,height:22,marginLeft:10}} source={require("../assets/google.png")}/> 
                   <Text style={{fontSize:15,color:"black",textAlign:"center",width:"90%"}}>Signup with Google</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{backgroundColor:"white",height:50,width:300,display:"flex",flexDirection:"row",alignItems:"center",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5}}>
                   <Image style={{width:22,height:22,marginLeft:10}} source={require("../assets/facebook.png")}/> 
                   <Text style={{fontSize:15,color:"black",textAlign:"center",width:"90%"}}>Signup with Facebook</Text>
               </TouchableOpacity> */}
               <Text style={{marginTop:70}}>Already have an account? <Text style={{textDecorationLine:"underline"}} onPress={()=>{navigation.navigate("Login")}}>Login</Text></Text>
       </View>
    )
}
export default Signup