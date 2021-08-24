import React, {useState,useEffect} from 'react'
import { View, Text,TouchableOpacity, ScrollView, StyleSheet } from 'react-native'

import { Card, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Myorderchild from './Myorderchild';
import WriteAReview from "./WriteAReview"
export default function Allorders({navigation}) {
    const [orders, setOrders] = useState([])
    const [review,setReview]=useState(false)
    const [orderIdSelectedForReview,setOrderIdSelectedForReview]=useState("")
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.log(e)
        }
    }

    const bgcolor = (status) =>{
        if(status === "processing"){
            return "rgb(241,196,15)"
        }
        else if(status === "completed"){
            return "rgb(46,204,113)"
        }
        else if(status === "cancelled"){
            return "rgb(255,86,86)"
        } 
    }
    const fetchOrders = async () => {
        let token = await getData()
        await fetch('https://olikraft.shubhchintak.co/api/letscms/v1/orders', {
            
            headers: {
                "letscms_token": token
            }
        })
        .then(response => response.json())
        .then(function (response)
         {
            setOrders(response.data.orders);
            
        }).catch((e)=>{
            console.log(e)
        })
    }
    
    useEffect(() => 
    {
    fetchOrders()
    
    }, [])
    return (

        <View style={{flex:1}}>
          {!review?(<ScrollView >
            {
                orders.length > 0 && orders.map((order,idx)=>{
                    return(
                        <Card style={{elevation:10,marginTop:15,borderRadius:10}} key={idx}>
                            <Card.Content>
                                <View>
                                    <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                                        <View style={{backgroundColor:bgcolor(order.order_status),width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
                                            <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}> {order.order_status}</Text>
                                        </View>
                                        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                            <Text style={{fontSize:14,color:"grey"}}>Order no# :{order.order_id}</Text>
                                        </View>
                                    </View>
                                    <Myorderchild id={order.order_id}/>
                                </View>
                                {
                                order.order_status === "processing"?
                                <View style={styles.button}>
                                    <View style={styles.total}>
                                        <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total  :  ${order.total}</Text>
                                    </View>
                                    
                                    <TouchableOpacity style={styles.send} onPress={()=>{setOrderIdSelectedForReview(order.order_id);setReview(true)}}>
                                        <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Write a Review</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={styles.button}>
                                    <View style={styles.total}>
                                        <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total  :  ${+Number(order.total).toFixed(2)}</Text>
                                    </View>
                                </View>
                                }
                            </Card.Content>
                        </Card>
                    )
                })
             }
        </ScrollView>):(<WriteAReview/>)}
            {
                    orders.length === 0 && <View style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>Loading Orders Please Wait......</Text></View>
                }   
    </View>
    );
  }

  
const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)',height:35,paddingBottom:17
    },
    icon: {
        marginLeft: 20,
    },

    title:{
        fontSize:17
    },
    edit:{
        marginRight:"3%"
    },
 
    button:{

        borderColor:"grey",
        flexDirection:"row",
        flex:1,
        justifyContent:"center",
        // marginTop:"10%"
       
    },
    total:{
        backgroundColor:"white",
        height:50,
        width:300,
       
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        borderTopWidth:0.5,
        borderRightWidth:0.5,
        borderColor:"grey",
    },
    cancel:{
        backgroundColor:"white",
        height:50,
        width:300,
       
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        borderTopWidth:0.5,
       
        borderColor:"grey",
    },
    send:{
       
        height:50,
        width:300,
        borderRightWidth:0.5,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        borderTopWidth:0.5,
        borderColor:"grey",
    }
    
})
