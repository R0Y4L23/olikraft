import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet , Image, TouchableOpacity, ScrollView} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
function All() {
    const [order, setOrder] = useState([])
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
            method: "GET",
            headers: {
                "letscms_token": token
            }
        }).then(function (response)
         {
            console.log(response);
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
            <Card style={{elevation:10,marginTop:15,borderRadius:10}}>
                <Card.Content>
                    <View style={{flexDirection:"row",margin:10}}>
                        <View style={{justifyContent:"center"}}>
                        <Image source={require("../assets/board.jpg")} style={{height:80,width:80}}/>
                        </View>
                        <View >
                            <View style={{flexDirection:"row"}}>
                                <View style={{backgroundColor:"rgb(241,196,15)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
                                    <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}> On the way</Text>
                                </View>
                                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:12,color:"grey"}}>Order no# :OKT0012</Text>
                                </View>
                            </View>
                            <View style={{flex:1 ,padding:5}}>
                                <Text style={{fontWeight:"bold",fontSize:13}}>
                                    Olikraft Handikraft Wooden Blocking Board
                                </Text>            
                                <Text style={{color:"grey",marginTop:5}}>
                                    11 inch | 2nos x $39.99 
                                </Text>
                                <Text style={{color:"grey",marginTop:5}}>
                                    Shipping : $ 12.00
                                </Text>
                                <Text style={{color:"grey",marginTop:5}}>
                                    Delievered by 22 May 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.total}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>Total: $91.98</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send}>
                            <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Track Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancel}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>Cancel Order</Text>
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card>
            <Card style={{elevation:10,marginTop:15,borderRadius:10}}> 
              <Card.Content>
                      <View style={{flexDirection:"row",margin:10}}>
                          <View style={{justifyContent:"center"}}>
                          <Image source={require("../assets/board.jpg")} style={{height:80,width:80}}/>
                          </View>
                          <View >
                              <View style={{flexDirection:"row"}}>
                                  <View style={{backgroundColor:"rgb(46,204,113)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
                                      <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}>
                                          Delievered
                                      </Text>
                                  </View>
                                  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                      <Text style={{fontSize:12,color:"grey"}}>Order no# :OKT0012</Text>
                                  </View>
                              </View>
                              <View style={{flex:1 ,padding:5}}>
                                  
                                  <Text style={{fontWeight:"bold",fontSize:13}}>
                                      Olikraft Handikraft Wooden Blocking Board
                                  </Text>
                                                  
                                  <Text style={{color:"grey",marginTop:5}}>
                                      11 inch | 2nos x $39.99 
                                  </Text>
  
                                  <Text style={{color:"grey",marginTop:5}}>
                                      Shipping : $ 12.00
                                  </Text>
                                  <Text style={{color:"grey",marginTop:5}}>
                                      Delievered on 22 May 2021
                                  </Text>
                              
                              </View>
                          </View>
                      </View>
                       <View style={styles.button}> 
                            <TouchableOpacity style={styles.total}>
                                <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total: $91.98</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.send}>
                                <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Write a Review</Text>
                            </TouchableOpacity>
                      </View>
                      </Card.Content> 
              </Card>
            {/* <Card style={{elevation:10,marginTop:15,borderRadius:10}}>
              
              <Card.Content>
                      <View style={{flexDirection:"row",margin:10}}>
                          <View style={{justifyContent:"center"}}>
                          <Image source={require("../assets/board.jpg")} style={{height:80,width:80}}/>
                          </View>
                          <View >
                              <View style={{flexDirection:"row"}}>
                                  <View style={{backgroundColor:"rgb(255,86,86)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
                                      <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}>
                                        Cancelled
                                      </Text>
                                  </View>
                                  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                      <Text style={{fontSize:12,color:"grey"}}>Order no# :OKT0012</Text>
                                  </View>
                              </View>
                              <View style={{flex:1 ,padding:5}}>
                                  
                                  <Text style={{fontWeight:"bold",fontSize:13}}>
                                      Olikraft Handikraft Wooden Blocking Board
                                  </Text>
                                                  
                                  <Text style={{color:"grey",marginTop:5}}>
                                      11 inch | 2nos x $39.99 
                                  </Text>
  
                                  <Text style={{color:"grey",marginTop:5}}>
                                      Shipping : $ 12.00
                                  </Text>
                                  <Text style={{color:"grey",marginTop:5}}>
                                      Cancelled on 22 May 2021
                                  </Text>
                              
                              </View>
                          </View>
                      </View>
                       <View style={styles.button}> 
                          
                          <TouchableOpacity style={styles.send}>
                              <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total: $91.98</Text>
                          </TouchableOpacity>
                      </View>
                      </Card.Content> 
              </Card>
         */}
        </ScrollView>
    );
  }

function Delievered() {
    return (
        <ScrollView >
            <Card style={{elevation:10,marginTop:15,borderRadius:10}}>
              
              <Card.Content>
                      <View style={{flexDirection:"row",margin:10}}>
                          <View style={{justifyContent:"center"}}>
                          <Image source={require("../assets/board.jpg")} style={{height:80,width:80}}/>
                          </View>
                          <View >
                              <View style={{flexDirection:"row"}}>
                                  <View style={{backgroundColor:"rgb(46,204,113)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
                                      <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}>
                                          Delievered
                                      </Text>
                                  </View>
                                  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                      <Text style={{fontSize:12,color:"grey"}}>Order no# :OKT0012</Text>
                                  </View>
                              </View>
                              <View style={{flex:1 ,padding:5}}>
                                  
                                  <Text style={{fontWeight:"bold",fontSize:13}}>
                                      Olikraft Handikraft Wooden Blocking Board
                                  </Text>
                                                  
                                  <Text style={{color:"grey",marginTop:5}}>
                                      11 inch | 2nos x $39.99 
                                  </Text>
  
                                  <Text style={{color:"grey",marginTop:5}}>
                                      Shipping : $ 12.00
                                  </Text>
                                  <Text style={{color:"grey",marginTop:5}}>
                                      Delievered on 22 May 2021
                                  </Text>
                              
                              </View>
                          </View>
                      </View>
                       <View style={styles.button}> 
                            <TouchableOpacity style={styles.total}>
                                <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total: $91.98</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.send}>
                                <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Write a Review</Text>
                            </TouchableOpacity>
                      </View>
                      </Card.Content> 
              </Card>
            </ScrollView>
    );
  }

  function Ontheway() {
    return (
        <ScrollView >
            <Card style={{elevation:10,marginTop:15,borderRadius:10}}>
              
              <Card.Content>
                  <View style={{flexDirection:"row",margin:10}}>
                      <View style={{justifyContent:"center"}}>
                      <Image source={require("../assets/board.jpg")} style={{height:80,width:80}}/>
                      </View>
                      <View >
                          <View style={{flexDirection:"row"}}>
                              <View style={{backgroundColor:"rgb(241,196,15)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
                                  <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}> On the way</Text>
                              </View>
                              <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                  <Text style={{fontSize:12,color:"grey"}}>Order no# :OKT0012</Text>
                              </View>
                          </View>
                          <View style={{flex:1 ,padding:5}}>
                              
                              <Text style={{fontWeight:"bold",fontSize:13}}>
                                  Olikraft Handikraft Wooden Blocking Board
                              </Text>
                                              
                              <Text style={{color:"grey",marginTop:5}}>
                                  11 inch | 2nos x $39.99 
                              </Text>

                              <Text style={{color:"grey",marginTop:5}}>
                                  Shipping : $ 12.00
                              </Text>
                              <Text style={{color:"grey",marginTop:5}}>
                                  Delievered by 22 May 2021
                              </Text>
                          
                          </View>
                      </View>
                  </View>
                  
                  <View style={styles.button}> 
                      <TouchableOpacity style={styles.total}>
                          <Text style={{fontSize:14,fontWeight:"bold"}}>Total: $91.98</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.send}>
                          <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Track Order</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.cancel}>
                          <Text style={{fontSize:14,fontWeight:"bold"}}>Cancel Order</Text>
                      </TouchableOpacity>
                  </View>
     
     
              </Card.Content>
             
             
          </Card>
        </ScrollView>
    );
  }

//   function Cancelled() {
//     return (
//         <ScrollView >
//             <Card style={{elevation:10,marginTop:15,borderRadius:10}}>
              
//               <Card.Content>
//                       <View style={{flexDirection:"row",margin:10}}>
//                           <View style={{justifyContent:"center"}}>
//                           <Image source={require("../assets/board.jpg")} style={{height:80,width:80}}/>
//                           </View>
//                           <View >
//                               <View style={{flexDirection:"row"}}>
//                                   <View style={{backgroundColor:"rgb(255,86,86)",width:"32%",alignItems:"center",borderRadius:5,padding:2}}>
//                                       <Text style={{alignItems:"center",fontWeight:"bold",textTransform:"uppercase",color:"white",fontSize:12}}>
//                                         Cancelled
//                                       </Text>
//                                   </View>
//                                   <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
//                                       <Text style={{fontSize:12,color:"grey"}}>Order no# :OKT0012</Text>
//                                   </View>
//                               </View>
//                               <View style={{flex:1 ,padding:5}}>
                                  
//                                   <Text style={{fontWeight:"bold",fontSize:13}}>
//                                       Olikraft Handikraft Wooden Blocking Board
//                                   </Text>
                                                  
//                                   <Text style={{color:"grey",marginTop:5}}>
//                                       11 inch | 2nos x $39.99 
//                                   </Text>
  
//                                   <Text style={{color:"grey",marginTop:5}}>
//                                       Shipping : $ 12.00
//                                   </Text>
//                                   <Text style={{color:"grey",marginTop:5}}>
//                                       Cancelled on 22 May 2021
//                                   </Text>
                              
//                               </View>
//                           </View>
//                       </View>
//                        <View style={styles.button}> 
                          
//                           <TouchableOpacity style={styles.send}>
//                               <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>Total: $91.98</Text>
//                           </TouchableOpacity>
//                       </View>
//                       </Card.Content> 
//               </Card>
//         </ScrollView>
//     );
//   }
const Tab = createMaterialTopTabNavigator();
export default function MyOrders({navigation}) {

    return (
        
            
            <NavigationContainer independent={true}>
                <Appbar.Header style = {styles.item}>
                    <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}}/>
                    <Appbar.Content title="My Orders" titleStyle={styles.title}/>
                    <Ionicons style={styles.edit} name="search" size={24} color="white" />
                </Appbar.Header>
                <Tab.Navigator  screenOptions={{
                    tabBarLabelStyle: { fontSize: 13,color:"white",textTransform:"none" },
                    
                    tabBarStyle: { backgroundColor: 'rgb(5,23,41)' },
                }}>
                    <Tab.Screen name="All" component={All} />
                    <Tab.Screen name="Delivered" component={Delievered} />
                    <Tab.Screen name="On the way" component={Ontheway} />
                    {/* <Tab.Screen name="Cancelled" component={Cancelled} /> */}
                </Tab.Navigator>
            </NavigationContainer>
     
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)'
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
