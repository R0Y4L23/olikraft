import React , {useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { Card, Paragraph, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, AntDesign, EvilIcons} from '@expo/vector-icons';
import Showcountrystate from './Showcountrystate';
export default function Shippingaddress({navigation,updatesa}) {
    const [shad,setshippingAddress]=useState([])
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
    const fetchshippingaddress= async ()=>{
        let token = await getData()
        fetch("https://olikraft.shubhchintak.co/api/letscms/v1/address/shipping",{
            headers:{
                letscms_token:token
            }
        })
        .then(response => response.json())
        .then((res) => {
            // console.log(res.data.address)
  
            setshippingAddress(res.data.address)
            setCountrylist(res.data.countries)
            setStatelist(res.data.states)
            setState(res.data.address.state)
            setCountry(res.data.address.country)
            setisaddressfetched(true)
            setrendercomplete(true)
            updatesa()

        })
        .catch(error => console.log(error))
    
    }
    useEffect(()=>{
          fetchshippingaddress()
     
      
        
      },[])
    return (
        <View>
          {/* {!shad&&<Text>Loading...</Text>} */}
         {shad && rendercomplete&& <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
            <View style={{flexDirection:"row"}}>
                <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10,fontWeight:"bold",color:"black"}}>Shipping Address</Text>
                 <View style={{marginTop:10,marginRight:15}}>
                    <EvilIcons name="pencil" size={30} color="black" onPress={()=>{navigation.navigate("Address",{"name" :"shipping","data":shad,"clist":countrylist,"slist":Statelist})}}/>
                </View>
            </View>
            <Card.Content style={{marginTop:10}}>
                <Paragraph style={{fontSize:12,}}>{shad.first_name} {shad.last_name}</Paragraph>
                <Paragraph style={{fontSize:12,}}>{shad.address_1}</Paragraph>
                <Paragraph style={{fontSize:12,}}>{shad.address_2}</Paragraph>
                <Paragraph style={{fontSize:12,}}>{shad.city} {shad.postcode}</Paragraph>
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
