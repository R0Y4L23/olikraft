import React, {useState,useEffect} from 'react'
import { View, Text,TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Card, Paragraph, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Myorderchild from './Myorderchild';
export default function  Delievered() {
    const [orders, setOrders] = useState([])
    const [rendercomplete, setrendercomplete] = useState(false)
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
    const fetchOrders = async () => {
        let token = await getData()
        await fetch('https://olikraft.com/api/letscms/v1/orders', {
            
            headers: {
                "letscms_token": token
            }
        })
        .then(response => response.json())
        .then(function (response)
         {
            setOrders(response.data.orders.filter((order)=>{
                return order.order_status === "completed"
            }));
            setrendercomplete(true)
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
            {rendercomplete&&<ScrollView >
            {   orders.length != 0 && 
                orders.map((order,idx)=>{
                    
                    return(
                        <Card style={{elevation:10,marginTop:15,borderRadius:10}} key={idx}>
                            <Card.Content>
                                <View>
                                    <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                                        <View style={{backgroundColor:"rgb(46,204,113)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
                                            <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}> {order.order_status}</Text>
                                        </View>
                                        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                            <Text style={{fontSize:14,color:"grey"}}>Order no# :{order.order_id}</Text>
                                        </View>
                                    </View>
                                    <Myorderchild id={order.order_id}/>
                                </View>
                                <View style={styles.button}> 
                                    <TouchableOpacity style={styles.total}>
                                        <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total  :  ${order.total}</Text>
                                    </TouchableOpacity>
                                    
                                    
                                </View>
                            </Card.Content>
                        </Card>
                    )
                })
                // :<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"red",height:"100%"}}>
                //     <Text style={{fontWeight:"bold",fontSize:15}}>No Orders delievered yet</Text>
                // </View>
           
             }

            
        </ScrollView>}
        {
                    orders.length === 0 && rendercomplete && <View style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>We will reach to you soon with your order......</Text></View>
                } 
                 {
                rendercomplete === false && <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator animating={true} color={"blue"} size="large"/>
                </View>
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
