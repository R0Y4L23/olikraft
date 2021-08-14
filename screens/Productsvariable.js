import React, {useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native'
import { Ionicons,Entypo,FontAwesome5,EvilIcons,Octicons,FontAwesome} from '@expo/vector-icons';
import { Appbar, List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SliderBox } from "react-native-image-slider-box";
const axios = require('axios');
export default function Productsvariable({route,navigation}) {
    const [Counter,setCounter] = useState(1)
    const [name,setName] = useState()
    const [images,setImages]=useState([])
    const [price, setprice] = useState()
    const [saleprice , setsaleprice] = useState()
    const [rating,setrating] = useState()
    const [pro,setPro] = useState([])
    const [Attributes,setAttributes] = useState([])
    const [Children,setChildren] = useState([])
    const [proid,setid] = useState(route.params.id)
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

      const addtocart=async ()=>{
      
           await axios.post('https://olikraft.shubhchintak.co/api/letscms/v1/cart/add-item', {
                product_id:id,
                quantity:Counter,
                Headers:{
                    letscms_token:token
                }
              },)
              .then(async function (response) {
                if(response.data.status)
                {
                    await storeToken(response.data.letscms_token)
                    await storeProfileData(response.data.user)
                    navigation.navigate("BNS")
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        
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

    
    const fetchrootitem = async () =>{
        let token=getData()
        axios.get('https://olikraft.shubhchintak.co/api/letscms/v1/product/' + route.params.id, {
            Headers:{
                letscms_token:token
            }
          })
          .then(function (response) {
                setPro(response.data.data)
                setImages(response.data.data.gallery_images)
                setName(response.data.data.name)
                // setprice(Number(response.data.data.regular_price))
                // setsaleprice(Number(response.data.data.price))
                // setrating(response.data.data.average_rating)
                // setAttributes(Object.keys(response.data.data.attributes))
                setid(response.data.data.children[0])
          })
          .catch(function (error) {
            console.log(error);
          })
          
    }

    function fetchvaritem (){
        let token=getData()
        axios.get("https://olikraft.shubhchintak.co/api/letscms/v1/product/" + proid, {
            Headers:{
                letscms_token:token
            }
          })
          .then(function (response) {
                
                setName(response.data.data.name)
                setprice(Number(response.data.data.regular_price))
                setsaleprice(Number(response.data.data.sale_price))
                setrating(response.data.data.average_rating)
                // console.log(response.data.data.name)
          })
          .catch(function (error) {
            console.log(error);
          })
        }  
    function fetchvarchildren (id){
            
            axios.get("https://olikraft.shubhchintak.co/api/wc/v3/products/" + id, {
                auth: {
                    username: 'ck_e296377c8e66081c9321b68f176b42812ca4c40a',
                    password: 'cs_d3c061b568c0318c269f0b4c3ef6aa8a855e520e'
                  }
              })
              .then(function (response) {
                    
                   setAttributes(response.data.attributes)
              })
              .catch(function (error) {
                console.log(error);
              })
    }

    useEffect(()=>{
        fetchrootitem()
        // fetchvaritem()
        fetchvarchildren(route.params.id)
    },[])
    // let Image_Http_URL ={ uri: pro.image};
    let discount=( Math.abs(price - saleprice) ) / price 
    let discountPrice = Math.abs(price - saleprice)
    return (
        <View style={{flex:1}}>
            <View >
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="rgb(5,23,41)" onPress={()=>{navigation.goBack()}}/>
                <Appbar.Content title="" titleStyle={styles.title}/>

            </Appbar.Header>
            </View>
            {
                proid ?
                fetchvaritem()
                :<View></View>
            }
            <ScrollView style={{flex:1}}>
                <View  style={{elevation:15,padding:5,borderRadius:10,backgroundColor:"white"}}>
                    <SliderBox images={images} sliderBoxHeight={270} resizeMode="contain"/>
                </View>
                <View style={{flexDirection:"row",padding:10}}>
                    <Text style={{marginLeft:5,fontSize:16,flex:1,fontWeight:"bold"}}>{name}</Text>
                    <View style={{flex:0.5,alignItems:"flex-end",marginRight:16,justifyContent:"center"}}>
                        <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:50,height:40,width:40}}>
                            <FontAwesome5 name="shopping-bag" size={16} color="black" />
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:"rgb(33,184,97)",borderRadius:5,marginLeft:15,width:"15%",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <Text style={{color:"white",fontSize:16}}>{rating}</Text>
                    <EvilIcons style={{marginTop:4}}name="star" size={20} color="white" />
                </View>
                {

                    (saleprice != discountPrice)
                        ?   <View>
                                <View style={{flexDirection:"row",width:"50%",padding:10,marginLeft:5,}}>
                                    <Text style={{color:"rgb(5,23,41)",fontSize:15,flex:0.5}}>
                                        ${saleprice}
                                    </Text>
                                    <Text style={{color:"grey",fontSize:15,flex:1,textDecorationLine:"line-through"}}>
                                        ${price}
                                    </Text>
                                </View>
                                <View style={{marginLeft:10,padding:5}}>
                                    <Text style={{color:"rgb(144,222,174)",fontSize:14,fontWeight:"bold"}}>You Save {(discount*100).toPrecision(4)}% (${discountPrice})</Text>
                                </View>
                            </View>
                            
                        :   <View style={{flexDirection:"row",width:"50%",padding:10,marginLeft:5,}}>
                                <Text style={{color:"rgb(5,23,41)",fontSize:15,flex:0.5,fontWeight:"bold"}}>
                                    ${saleprice}
                                </Text>
                            </View>

                }
                
                {   
                    (Attributes.length != 0)
                    ?Attributes.map((att,idx)=>{
                        return(
                            <View key={idx}>
                                <View style={{marginLeft:15}}>
                                    <Text style={{color:"black",fontWeight:"bold",fontSize:19}}>{att.name} :</Text>
                                </View>
                               
                                    <View style={{flexDirection:"row",backgroundColor:"white",marginVertical:5,marginHorizontal:15,borderWidth:0.5,borderColor:"grey"}}>
                                {
                                    att.options.map((option,index)=>{
                                        return(
                                            (index===0)?
                                            <TouchableOpacity style={{flex:1,padding:5,justifyContent:"center",alignItems:"flex-start",backgroundColor:"rgb(5,23,41)"}} onPress={()=>fetchvaritem(Children[0])} key={index}>
                                                <Text style={{fontSize:14,fontWeight:"bold",color:"white"}}>{option}</Text>
                                               
                                            </TouchableOpacity>
                                            :<TouchableOpacity style={{flex:1,padding:5,justifyContent:"center",alignItems:"flex-start",}} onPress={()=>fetchvaritem(Children[0])} key={index}>
                                            <Text style={{fontSize:14,fontWeight:"bold"}}>{option}</Text>
                                           
                                            </TouchableOpacity>
                                        )
                                    })
                                    
                                }
                                    </View>
                                       
                            </View>
                        )
                    })
                    :<View></View>
                }
                
                <View style={{flex:1,padding:15,justifyContent:"flex-start"}}>
                    <Text style={{color:"black",fontSize:19}}>Quantity</Text>
                    <View style={{flexDirection:"row",backgroundColor:"white",padding:5,marginVertical:5,borderWidth:0.5,borderColor:"grey"}}>
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

                <TouchableOpacity style={{backgroundColor:"white",elevation:5,height:40,borderRadius:15,justifyContent:"center"}} onPress={()=>{navigation.navigate("ProductDetails",{"id":route.params.id})}} >
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
                </TouchableOpacity>         
                <TouchableOpacity style={{backgroundColor:"white",elevation:5,height:40,marginTop:10,borderRadius:15,justifyContent:"center"}}>
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
                </TouchableOpacity>                       
            </View>
            </ScrollView>
            <View style={{alignItems:"center",padding:20}}>
                    <TouchableOpacity style={{backgroundColor:'rgb(33,184,97)',borderRadius:10,height:50,width:380,display:"flex",justifyContent:"center",alignItems:"center"}} onPress={()=>{navigation.navigate("Mycart")}}>
                        <Text style={{color:"white",fontSize:16}}>Buy Now</Text>
                    </TouchableOpacity>
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