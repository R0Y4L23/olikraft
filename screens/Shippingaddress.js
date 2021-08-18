import React , {useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, AntDesign, EvilIcons} from '@expo/vector-icons';
export default function Shippingaddress({navigation}) {
    const [shad,setshippingAddress]=useState([])
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
    const fetchshippingaddress= async ()=>{
        let token = await getData()
        fetch(/*"https://olikraft.shubhchintak.co/api/letscms/v1/address/shipping"*/"https://olikraft.shubhchintak.co/api/letscms/v1/address/billing",{
            headers:{
                letscms_token:token
            }
        })
        .then(response => response.json())
        .then((res) => {
            // console.log(res.data.countries)
            setshippingAddress(res.data.address)
            // setCountrylist(res.data.countries)
            // setStatelist(res.data.states)
            // setState(res.data.address.state)
            // setCountry(res.data.address.country)
        })
        .catch(error => console.log(error))
    
    }
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //      fetchshippingaddress()
    //     });
    //     return unsubscribe;
    //   }, [navigation]);
      useEffect(()=>{fetchshippingaddress()},[])
    return (
        <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
            <View style={{flexDirection:"row"}}>
                <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10,fontWeight:"bold",color:"black"}}>Shipping Address</Text>
                 <View style={{marginTop:10,marginRight:15}}>
                    <EvilIcons name="pencil" size={30} color="black" onPress={()=>{navigation.navigate("Address",{"name" :"Shipping"})}}/>
                </View>
            </View>
            <Card.Content style={{marginTop:10}}>
                <Paragraph style={{fontSize:12,}}>{shad.first_name} {shad.last_name}</Paragraph>
                <Paragraph style={{fontSize:12,}}>{shad.address_1}</Paragraph>
                <Paragraph style={{fontSize:12,}}>{shad.address_2}</Paragraph>
                <Paragraph style={{fontSize:12,}}>{shad.city} {shad.postcode}</Paragraph>
                {/* <Paragraph style={{fontSize:12}}>{Statelist[country][State]},{countrylist[country]}. </Paragraph> */}
            </Card.Content>
        </Card>
    )
}
