import React, {useEffect,useState} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar, ActivityIndicator } from 'react-native-paper';
import { Ionicons} from '@expo/vector-icons';
const axios = require('axios');
export default function ProductDetails({route,navigation}) {
    const [pro,setPro] = React.useState("")
    const [rendercomplete, setrendercomplete] = useState(false)
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
        axios.get('https://olikraft.com/api/letscms/v1/product/' + route.params.id, {
            Headers:{
                letscms_token:token
            }
          })
          .then(function (response) {
                setPro(response.data.data.description)
                setrendercomplete(true)
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
       {rendercomplete&& <View>
          <Appbar.Header style = {styles.item}>
                  <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}} />
                  <Appbar.Content title="Product All Details" titleStyle={styles.title}/>

              </Appbar.Header>
        </View>}
        {rendercomplete && <ScrollView style={{flex:1,padding:20,backgroundColor:"white"}}>
             <RenderHtml
                contentWidth={width}
                source={source}
                />
                
        </ScrollView>}
        {
                rendercomplete === false && <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator animating={true} color={"rgb(5,23,41)"} size="large"/>
                </View>
            }
      </View>
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

  
})