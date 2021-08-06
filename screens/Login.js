import React,{useState} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return (
       <View style={{flex:1,justifyContent:"space-evenly",alignItems:"center",backgroundColor:"#f9f9f9"}}>
           <Image style={{width:100,height:100}} source={require("../assets/logo.png")}/> 
               <Text style={{fontSize:25}}>Login</Text>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setEmail} value={email} placeholder="Email" />
                   <MaterialIcons style={{flex:1.5}} name="email" size={35} color="black" />
               </View>
               <View style={{display:"flex",flexDirection:"row",borderWidth:1,width:300,borderRadius:5}}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setPassword} value={password} placeholder="Password"/>
                   <Feather name="eye" size={35} color="black" style={{flex:1.5}}/>
               </View>
               <TouchableOpacity style={{backgroundColor:"#051729",height:40,width:300,display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <Text style={{color:"white",fontSize:16}}>Login</Text>
               </TouchableOpacity>
               <View style={{width:300}}>
                  <Text style={{textAlign:"right",textDecorationLine:"underline"}}>Forget Password?</Text>
               </View>
               <TouchableOpacity style={{backgroundColor:"white",height:50,width:300,display:"flex",flexDirection:"row",alignItems:"center",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5}}>
                   <Image style={{width:22,height:22,marginLeft:10}} source={require("../assets/google.png")}/> 
                   <Text style={{fontSize:15,color:"black",textAlign:"center",width:"90%"}}>Login with Google</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{backgroundColor:"white",height:50,width:300,display:"flex",flexDirection:"row",alignItems:"center",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5}}>
                   <Image style={{width:22,height:22,marginLeft:10}} source={require("../assets/facebook.png")}/> 
                   <Text style={{fontSize:15,color:"black",textAlign:"center",width:"90%"}}>Login with Facebook</Text>
               </TouchableOpacity>
               <Text>If you dont have an account. <Text style={{textDecorationLine:"underline"}}>Signup</Text></Text>
       </View>
    )
}
export default Login