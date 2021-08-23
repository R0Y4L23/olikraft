import React,{useEffect, useState} from 'react'
import {View,Text,TextInput,TouchableOpacity, StyleSheet,Button} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

const axios = require('axios');
export default function Contacts({navigation}) {
    const [name, setName] = useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [success,setSuccess]=useState("")
    
const fetchContactUs=async ()=>{
    await axios.get("https://olikraft.shubhchintak.co/api/jet-cct/contact_us")
          .then(function (response){
            // console.log(response.data[0])
            setName(response.data[0].name)
            setEmail(response.data[0].email)
            setMessage(response.data[0].message)
          })
          .catch(function (error) {
            console.log(error);
          })
}
useEffect(()=>{
   
    fetchContactUs()
 
},[])
    return (
           <View style={styles.container}>
               
                <Appbar.Header style = {styles.item}>
                        <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}}/>
                        <Appbar.Content title="Contact Us" titleStyle={styles.title}/>
                    </Appbar.Header>
                 <View style={styles.content}>
                    <Text>FullName</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setName} value={name} placeholder="Full Name"  />
                    </View>
                   <Text>Email</Text>
                    <View style={styles.form}>    
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setEmail} value={email} placeholder="Email" />
                    </View>
                    <Text>Message</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: "40%",padding: 10,backgroundColor:"white",textAlignVertical:"top"}} onChangeText={setMessage} value={message} placeholder="Enter here..." />
                    </View>
                    <Text style={{textAlign:"center",color:"green"}}>{success}</Text>
                </View> 
               
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel} onPress={()=>{navigation.goBack()}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send} onPress={()=>{setSuccess("Message Sent Successfully");alert("Message Sent Successfully");navigation.navigate("BNS",{screen:"Home"})}}>
                            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
        height:"100%",
        flex:1
    },
    item: {
       backgroundColor : 'rgb(5,23,41)',height:35,paddingBottom:17
    },
    icon: {
        marginLeft: 20
    },

    title:{
        fontSize:17
    },
    content:{
        
       padding:20
    },
    form:{
        backgroundColor:"white",
        borderRadius:8,
        borderWidth:0.5,
        // padding:10,
        marginVertical:10,
        borderColor:"grey",
        
    },
    buttoncontainer:{
        backgroundColor:"rgb(249,249,249)",
        flex:1,
        justifyContent:"flex-end",
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