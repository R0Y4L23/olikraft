import React,{useState,useEffect} from 'react'
import {View,Text,Image, StyleSheet, TouchableOpacity,ScrollView} from "react-native"
import { Card, Paragraph } from 'react-native-paper';
import { Ionicons, Feather} from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function OrderConfirmation({route,navigation}) {
    const [cartitems,setCartitems]=useState([])
    const [carttotals,setCarttotals]=useState([])

    function fetchdetails(){
        setCartitems(route.params.cartitems)
        setCarttotals(route.params.carttotals)
    }
      useEffect(()=>{
        fetchdetails()
        // getProfileData()
    },[])
    return (
        <View style={{flex:1,justifyContent:"center",backgroundColor:"rgb(249,249,249)",height:"100%",width:"100%"}}>
           <Appbar.Header style = {styles.item} >
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="black"  onPress={()=>{navigation.navigate("Home")}}/>
            </Appbar.Header>
            <ScrollView>
            <View style={{flex:1,alignItems:"center",height:160,justifyContent:"center"}}>
                <View style={{borderWidth:1,borderColor:"rgb(225,248,235)",backgroundColor:"rgb(225,248,235)",height:70,width:70,borderRadius:50,justifyContent:"center",alignItems:"center"}}>
                    <Feather name="shopping-bag" size={30} color="green" />
                </View>
                <Text>Order no:{route.params.orderid}</Text>
            </View>
            <View>
                <Card style={{marginBottom:40,borderRadius:20,shadowColor:"grey",elevation:10,backgroundColor:"white"}}>              
                    <View style={{flexDirection:"row"}}>
                        <Text style={{flex:1,fontSize:20,marginLeft:16,marginTop:10,textAlign:"center",fontWeight:"bold"}}>Thank you For your Purchase!</Text>
                    </View>
                    <Card.Content style={{paddingBottom:30}}>
                        <Paragraph style={{fontSize:12,textAlign:"center",color:"grey"}}>You will be recieving a confirmation </Paragraph>
                        <Paragraph style={{fontSize:12,textAlign:"center",color:"grey"}}>email with order details</Paragraph>
                    </Card.Content>
                </Card>
                <View style={{margin:10,borderBottomWidth:0.7}}>
                    <Text style={{fontSize:15,fontWeight:"bold",marginLeft:15}}>
                        Order Details
                    </Text>
                        {   cartitems.map((item,idx)=>{return(
                        <ScrollView contentContainerStyle={{flex:1,justifyContent:"center"}} key={item.product_id}>
                            <View style={{margin:15,flex:1}} key={idx}>
                                <Text style={{fontSize:13,fontWeight:"bold",marginBottom:5}}>
                                    {item.product_name}
                                </Text>
                                
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{color:"grey"}}>
                                        ${item.product_price} x {item.quantity}
                                    </Text>
                                    <Text style={{flex:1,fontWeight:"bold",fontSize:14,marginRight:"5%",textAlign:"right"}}>
                                        ${item.line_total}
                                    </Text>
                                </View>
                            </View>
                            
                        </ScrollView>
                    )})}
                    <View style={{justifyContent:"flex-start",flex:1}}>
                    <View style={{justifyContent:"flex-end",borderBottomWidth:0.5,margin:10}}>
                            <View style={{flexDirection:'row',paddingBottom:5}}>
                                <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:5}}>
                                    Item Total
                                </Text>
                                <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:25}}>
                                    ${carttotals.cart_contents_total}
                                </Text>
                            </View>
                            <View style={{flexDirection:'row',paddingBottom:10}}>
                                <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:5}}>
                                    Shipping
                                </Text>
                                <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:25}}>
                                    ${carttotals.shipping_total}
                                </Text>
                            </View>
                        </View>
                    <View style={{marginHorizontal:10,marginBottom:15,justifyContent:"center"}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:5}}>
                                Total Amount Paid
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:25}}>
                                ${carttotals.total}
                            </Text>
                        </View>
                    </View>
                </View>
                </View>
            </View>
            <View style={{alignItems:"center",marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:'rgb(5,23,41)',borderRadius:10,height:50,width:380,display:"flex",justifyContent:"center",alignItems:"center"}} onPress={()=>{navigation.navigate("BNS")}}>
                    <Text style={{color:"white",fontSize:16}}>Continue Shopping</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
        </View>
        
    )
}


const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
      
        height:"100%"
    },
    item: {
       backgroundColor : 'white',height:35,paddingBottom:17
    },
    icon: {
        marginLeft: 20
    },

    title:{
        fontSize:17
    },
})