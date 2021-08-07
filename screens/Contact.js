import React,{useState} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, StyleSheet} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
export default function Contact() {
    const [name, setName] = useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    return (
       
           <View style={styles.container}>
                <Appbar.Header style = {styles.item}>
                        <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
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
                        <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} multiline="true" numberOfLines="10" onChangeText={setMessage} value={message} placeholder="Enter here..." />
                    </View>
                    
                </View>
                <View style={styles.buttoncontainer}>
                        <View style={styles.button}> 
                                <TouchableOpacity style={styles.cancel}>
                                    <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.send}>
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
        // backgroundColor:"red",
        height:"100%"
    },
    item: {
       backgroundColor : 'rgb(5,23,41)'
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
        marginBottom:18
       
    },

    button:{
        backgroundColor:"white",
        borderTopWidth:1,
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