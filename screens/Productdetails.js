import React, {useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Ionicons,Entypo,FontAwesome5,EvilIcons,Octicons,FontAwesome} from '@expo/vector-icons';
import { Appbar, List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');
export default function Productdetails({navigation}) {
    const [Counter,setCounter] = useState(1)
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

      function increment(){
        setCounter(Counter + 1)
    }

    function decrement(){
        if(Counter > 0){
            setCounter(Counter - 1)
        }
        else{
            setCounter(0)
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
            setPro(response.data.data.products[2])
            console.log(pro.image)
          })
          .catch(function (error) {
            console.log(error);
          })
    },[])
    let Image_Http_URL ={ uri: pro.image};
    let discount=(Number(pro.regular_price)-Number(pro.sale_price))/Number(pro.regular_price)
    let discountPrice=Number(pro.regular_price)-Number(pro.sale_price)
    return (
        <View style={{flex:1}}>
            <View >
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="rgb(5,23,41)" />
                <Appbar.Content title="" titleStyle={styles.title}/>
                <Entypo style={styles.edit} name="share" size={24} color="rgb(5,23,41)" />
            </Appbar.Header>
            </View>
            <View style={{elevation:10,margin:5}}>
                <Image source={Image_Http_URL} style={{height:180,resizeMode:"stretch",borderRadius:10,width:"100%"}}/>
            </View>
            <View style={{flexDirection:"row",padding:10}}>
                <Text style={{marginLeft:5,fontSize:16,flex:1,fontWeight:"bold"}}>{pro.name}</Text>
                <View style={{flex:0.5,alignItems:"flex-end",marginRight:16,justifyContent:"center"}}>
                    <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:50,height:40,width:40}}>
                        <FontAwesome5 name="shopping-bag" size={16} color="black" />
                    </View>
                </View>
            </View>

            <View style={{backgroundColor:"rgb(33,184,97)",borderRadius:5,marginLeft:15,width:"15%",flexDirection:"row",justifyContent:"space-evenly"}}>
                <Text style={{color:"white",fontSize:16}}>{pro.average_rating}</Text>
                <EvilIcons style={{marginTop:4}}name="star" size={20} color="white" />
            </View>
            
            <View style={{flexDirection:"row",width:"50%",padding:10,marginLeft:5,}}>
                <Text style={{color:"rgb(5,23,41)",fontSize:15,flex:0.5}}>
                    ${pro.sale_price}
                </Text>
                <Text style={{color:"grey",fontSize:15,flex:1,textDecorationLine:"line-through"}}>
                    ${pro.regular_price}
                </Text>
            </View>
            <View style={{marginLeft:10,padding:5}}>
                <Text style={{color:"rgb(144,222,174)",fontSize:14,fontWeight:"bold"}}>You Save {(discount*100).toPrecision(4)}% (${discountPrice})</Text>
            </View>
            <View style={{flex:1,padding:15,justifyContent:"flex-start"}}>
                <Text style={{color:"black",fontSize:19}}>Quantity</Text>
                <View style={{backgroundColor:"white",padding:20,marginVertical:5,borderWidth:0.5,borderColor:"grey"}}>
                    <View style={{flex:1,marginLeft:5,justifyContent:"center"}}>
                        <Entypo name="minus" size={24} color="black" onPress={decrement}/>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>{Counter}</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Entypo name="plus" size={24} color="black" onPress={increment}/>
                    </View>
                </View>
                <View style={{padding:5}}>
                    <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}>
                        Package will include:
                    </Text>
                    <Text style={styles.listitem}>
                    {'\u2022'}Package item details 1
                    </Text>
                    <Text style={styles.listitem}>
                    {'\u2022'}Package item details 2
                    </Text>
                    <Text style={styles.listitem}>
                    {'\u2022'}Package item details 3
                    </Text>
                   
                </View>
                <View style={{flexDirection:"row",padding:5}}>
                    <Image source={require("../assets/moneyback.png")} style={{resizeMode:"stretch",height:50,width:50,marginRight:15}}/>
                    <Image source={require("../assets/mcafee.png")} style={{height:50,width:50,resizeMode:"stretch"}}/>
                </View>

                <View style={{backgroundColor:"white",elevation:5,height:40,borderRadius:15,justifyContent:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:1,alignItems:"flex-start",marginLeft:15}}>
                            <Octicons name="info" size={24} color="black"  />
                        </View>
                        <View  style={{flex:1,alignItems:"center"}}>
                            <Text style={{fontSize:15,color:"black"}}>All Details</Text>
                        </View>
                        <View  style={{flex:1,alignItems:"flex-end",marginRight:15}}>
                            <FontAwesome name="angle-right" size={24} color="black" />
                        </View>
                    </View>
                </View>         
                <View style={{backgroundColor:"white",elevation:5,height:40,marginTop:10,borderRadius:15,justifyContent:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:1,alignItems:"flex-start",marginLeft:15}}>
                            <FontAwesome name="star-half-full" size={24} color="black" />
                        </View>
                        <View >
                            <Text style={{fontSize:15,color:"black"}}>Rating and Reviews </Text>
                        </View>
                        <View  style={{flex:1,alignItems:"flex-end",marginRight:15}}>
                            <FontAwesome name="angle-right" size={24} color="black" />
                        </View>
                    </View>
                </View>  

                <View style={{alignItems:"center",padding:20}}>
                <TouchableOpacity style={{backgroundColor:'rgb(33,184,97)',borderRadius:10,height:50,width:380,display:"flex",justifyContent:"center",alignItems:"center"}} onPress={()=>{navigation.navigate("Mycart")}}>
                    <Text style={{color:"white",fontSize:16}}>Buy Now</Text>
                </TouchableOpacity>
                </View>
                     
            </View>
 
      
        </View>
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'white'
    },
    icon: {
        marginLeft: 20
    },

    title:{
        fontSize:17
    },

    edit:{
        marginRight:"3%"
    },
    listitem:{
        color:"grey"
    }
})