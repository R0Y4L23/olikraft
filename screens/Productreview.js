import React,{useEffect, useState} from 'react'
import {View,Text,Image, StyleSheet,Button, TouchableOpacity,ScrollView} from "react-native"
import { Ionicons,AntDesign,Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { Appbar, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from 'react-native-progress/Bar';

const axios = require('axios');
const RecentReviewsComponent=({name,stars,comment})=>{
   
    
    return (
        <View style={{flex:1,width:"100%",borderBottomWidth:0.5,marginVertical:0.5,borderColor:"grey",backgroundColor:"rgb(249,249,249)",backgroundColor:"white",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5,display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <View style={{margin:10}}>
            <Image source={require("../assets/customer.jpg")} style={{height:50,width:50,borderRadius:50,margin:10}}/>
            {/* {console.log(url)} */}
            </View>
            <View style={{flex:1,marginVertical:10,justifyContent:"space-around"}}> 
                <Text style={{fontSize:16,fontWeight:"800",margin:5}}>{name}</Text>
                
                <View style={{display:"flex",flexDirection:"row",margin:5}}>
                    {[...Array(stars)].map((item,index)=>{return  <FontAwesome style={{marginRight:2}} name="star" size={15} color="orange" key={index}/>})}
                    {[...Array(5-stars)].map((item,index)=>{return  <FontAwesome name="star-o" size={15} color="orange" key={index}/>})}
                </View>
                <Text style={{fontSize:14,color:"grey",margin:5}}>{comment}</Text>
            </View>
            
        </View>
    )
}
export default function Productreview({route,navigation}) {
    const [RRJSON, setRRJSON] = useState([])
    const [overallrating, setoverallrating] = useState("")
    const [ totalreview, settotalreview] = useState(0)
    const [rating1, setrating1] = useState(0)
    const [rating2, setrating2] = useState(0)
    const [rating3, setrating3] = useState(0)
    const [rating4, setrating4] = useState(0)
    const [rating5, setrating5] = useState(0)
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
        await axios.get("https://olikraft.shubhchintak.co/api/letscms/v1/product/" + route.params.id, {
                Headers: {
                    letscms_token: token
                }
            })
            .then(function (response) {
                setRRJSON(response.data.data.reviews)
                setoverallrating(response.data.data.average_rating)
                settotalreview(response.data.data.review_count)
                setrating1(response.data.data.rating_counts[1]/response.data.data.review_count)
                setrating2(response.data.data.rating_counts[2]/response.data.data.review_count)
                setrating3(response.data.data.rating_counts[3]/response.data.data.review_count)
                setrating4(response.data.data.rating_counts[4]/response.data.data.review_count)
                setrating5(response.data.data.rating_counts[5]/response.data.data.review_count)
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
                            <Appbar.Content title="Ratings and Reviews" titleStyle={styles.title}/>
                        </Appbar.Header>
                </View>
                
             
                    {totalreview && <ScrollView >
                        <View style={{flex:1,alignItems:"center",margin:5}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Overall Rating</Text>
                            <Text style={{fontSize:45,fontWeight:"bold"}}>{overallrating}</Text>
                            <View style={{display:"flex",flexDirection:"row",margin:5}}>
                                {[...Array(Number(overallrating))].map((item,index)=>{return  <FontAwesome style={{marginRight:2}} name="star" size={15} color="orange" key={index}/>})}
                                {[...Array(5-Number(overallrating))].map((item,index)=>{return  <FontAwesome name="star-o" size={15} color="orange" key={index}/>})}
                            </View>
                            <Text style={{fontSize:15,fontWeight:"bold",color:"grey"}}>Based on {totalreview} reviews</Text>
                        </View>
                          <Card style={{marginVertical:20,backgroundColor:"rgb(249,249,249)"}}>
                           <View style={{flexDirection:"row"}}>
                               <View style={{flex:1,margin:10,marginVertical:5}}>
                                    <Text style={{color:"grey"}}>Excellent</Text>
                                </View>
                                 <View style={{justifyContent:"center",marginRight:15}}>
                                    <ProgressBar progress={rating5} width={250} height={8} borderColor={"white"} borderRadius={50} borderWidth={1} color={"rgb(75,166,82)"} unfilledColor={"white"}/>
                                </View>
                            </View>
                           <View style={{flexDirection:"row"}}>
                                <View style={{flex:1,margin:10,marginVertical:5}}>
                                    <Text style={{color:"grey"}}>Good</Text>
                                </View>
                                <View style={{justifyContent:"center",marginRight:15}}>
                                    <ProgressBar progress={rating4} width={250} height={8} borderColor={"white"} borderWidth={1} borderRadius={50} color={"rgb(165,214,49)"} unfilledColor={"white"}/>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{flex:1,margin:10,marginVertical:5}}>
                                    <Text style={{color:"grey"}}>Average</Text>
                                </View>
                                <View style={{justifyContent:"center",marginRight:15}}>
                                    <ProgressBar progress={rating3} width={250} height={8} borderColor={"white"} borderWidth={1} borderRadius={50} color={"rgb(236,214,71)"} unfilledColor={"white"}/>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{flex:1,margin:10,marginVertical:5}}>
                                    <Text style={{color:"grey"}}>Below Average</Text>
                                </View>
                                <View style={{justifyContent:"center",marginRight:15}}>
                                    <ProgressBar progress={rating2} width={250} height={8} borderColor={"white"} borderWidth={1} borderRadius={50} color={"rgb(249,165,41)"} unfilledColor={"white"}/>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{flex:1,margin:10,marginVertical:5}}>
                                    <Text style={{color:"grey"}}>Poor</Text>
                                </View>
                                <View style={{justifyContent:"center",marginRight:15}}>
                                    <ProgressBar progress={rating1} width={250} height={8} borderColor={"white"} borderWidth={1} borderRadius={50} color={"rgb(255,96,67)"} unfilledColor={"white"}/>
                                </View>
                            </View>
                        </Card>
                         
                        {RRJSON.map((item,index)=>{return <RecentReviewsComponent name={item.author} stars={Number(item.rating)} comment={item.content}  key={index} />})}
                    </ScrollView>
                    }
                    <View>
                    <View style={styles.button}> 
                        
                        <TouchableOpacity style={styles.send} onPress={()=>{navigation.navigate("Review",{id:route.params.id})}}>
                            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Write a Review</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
        </View>
    )
}
const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
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
    button:{
        backgroundColor:"white",
        elevation:5,
        marginTop:10,
        borderColor:"grey",
        flexDirection:"row",
        padding:15
    },
   
    send:{
        backgroundColor:"rgb(5,23,41)",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})