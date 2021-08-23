import React , {useState,useEffect}from 'react'
import { View, Text, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Productimage from './Productimage';
export default function Myorderchild({id}) {
    const [singleorders, setsingleOrders] = useState([])
 
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
  
    const fetchsingleOrders = async (ids) => {

            let token = await getData()
            await fetch('https://olikraft.shubhchintak.co/api/letscms/v1/order/'+ ids, {
                
                headers: {
                    "letscms_token": token
                }
            })
            .then(response => response.json())
            .then(function (response)
            {
                setsingleOrders(response.data.items)
                // console.log(response.data.items)
             
            }).catch((e)=>{
                console.log(e)
            })

    }
    useEffect(() => 
    {
    fetchsingleOrders(id)
    
    }, [])
    return (
        <View style={{flex:1}}>
        {
            singleorders.map((item,idx)=>{
                return(
                    <View style={{flexDirection:"row",margin:20}} key={idx}>
                        {
                            item.variation_id === 0?
                            <Productimage id={item.product_id}/>
                            :
                            <Productimage id={item.variation_id}/>
                        }                                          
                        {/* <Productimage id ={setproductid(item.variation_id,item.product_id)}/> */}
                        <View style={{flex:1 ,padding:5}}>
                            <Text style={{fontWeight:"bold",fontSize:13}}>
                                {item.name}
                            </Text>            
                            <Text style={{color:"grey",marginTop:5}}>
                                {item.quantity}  x  ${+Number((item.total)/(item.quantity)).toFixed(2)}  =  ${item.total}
                            </Text>
                        </View>
                    
                    </View>
                )
            })
        }
        </View>
    )
}
