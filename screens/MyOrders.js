import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet , Image, TouchableOpacity, ScrollView} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Myorderchild from './Myorderchild';
function All() {
    const [orders, setOrders] = useState([])
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
        <ScrollView >
            {
                orders.map((order,idx)=>{
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
                                     
                                    <TouchableOpacity style={styles.total}>
                                        <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total  :  ${order.total}</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style={styles.send}>
                                        <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Write a Review</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                                :
                                <View style={styles.button}>
                                     
                                    <TouchableOpacity style={styles.total}>
                                        <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total  :  ${order.total}</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                                }
                            </Card.Content>
                        </Card>
                    )
                })
           
             }
            
        </ScrollView>
    );
  }

function Delievered() {
    const [orders, setOrders] = useState([])
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
        await fetch('https://olikraft.shubhchintak.co/api/letscms/v1/orders', {
            
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
            
        }).catch((e)=>{
            console.log(e)
        })
    }
    
    useEffect(() => 
    {
    fetchOrders()
    
    }, [])

    return (
        <ScrollView >
            {   orders.length != 0 ?
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
                :<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"red",height:"100%"}}>
                    <Text style={{fontWeight:"bold",fontSize:15}}>No Orders delievered yet</Text>
                </View>
           
             }
            
        </ScrollView>
        
    );
  }

  function Ontheway() {
    const [orders, setOrders] = useState([])
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
        await fetch('https://olikraft.shubhchintak.co/api/letscms/v1/orders', {
            
            headers: {
                "letscms_token": token
            }
        })
        .then(response => response.json())
        .then(function (response)
         {
           
            setOrders(response.data.orders.filter(order=>{
                return order.order_status === "processing"
            }))
        }).catch((e)=>{
            console.log(e)
        })
    }
    
    useEffect(() => 
    {
    fetchOrders()
    
    }, [])

    return (
        <ScrollView >
        {   orders.length != 0 ?
            orders.map((order,idx)=>{
                
                return(
                    <Card style={{elevation:10,marginTop:15,borderRadius:10}} key={idx}>
                        <Card.Content>
                            <View>
                                <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                                    <View style={{backgroundColor:"rgb(241,196,15)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
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
                                
                                <TouchableOpacity style={styles.send}>
                                    <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Write a Review</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Content>
                    </Card>
                )
            })
            :<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"red",height:"100%"}}>
                <Text style={{fontWeight:"bold",fontSize:15}}>No Orders delievered yet</Text>
            </View>
       
         }
        
    </ScrollView>
    );
  }

  function Cancelled() {
    const [orders, setOrders] = useState([])
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
        await fetch('https://olikraft.shubhchintak.co/api/letscms/v1/orders', {
            
            headers: {
                "letscms_token": token
            }
        })
        .then(response => response.json())
        .then(function (response)
         {
           
            setOrders(response.data.orders.filter(order=>{
                return order.order_status === "cancelled"
            }))
        }).catch((e)=>{
            console.log(e)
        })
    }
    
    useEffect(() => 
    {
    fetchOrders()
    
    }, [])

    return (
        <ScrollView >
        {   orders.length != 0 ?
            orders.map((order,idx)=>{
                
                return(
                    <Card style={{elevation:10,marginTop:15,borderRadius:10}} key={idx}>
                        <Card.Content>
                            <View>
                                <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                                    <View style={{backgroundColor:"rgb(255,86,86)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
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
            :<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"red",height:"100%"}}>
                <Text style={{fontWeight:"bold",fontSize:15}}>No Orders cancelled yet</Text>
            </View>
       
         }
        
    </ScrollView>
    );
  }
const Tab = createMaterialTopTabNavigator();
export default function MyOrders({navigation}) {

    return (
        
            
            <NavigationContainer independent={true}>
                <Appbar.Header style = {styles.item}>
                    <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}}/>
                    <Appbar.Content title="My Orders" titleStyle={styles.title}/>
                    
                </Appbar.Header>
                <Tab.Navigator  screenOptions={{
                    tabBarLabelStyle: { fontSize: 13,color:"white",textTransform:"none" },
                    
                    tabBarStyle: { backgroundColor: 'rgb(5,23,41)' },
                }}>
                    <Tab.Screen name="All" component={All} />
                    <Tab.Screen name="Delivered" component={Delievered} />
                    <Tab.Screen name="On the way" component={Ontheway} />
                    <Tab.Screen name="Cancelled" component={Cancelled} />
                    
                </Tab.Navigator>
            </NavigationContainer>
     
    )
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
