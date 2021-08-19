import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { EvilIcons} from '@expo/vector-icons';
import { Card, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Billingaddress({navigation}) {
    const [ad,setAddress]=useState([])
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
    const fetchbillingaddress = async () =>{
            let token = await getData()
            await fetch("https://olikraft.shubhchintak.co/api/letscms/v1/address/billing",{
                headers:{
                    letscms_token:token
                }
            })
            .then(response => response.json())
            .then((res) => {
                // console.log(res.data.countries)
                setAddress(res.data.address)
                // setCountrylist(res.data.countries)
                // setStatelist(res.data.states)
                // setState(res.data.address.state)
                // setCountry(res.data.address.country)
            })
            .catch(error => console.log(error))
        }
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       fetchbillingaddress()
    //     });
    //     return unsubscribe;
    //   }, [navigation]);
      useEffect(()=>{fetchbillingaddress()},[])
    return (
            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,fontWeight:"bold",marginLeft:16,marginTop:10,color:"black"}}>Billing Address</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" onPress={()=>{navigation.navigate("Address",{"name" :"billing","data":ad})}}/>
                    </View>
                </View>
                {ad&&<Card.Content style={{marginTop:10}}>
                    <Paragraph style={{fontSize:12,}}>{ad.first_name} {ad.last_name} </Paragraph>
                    <Paragraph style={{fontSize:12,}}>{ad.address_1} </Paragraph>
                    <Paragraph style={{fontSize:12,}}>{ad.address_2} </Paragraph>
                    <Paragraph style={{fontSize:12,}}>{ad.city} {ad.postcode}</Paragraph>
                    {/* <Paragraph style={{fontSize:12}}>{Statelist[country][State]},{countrylist[country]}. </Paragraph> */}
                </Card.Content>}
            </Card>
    )
}
