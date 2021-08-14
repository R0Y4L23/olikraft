import React, {useEffect,useState} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar } from 'react-native-paper';
import { Ionicons} from '@expo/vector-icons';
const axios = require('axios');
export default function ProductDetails({route,navigation}) {
    const [pro,setPro] = useState("")
    
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
        axios.get('https://olikraft.shubhchintak.co/api/letscms/v1/product/' + route.params.id, {
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
      <View style={{flex:1}}>
        <View>
          <Appbar.Header style = {styles.item}>
                  <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}} />
                  <Appbar.Content title="Product All Details" titleStyle={styles.title}/>

              </Appbar.Header>
        </View>
        <ScrollView style={{flex:1,padding:20,backgroundColor:"white"}}>
             <RenderHtml
                contentWidth={width}
                source={source}
                />
        </ScrollView>
      </View>
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

  
})