import React,{useState,useEffect} from 'react'
import { View, Text, SliderBase } from 'react-native'
import { EvilIcons} from '@expo/vector-icons';
import { Card, Paragraph, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Showcountrystate from './Showcountrystate';

export default function Billingaddress({navigation,updateba}) {
    const [ad,setAddress]=useState([])
    const [countrylist,setCountrylist] = useState([])
    const [Statelist,setStatelist] = useState([])
    const [country,setCountry] = useState([])
    const [State,setState] = useState([])
    const [isaddressfetched,  setisaddressfetched] = useState(false)
    const [rendercomplete, setrendercomplete] = useState(false)
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

      const updateaddressfetched = () =>{
        setisaddressfetched(false)
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
                if(typeof res.data.address.country != "undefined"){
                    setAddress(res.data.address)
                    setCountrylist(res.data.countries)
                    setStatelist(res.data.states)
                    setState(res.data.address.state)
                    setCountry(res.data.address.country)
                    setisaddressfetched(true)
                    setrendercomplete(true)
                    updateba()
                }
                else{
             
                    setrendercomplete(true)

                }

            })
            .catch(error => console.log(error))
        }
  
      useEffect(()=>{

                fetchbillingaddress()
            
            
        },[])
    return (
        <View>
  
           {(country.length>0 && State.length>0 )&& rendercomplete && <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,fontWeight:"bold",marginLeft:16,marginTop:10,color:"black"}}>Billing Address</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" onPress={()=>{navigation.navigate("Address",{"name" :"billing","data":ad,"clist":countrylist,"slist":Statelist})}}/>
                    </View>
                </View>
                <Card.Content style={{marginTop:10}}>
                    <Paragraph style={{fontSize:12,}}>{ad.first_name} {ad.last_name} </Paragraph>
                    <Paragraph style={{fontSize:12,}}>{ad.address_1} </Paragraph>
                    <Paragraph style={{fontSize:12,}}>{ad.address_2} </Paragraph>
                    <Paragraph style={{fontSize:12,}}>{ad.city} {ad.postcode}</Paragraph>
                    <Showcountrystate country={country} state={State} countrylist={countrylist} statelist={Statelist} updateaddressfetched={updateaddressfetched} isaddressfetched={isaddressfetched} />
                </Card.Content>
            </Card>}
            {
                rendercomplete === false && <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <ActivityIndicator animating={true} color={"blue"} size="small"/>
                </Card>
            }
        </View>
    )
}
