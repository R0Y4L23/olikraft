import React,{useState,useEffect} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, StyleSheet, ScrollView} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Address({navigation,route}) {
    const [name,setName]=useState(`${route.params.data.first_name} ${route.params.data.last_name}`)
    const [email,setEmail]=useState(route.params.data.email)
    const [token,setToken]=useState("")
    const [street,setStreet]=useState(route.params.data.address_1.split(", ")[0])
    const [building,setBuilding]=useState(route.params.data.address_1.split(", ")[1])
    const [city, setCity] = useState(route.params.data.city)
    const [country,setCountry]=useState(route.params.data.country)
    const [zip, setZip] = useState(route.params.data.postcode)
    const [state,setState]=useState(route.params.data.state)
    const [phone,setPhone]=useState(route.params.data.phone)
    const [success,setSuccess]=useState("")
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
            'address_1':`${building}, ${street}, ${city}-${zip}, ${state}, ${country}`,
            'address_2':`${building}, ${street}, ${city}-${zip}, ${state}, ${country}`})
          })
          return response.json()
      }
      useEffect(()=>{
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
    },[])
    return (
           <View style={styles.container}>
                <Appbar.Header style = {styles.item}>
                        <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}}/>
                        <Appbar.Content title={`Add ${route.params.name} Address`} titleStyle={styles.title}/>
                    </Appbar.Header>
                <ScrollView>
                 <View style={styles.content}>
                   <Text>Street name</Text>
                    <View style={styles.form}>    
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setStreet} value={street} placeholder="Enter here..." />
                    </View>
                    <Text>Building</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white",textAlignVertical:"top"}} onChangeText={setBuilding} value={building} placeholder="Enter here..." />
                    </View>
                    <Text>City</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setCity} value={city} placeholder="Enter here..."  />
                    </View>
                    <Text>State</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setState} value={state} placeholder="Enter here..."  />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{flex:1}}>Country</Text>
                        <Text style={{flex:1}}>Postal/Zip code</Text>
                    </View>
                    <View style={styles.country}>    
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white",flex:1,borderColor:"grey",}} onChangeText={setCountry} value={country} placeholder="Enter here..."/>
                        <Entypo name="triangle-down" size={24} color="black" />
                        <TextInput style={{ height: 40,padding: 10,marginLeft:5,backgroundColor:"white",flex:1}} onChangeText={setZip} value={zip} placeholder="Enter here..." />
                    </View> 
                    <Text>Phone</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setPhone} value={phone} placeholder="Enter here..." keyboardType="number-pad" />
                    </View>
                    <Text style={{textAlign:"center",color:"green"}}>{success}</Text>
                </View> 
                </ScrollView>
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel} onPress={()=>{navigation.navigate("ManageAddress")}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send} onPress={()=>{saveAddress().then((data)=>{console.log(data);setSuccess("Saved Successfully");})}}>
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
        backgroundColor:"white",
        borderRadius:8,
        borderWidth:0.5,
        // padding:10,
        marginVertical:10,
        borderColor:"grey",
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