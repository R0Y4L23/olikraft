import React,{useState,useEffect} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, StyleSheet, ScrollView} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
export default function Address({navigation,route}) {
    const [name,setName]=useState(`${route.params.data.first_name} ${route.params.data.last_name}`)
    const [email,setEmail]=useState(route.params.data.email)
    const [token,setToken]=useState("")
    const [street,setStreet]=useState(route.params.data.address_2)
    const [building,setBuilding]=useState(route.params.data.address_1)
    const [city, setCity] = useState(route.params.data.city)
    const [country,setCountry]=useState(route.params.data.country)
    const [zip, setZip] = useState(route.params.data.postcode)
    const [state,setState]=useState(route.params.data.state)
    const [phone,setPhone]=useState(route.params.data.phone)
    const [success,setSuccess]=useState("")
    const [countryList,setCountryList]=useState([])
    const [countryKeyList,setCountryKeyList]=useState([])
    const [stateList,setStateList]=useState([])
    const [States, setStates] = useState({})
    const saveAddress=async ()=>{
        const response = await fetch(`https://olikraft.shubhchintak.co/api/letscms/v1/address/${route.params.name}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'letscms_token':token
            },
            body: JSON.stringify({ 
            'first_name' : name.split(" ")[0],
            'last_name' : name.split(" ")[1],
            'email' : email,
            'country':country,
            'city':city,
            'state':state,
            'postcode':zip,
            'phone':phone,
            'address_1':`${building}`,
            'address_2':`${street}`})
          })
          return response.json()
      }
      const getStates=(index)=>{
          if(!Array.isArray(route.params.slist[countryKeyList[index]])&&route.params.slist[countryKeyList[index]]!=undefined)
          {
            setStates(route.params.slist[countryKeyList[index]])
            const stateValues=Object.keys(route.params.slist[countryKeyList[index]]).map(function (key) { return route.params.slist[countryKeyList[index]][key]; })
            setStateList(stateValues)
            // console.log(stateValues)
            
          }
          else{
            setStateList([])
          }
      }

      const getStatecode = (statevalue) =>{
        setState(Object.keys(States).find(key => States[key] === statevalue))
      }

      const getCountrycode = (countryvalue) =>{
        setCountry(Object.keys(route.params.clist).find(key => route.params.clist[key] === countryvalue))
      }
      useEffect(()=>{
          const getCountries=()=>{
            // console.log(route.params.clist)
          var values = Object.keys(route.params.clist).map(function (key) { return route.params.clist[key]; });
          const keys=Object.keys(route.params.clist)
          setCountryKeyList(keys)
          setCountryList(values)
          }
        const getProfileData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('profileData')
              const token2=await AsyncStorage.getItem('token')
              if(jsonValue&&token2)
              {
                  let data=JSON.parse(jsonValue)
                  setName(data.display_name)
                  setEmail(data.user_email)
                  setToken(token2)
              }
            } catch(e) {
             console.log(e)
            }
        }
        getProfileData()
        getCountries()
    },[])
    return (
           <View style={styles.container}>
               <Appbar.Header style={styles.item}>
                   <Ionicons style={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>
                       {navigation.goBack()}}/>
                       <Appbar.Content title={`Edit ${route.params.name} Address`} titleStyle={styles.title} />
               </Appbar.Header>
               <ScrollView>
                   <View style={styles.content}>
                       <Text>Street name</Text>
                       <View style={styles.form}>
                           <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setStreet}
                               value={street} placeholder="Enter here..." />
                       </View>
                       <Text>Building</Text>
                       <View style={styles.form}>
                           <TextInput style={{ height: 40,padding: 10,backgroundColor:"white",textAlignVertical:"top"}}
                               onChangeText={setBuilding} value={building} placeholder="Enter here..." />
                       </View>
                       <Text>City</Text>
                       <View style={styles.form}>
                           <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setCity}
                               value={city} placeholder="Enter here..." />
                       </View>
                       <Text>State</Text>
                       <View style={styles.form,{backgroundColor:"rgb(249,249,249)"}}>
                           <Picker selectedValue={state} onValueChange={(itemValue, itemIndex)=>{getStatecode(itemValue)}} style={{height:60,flex:1}}>
                               {stateList.length>0&&stateList.map((i,idx)=>{return  <Picker.Item label={i} value={i} key={idx}/>})}
                               {stateList.length==0&&<Picker.Item label={"No States Available"} value={""}/>}
                           </Picker>
                       </View>
                       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                           <Text style={{flex:1}}>Country</Text>
                           <Text style={{flex:1}}>Postal/Zip code</Text>
                       </View>
                       <View style={styles.country}>
                           <Picker selectedValue={country} onValueChange={(itemValue, itemIndex)=>{getCountrycode(itemValue);getStates(itemIndex)}} style={{height:40,flex:1}}>
                               {countryList.length>0&&countryList.map((i,idx)=>{return  <Picker.Item label={i} value={i} key={idx}/>})}
                           </Picker>
                           <TextInput style={{ height: 40,padding: 10,marginLeft:5,backgroundColor:"white",flex:1}}
                               onChangeText={setZip} value={zip} placeholder="Enter here..." />
                       </View>
                       <Text>Phone</Text>
                       <View style={styles.form}>
                           <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setPhone}
                               value={phone} placeholder="Enter here..." keyboardType="number-pad" />
                       </View>
                       <Text style={{textAlign:"center",color:"green"}}>{success}</Text>
                   </View>
               </ScrollView>
               <View style={styles.buttoncontainer}>
                   <View style={styles.button}>
                       <TouchableOpacity style={styles.cancel} onPress={()=>{navigation.navigate("ManageAddress")}}>
                           <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.send} onPress={()=>{saveAddress().then((data)=>{alert("Address Saved Successfully");navigation.navigate("ManageAddress")})}}>
                           <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Save</Text>
                       </TouchableOpacity>
                   </View>
               </View>
           </View>
    )
}
const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
        height:"100%",
        flex:1
    },
    item: {
       backgroundColor : 'rgb(5,23,41)',height:35,paddingBottom:17
    },
    icon: {
        marginLeft: 20
    },
    title:{
        fontSize:17
    },
    content:{
       padding:20,
    },
    form:{
        backgroundColor:"white",
        borderRadius:8,
        borderWidth:0.5,
        // padding:10,
        marginVertical:10,
        borderColor:"grey", 
    },
    country:{
        flexDirection:"row",
        justifyContent:"space-between",
       // backgroundColor:"white",
       // borderRadius:8,
      //  borderWidth:0.5,
        // padding:10,
        marginVertical:10,
       // borderColor:"grey",
    },
    buttoncontainer:{
        backgroundColor:"rgb(249,249,249)",
        flex:1,
        justifyContent:"flex-end",
        position:"absolute",
        bottom:0,
        width:"100%" 
    },
    button:{
        backgroundColor:"white",
        elevation:5,
        borderColor:"grey",
        flexDirection:"row",
        padding:15
    },
    cancel:{
        backgroundColor:"white",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    send:{
        backgroundColor:"rgb(33,184,97)",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})