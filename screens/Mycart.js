import React, {useState,useEffect} from 'react'
import { StyleSheet,View, Text, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons,Entypo} from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuantityInput } from './QuantityInput';

const useForceUpdate = () => useState()[1];
const axios = require('axios');
export default function Mycart({navigation}) {
    
    const [Coupon,setCoupon] = useState("")
    const [cartitems,setCartitems]=useState([])
    const [carttotals,setCarttotals]=useState([])
    const [hasitemremoved,sethasitemremoved] = useState(false)
   
    const forceUpdate = useForceUpdate();

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
      const removefromcart=async (key)=>{
        let token = await getData()

            fetch('https://olikraft.shubhchintak.co/api/letscms/v1/cart/remove-item/' + key, {
                method:"POST",
                headers:{
                    "letscms_token":token,
                },
                
              },)
              .then(response => response.json())
              .then((response) =>{
                if(response.status){
                    alert(response.message)
                    // navigation.navigate("Products")
                    sethasitemremoved(true)
                    // forceUpdate()
                
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        
    }

    const addcoupon = async () =>{
        let token = await getData()
        fetch("https://olikraft.shubhchintak.co/api/letscms/v1/cart?coupons[]=" + Coupon,{
            headers:{
                letscms_token:token
            }
        })
        .then(response => response.json())
        .then((res) => {
            console.log(res.data.coupon_discount_totals)
            setCartitems(res.data.cart_items)
            setCarttotals(res.data.cart_totals)
            forceUpdate()
        })
        .catch(error => console.log(error))
      }

    
      const fetchcart = async () =>{
        let token = await getData()
        fetch("https://olikraft.shubhchintak.co/api/letscms/v1/cart/",{
            headers:{
                letscms_token:token
            }
        })
        .then(response => response.json())
        .then((res) => {
            // console.log(res)
            setCartitems(res.data.cart_items)
            setCarttotals(res.data.cart_totals)
        })
        .catch(error => console.log(error))
      }

    useEffect(()=>{
        fetchcart()
        if(hasitemremoved){
            sethasitemremoved(false)
            fetchcart()
        }
    }
       ,[hasitemremoved])
    return (
        <View style={{flex:1,justifyContent:"space-between"}}>
            <View>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}}/>
                <Appbar.Content title="My Cart" titleStyle={styles.title}/>
            </Appbar.Header>
            </View>
            { cartitems!=0 ?
            <ScrollView>
                
            {cartitems.map((item,idx)=>{return(
                <ScrollView contentContainerStyle={{flex:1,justifyContent:"space-between"}} key={item.product_id}>
                    <View style={{padding:15,flex:1}} key={idx}>
                        <Text style={{fontSize:13,fontWeight:"bold",marginBottom:5}}>
                            {item.product_name}
                        </Text>
                        
                        <View style={{flexDirection:"row",marginBottom:5}}>
                            <Text style={{color:"grey"}}>
                                ${item.product_price} x {item.quantity}
                            </Text>
                            <Text style={{flex:1,fontWeight:"bold",fontSize:14,marginRight:"5%",textAlign:"right"}}>
                                ${item.line_total}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                    <View style={{flexDirection:"row",padding:5}} key={item.key}>
                       
                        <QuantityInput qt={item.quantity} fetchcart={fetchcart} id = {item.key}/>
                        <View style={{flex:1}}>
                            <Button title="Remove" color="rgb(5,23,41)" onPress={()=>removefromcart(item.key)}/>
                        </View>
                    </View>
                    </View>
                </ScrollView>
            )})}
            <View style={{padding:15,flex:1,justifyContent:"center"}}>
                <Text style={{fontSize:13,fontWeight:"bold",marginBottom:5}}>
                    Apply Coupon
                </Text>
                <View style={{flexDirection:"row",marginBottom:5}}>
                    <TextInput style={{ flex:1,height: 40,padding: 10,backgroundColor:"white",borderWidth:0.3,borderColor:"grey",borderRadius:5}} onChangeText={setCoupon} value={Coupon} placeholder="Enter Coupon Code.." />
                    <TouchableOpacity style={{width:"30%",backgroundColor:"rgb(5,23,41)",justifyContent:"center",alignItems:"center"}} onPress={addcoupon}>
                        <Text style={{fontWeight:"bold",color:"white"}}> Apply </Text>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style={{justifyContent:"flex-start",flex:1}}>
                <View style={{justifyContent:"flex-end",borderBottomWidth:0.5,margin:10}}>
                        <View style={{flexDirection:'row',paddingBottom:5}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                                Item Total
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:15}}>
                                ${Number(carttotals.cart_contents_total).toPrecision(5)}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',paddingBottom:10}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                                Shipping
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:15}}>
                                ${carttotals.shipping_total}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',paddingBottom:10}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                                Coupon Discounts
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:15}}>
                                ${Number(carttotals.discount_total).toPrecision(5)}
                            </Text>
                        </View>
                    </View>
                <View style={{marginHorizontal:10,marginBottom:15,justifyContent:"center"}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                            Grand Total
                        </Text>
                        <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:15}}>
                            ${Number(carttotals.total).toPrecision(5)}
                        </Text>
                    </View>
                </View>
                
                    
            </View>
            </ScrollView>
            :<View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                    <Text>
                        No Prodcuts added to cart
                    </Text>
                </View>
            }
            {
                cartitems!=0?
            <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel} onPress={()=>{navigation.navigate("BNS")}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Continue Shopping </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send} onPress={()=>{navigation.navigate("Checkout",{coupon:Coupon,cartitems:cartitems,carttotals:carttotals})}}>
                            <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>Proceed to Checkout</Text>
                        </TouchableOpacity>
                    </View>
                    :<View>
                        </View>
}
        </View>
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)'
       ,height:35,paddingBottom:17
    },
    icon: {
        marginLeft: 20
    },

    title:{
        fontSize:17
    },
    name:{
        color:"grey",
        marginTop:10,
        
    },
    edit:{
        marginRight:"3%"
    },
    
    form:{
     flexDirection:"row"
        
    },
  

    button:{
        backgroundColor:"white",
        elevation:5,
        borderColor:"grey",
        flexDirection:"row",
        paddingVertical:20,
        paddingHorizontal:10
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