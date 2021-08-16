import React,{useEffect, useState} from 'react'
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
const axios = require('axios');
export default function Contacts({navigation}) {
    const [name, setName] = useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    function fetchvarchildren (id){
            
        // axios.get("https://olikraft.shubhchintak.co/api/wc/v3/products/" + id, {
        //     auth: {
        //         username: 'ck_e296377c8e66081c9321b68f176b42812ca4c40a',
        //         password: 'cs_d3c061b568c0318c269f0b4c3ef6aa8a855e520e'
        //       }
        //   })
        //   .then(function (response) {
                
        //        setAttributes(response.data.attributes)
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   })

        axios.get("https://olikraft.shubhchintak.co/api/wc/v3/products/" + id + "/variations", {
            auth: {
                username: 'ck_e296377c8e66081c9321b68f176b42812ca4c40a',
                password: 'cs_d3c061b568c0318c269f0b4c3ef6aa8a855e520e'
              }
          })
          .then(function (response) {

                let fa = (response.data.map(({id,attributes,...rest}) => ({id,attributes}))).map(function(row){  // For each row in data.
                    // Set the static data in the result row
                    var reference = { id: row.id};
                    
                    // Iterate over `row.references`, and add the current reference to the result.
                    row.attributes.reduce(function(previous, current){
                        previous[ current.name] = current.option;
                        return previous;
                    }, reference);
                    
                    return reference;
                    });
                
                console.log(fa)
          })
          .catch(function (error) {
            console.log(error);
          })

        
}
useEffect(()=>{
    // fetchrootitem()
    // fetchvaritem()
    fetchvarchildren(35)
    
    // filterattributes()
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