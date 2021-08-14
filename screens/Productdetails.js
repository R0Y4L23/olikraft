import React, {useEffect,useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axios = require('axios');
export default function ProductDetails({route,navigation}) {
    const [pro,setPro] = React.useState("")
    
    const source = {
        html: `${pro}`
    };
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

    const fetchrootitem = async () =>{
        let token=getData()
        axios.get('https://olikraft.shubhchintak.co/api/letscms/v1/product/20', {
            Headers:{
                letscms_token:token
            }
          })
          .then(function (response) {
                setPro(response.data.data.description)
                
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    useEffect(()=>{
        fetchrootitem()
    },[])
    const { width } = useWindowDimensions();
    return (
        <ScrollView style={{flex:1,padding:15,backgroundColor:"white"}}>
             <RenderHtml
                contentWidth={width}
                source={source}
                />
        </ScrollView>
    )
}
