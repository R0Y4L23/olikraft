import React from 'react'
import {View,Text,Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from "react-native"
import { RadioButton } from 'react-native-paper';

import { Ionicons, Feather,EvilIcons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default function Cancelconfirmation() {
    const [value, setValue] = React.useState();
    const props =[
        {title:"Its too costly"},
        {title:"The product does not fulfill my needs"},
        {title:"I don't want"},
        {title:"Some other reason"},
    ]
    return (
        <View style={{backgroundColor:"rgb(249,249,249)",height:"100%"}}>
           <Appbar.Header style = {styles.item} >
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="black" />
            </Appbar.Header>
            <View style={{alignItems:"center",justifyContent:"center",marginTop:"15%"}}>
                <Image source={require(`../assets/Cancel.png`)} style={{height:125,width:125,backgroundColor:"black"}}/>
                <Text style={{color:"grey"}}> Order No#: OKT0002</Text>
                <Text style={{fontSize:20,fontWeight:"bold"}}> Sad to see you go!</Text>
            </View>
            <View style={{alignItems:"flex-start",justifyContent:"center",marginTop:"15%"}}>
                <Text>What is the reason to cancel this product</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    {props.map((prop,idx)=>{
                        return(
                            <View style={{flexDirection:"row"}} key={idx}>
                                <RadioButton value={idx} color="rgb(5,23,41)" />
                                <Text>{prop.title}</Text>
                            </View>
                        )
                    })}
                </RadioButton.Group>
            </View>
            <View style={styles.buttoncontainer}>
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send}>
                            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Cancel Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View> 
    )
}


const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
      
        height:"100%"
    },
    item: {
       backgroundColor : 'white'
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
        // marginBottom:18
       
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
        backgroundColor:"rgb(255,86,86)",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})