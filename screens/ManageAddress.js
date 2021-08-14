import React, {useState,useEffect} from 'react'
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons, AntDesign, EvilIcons} from '@expo/vector-icons';
import { Card, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axios = require('axios');
export default function ManageAddress({navigation}) {
    const [ad,setAddress]=useState([])
    const [shad,setshippingAddress]=useState([])
    const [countrylist,setCountrylist] = useState([])
    const [Statelist,setStatelist] = useState([])
    const [country,setCountry] = useState()
    const [State,setState] = useState()
    
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
        
            fetch("https://olikraft.shubhchintak.co/api/letscms/v1/address/billing",{
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

    const fetchshippingaddress= async ()=>{
            let token = await getData()
        
            fetch("https://olikraft.shubhchintak.co/api/letscms/v1/address/shipping",{
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

    useEffect(()=>{
        fetchbillingaddress()
        fetchshippingaddress()
    },[])

    return (

        <View>
           <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}} />
                <Appbar.Content title="Manage Address" titleStyle={styles.title}/>
                {/* <TouchableOpacity onPress={()=>{navigation.navigate("Address")}}>
                <AntDesign style={styles.edit} name="plus" size={24} color="white" />
                </TouchableOpacity> */}
            </Appbar.Header>

            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:22,marginLeft:16,marginTop:10,color:"black"}}>Billing Address</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content style={{marginTop:10}}>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{ad.first_name} {ad.last_name} </Paragraph>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{ad.address_1} </Paragraph>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{ad.address_2} </Paragraph>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{ad.city} {ad.postcode}</Paragraph>
                    {/* <Paragraph style={{fontSize:12}}>{Statelist[country][State]},{countrylist[country]}. </Paragraph> */}
                </Card.Content>
                
            
            </Card>

            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:22,marginLeft:16,marginTop:10,color:"black"}}>Shipping Address</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content style={{marginTop:10}}>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{shad.first_name} {shad.last_name}</Paragraph>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{shad.address_1}</Paragraph>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{shad.address_2}</Paragraph>
                    <Paragraph style={{fontSize:12,fontWeight:"bold"}}>{shad.city} {shad.postcode}</Paragraph>
                    {/* <Paragraph style={{fontSize:12}}>{Statelist[country][State]},{countrylist[country]}. </Paragraph> */}
                </Card.Content>
                
            
            </Card>
            {/* {console.log(Statelist)} */}
        {/* {console.log(countrylist.IN)} */}
            
{/*
            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10}}>John's Home</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content >
         
                    <Paragraph  style={{fontSize:12}}>128, UBI Avenue 4</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 2</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 3</Paragraph>
                </Card.Content>
                
               
            </Card>

            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:22,marginLeft:16,marginTop:10}}>Home</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content>
         
                    <Paragraph style={{fontSize:12}}>128, UBI Avenue 4</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 2</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 3</Paragraph>
                </Card.Content>
                
               
            </Card>
             */}
             {/* <Text>{address.name}</Text> */}
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
    edit:{
        marginRight:"3%"
    },
    
})