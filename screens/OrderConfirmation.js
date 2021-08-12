import React from 'react'
import {View,Text,Image, StyleSheet, TouchableOpacity} from "react-native"
import { Card, Paragraph } from 'react-native-paper';
import { Ionicons, Feather,EvilIcons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default function OrderConfirmation({navigation}) {
    return (
        <View style={{backgroundColor:"rgb(249,249,249)",height:"100%"}}>
           <Appbar.Header style = {styles.item} >
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="black"  onPress={()=>{navigation.navigate("Home")}}/>
            </Appbar.Header>
            <View style={{alignItems:"center",height:160,justifyContent:"center"}}>
                <View style={{borderWidth:1,borderColor:"rgb(225,248,235)",backgroundColor:"rgb(225,248,235)",height:70,width:70,borderRadius:50,justifyContent:"center",alignItems:"center"}}>
                    <Feather name="shopping-bag" size={30} color="green" />
                </View>
                <Text>Order no: #Order no</Text>
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
                    <View style={{flexDirection:"row"}}>
                        <Card style={{elevation:10,margin:15,borderRadius:10}}>
                            <Card.Content>
                                <Image source={require("../assets/board.jpg")} style={{height:50,width:50}}/>
                            </Card.Content>
                        </Card>
                        <View style={{justifyContent:"center",flex:1,padding:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                Olikraft Handikraft Wooden Blocking Board
                            </Text>
                            <Text style={{color:"grey",marginTop:10}}>
                                11 inch | 2nos x $39.99 
                            </Text>
                        </View>
                    </View>
                    <View style={{margin:10,marginTop:"5%"}}>
                        <View style={{flexDirection:'row',paddingBottom:15}}>
                            <Text style={{flex:1,fontSize:15,fontWeight:"bold",marginLeft:10}}>
                                Item Total
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:15,fontWeight:"bold",marginLeft:15}}>
                                $79.98
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',paddingBottom:15}}>
                            <Text style={{flex:1,fontSize:15,fontWeight:"bold",marginLeft:10}}>
                                Shipping
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:15,fontWeight:"bold"}}>
                                $12.00
                            </Text>
                        </View>
                        
                    </View>
                    
                </View>
                <View style={{margin:10}}>
                    <View style={{flexDirection:'row',paddingBottom:15,marginLeft:15}}>
                        <Text style={{flex:1,fontSize:15,fontWeight:"bold"}}>
                            Total Amount Paid
                        </Text>
                        <Text style={{flex:1,textAlign:"right",fontSize:15,fontWeight:"bold",marginRight:10}}>
                            $91.98
                        </Text>
                    </View>
                </View>
                
            </View>
            <View style={{alignItems:"center",padding:40}}>
                <TouchableOpacity style={{backgroundColor:'rgb(5,23,41)',borderRadius:10,height:50,width:380,display:"flex",justifyContent:"center",alignItems:"center"}} onPress={()=>{navigation.navigate("BNS")}}>
                    <Text style={{color:"white",fontSize:16}}>Continue Shopping</Text>
                </TouchableOpacity>
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
})