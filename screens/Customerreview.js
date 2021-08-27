import React,{useEffect, useState} from 'react'
import {View,Text,Image, StyleSheet,Button, ScrollView} from "react-native"
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');
const RecentReviewsComponent=({name,stars,comment,url})=>{
    let Image_Http_URL ={ uri: url};
    
    return (
        <View style={{width:"100%",height:140,borderBottomWidth:0.5,marginVertical:0.5,borderColor:"grey",backgroundColor:"rgb(249,249,249)",backgroundColor:"white",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5,display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <View >
            <Image source={Image_Http_URL} style={{height:75,width:75,borderRadius:50,margin:10}}/>
            {/* {console.log(url)} */}
            </View>
            <View style={{flex:1,marginVertical:10}}> 
                <Text style={{fontSize:20,fontWeight:"800"}}>{name}</Text>
                <View style={{display:"flex",flexDirection:"row"}}>
                    {[...Array(stars)].map((item,index)=>{return  <AntDesign name="star" size={24} color="orange" key={index}/>})}
                    {[...Array(5-stars)].map((item,index)=>{return  <AntDesign name="staro" size={24} color="orange" key={index}/>})}
                </View>
                <Text style={{fontSize:14,color:"grey"}}>{comment}</Text>
            </View>
            
        </View>
    )
}
export default function Customerreview({navigation}) {
    const [RRJSON, setRRJSON] = useState([])
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) 
          {
           return value
          }
        } catch(e) {
          console.log(e)
        }
      }

    
   
    const fetchRatings = async () => {
        let token = await getData()
        await axios.get(`https://olikraft.shubhchintak.co/api/jet-cct/dashboard_reviews`, {
                Headers: {
                    letscms_token: token
                }
            })
            .then(function (response) {
                setRRJSON(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
useEffect(()=>{
   
    fetchRatings()
 
},[])
    return (
           <View style={styles.container}>
               <View>
                    <Appbar.Header style = {styles.item}>
                            <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}}/>
                            <Appbar.Content title="Our Customer Says" titleStyle={styles.title}/>
                        </Appbar.Header>
                </View>
                <ScrollView>
                
                {RRJSON.map((item,index)=>{return <RecentReviewsComponent name={item.name} stars={Number(item.rating_stars)} comment={item.review} key={index} url={item.customer_pic}/>})}
               
            
                </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
        height:"100%",
        
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