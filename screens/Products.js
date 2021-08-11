import React,{useEffect, useState} from 'react'
import { Appbar } from 'react-native-paper';
import { ScrollView, View,Text,Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');
const ProductsComponent=({product,nprice,pprice,discount,discountPrice,image})=>{
    return (
        <View style={{width:325,height:"auto",margin:15,backgroundColor:"white",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5,display:"flex",flexDirection:"row",justifyContent:"space-around",padding:10}}>
        <Image source={{uri:image}} style={{height:75,width:75}}/>
        <View>
            <Text style={{fontSize:18,width:150}}>{product}</Text>
            <Text style={{fontSize:15,fontWeight:"800",marginTop:10}}>${nprice} {discountPrice!=0&&<Text style={{color:"red",textDecorationLine:"line-through"}}>${pprice}</Text>}</Text>
            {discountPrice!=0&&<Text style={{color:"green",fontSize:16,fontWeight:"800",marginTop:10}}>You Save {(discount*100).toPrecision(4)}% (${discountPrice})</Text>}
        </View>
    </View>
    )
}
const Products = () => {
    const [pro,setPro]=useState([])
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
    useEffect(()=>{
        let token=getData()
        axios.get('https://olikraft.shubhchintak.co/api/letscms/v1/products?page=1', {
            Headers:{
                letscms_token:token
            }
          })
          .then(function (response) {
            setPro(response.data.data.products)
          })
          .catch(function (error) {
            console.log(error);
          })
    },[])
    return (
       <View style={{backgroundColor:"#f9f9f9"}}>
           <Appbar.Header style = {{backgroundColor:"rgb(5,23,41)"}}>
                <Appbar.Content title="Products" titleStyle={{fontSize:20}}/>
                <Appbar.Action icon="briefcase"/>
                <Appbar.Action icon="magnify" />
            </Appbar.Header>
            <View style={{height:"87%"}}>
            <ScrollView>
                {pro.length>0&&pro.map((item,index)=>{return <ProductsComponent key={index} product={item.name} nprice={item.price} pprice={item.regular_price} discount={(Number(item.regular_price===""?item.price:item.regular_price)-Number(item.price))/Number(item.regular_price===""?item.price:item.regular_price)} discountPrice={Number(item.regular_price===""?item.price:item.regular_price)-Number(item.price)} image={item.image} />})}
            </ScrollView>
            </View>
       </View>
    )
}
export default Products