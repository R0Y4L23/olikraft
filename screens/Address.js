import React,{useState} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, StyleSheet,Picker} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
export default function Address({navigation}) {
    const [address, setAddress] = useState("")
    const [street,setStreet]=useState("")
    const [building,setBuilding]=useState("")
    const [city, setCity] = useState("")
    const [country,setCountry]=useState("")
    const [zip, setZip] = useState("")
    return (
           <View style={styles.container}>
                <Appbar.Header style = {styles.item}>
                        <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}} />
                        <Appbar.Content title="Add Address" titleStyle={styles.title}/>
                    </Appbar.Header>
                 <View style={styles.content}>
                    <Text>Address Title</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setAddress} value={address} placeholder="Enter here..."  />
                    </View>
                   <Text>No. and street name</Text>
                    <View style={styles.form}>    
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setStreet} value={street} placeholder="Enter here..." />
                    </View>
                    <Text>Building(if any)</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white",textAlignVertical:"top"}} onChangeText={setBuilding} value={building} placeholder="Enter here..." />
                    </View>
                    <Text>City</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setCity} value={city} placeholder="Enter here..."  />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{flex:1}}>Country</Text>
                        <Text style={{flex:1}}>Postal/Zip code</Text>
                    </View>
                    <View style={styles.country}>    
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white",flex:1,borderColor:"grey",}} onChangeText={setCountry} value={country}/>
                        <Entypo name="triangle-down" size={24} color="black" />
                        <TextInput style={{ height: 40,padding: 10,marginLeft:5,backgroundColor:"white",flex:1}} onChangeText={setZip} value={zip} placeholder="Enter here..." />
                    </View> 
                </View> 
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send}>
                            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Save</Text>
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
    country:{
        flexDirection:"row",
        justifyContent:"space-between",
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
        position:"absolute",
        bottom:0,
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