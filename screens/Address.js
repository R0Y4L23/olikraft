import React,{useState,useEffect} from 'react'
import {View,Text,Image,Button,TextInput,TouchableOpacity, StyleSheet, ScrollView} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
import PickerModal from 'react-native-picker-modal-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker';
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
    const [objcountries, setobjcountries] = useState([])
    const [optioncountry,setoptioncountry] = useState("Click to choose")
    const [objstate, setobjstate] = useState([])
    const [optionstate,setoptionstate] = useState("Click to choose")
    const saveAddress=async ()=>{
        const response = await fetch(`https://olikraft.com/api/letscms/v1/address/${route.params.name}`, {
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
            setoptionstate("Click to Choose")
            // console.log(stateValues)
            for(let i = 0; i< stateValues.length; i++)
            {
                let obj = {}
                obj["Name"] =  stateValues[i]
                obj["Value"] =  stateValues[i]
                obj["Id"] = i
                // console.log(obj)
                // setobjoptions([...objoptions, obj]);
                if(objstate.includes(obj) === false)
                {   
                    objstate.push(obj)
                }
            }
          }
          else{
            setStateList([])
            setoptionstate("No states available")
          }
      }

      const getStatecode = (statevalue) =>{
        setState(Object.keys(States).find(key => States[key] === statevalue))
      }
      const getCountrycode = (countryvalue) =>{
        setCountry(Object.keys(route.params.clist).find(key => route.params.clist[key] === countryvalue))
      }
      const onSelectedcountry =(selected)=> {
        // this.setState({ selectedItem: selected });
        console.log(selected.Name)
        setoptioncountry(selected.Name)
        // matchvardetails(selected.Name,att.name)
        getCountrycode(selected.Name);getStates(selected.Id)
        return selected;
    }
    const onSelectedstate =(selected)=> {
        // this.setState({ selectedItem: selected });
        console.log(selected.Name)
        setoptionstate(selected.Name)
        // matchvardetails(selected.Name,att.name)
        getStatecode(selected.Name)
        return selected;
    }
      useEffect(()=>{
          const getCountries=()=>{
            // console.log(route.params.clist)
          var values = Object.keys(route.params.clist).map(function (key) { return route.params.clist[key]; });
          const keys=Object.keys(route.params.clist)
          setCountryKeyList(keys)
          setCountryList(values)
          for(let i = 0; i< values.length; i++)
            {
                let obj = {}
                obj["Name"] = values[i]
                obj["Value"] = values[i]
                obj["Id"] = i
                // console.log(obj)
                // setobjoptions([...objoptions, obj]);
                if(objcountries.includes(obj) === false)
                {   
                    objcountries.push(obj)
                }
            }
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
                       <Text style={{marginVertical:5}}>Country</Text>
                       <View style={styles.form,{backgroundColor:"rgb(249,249,249)"}}>
                           <PickerModal renderSelectView={(disabled, selected, showModal)=>
                               <View style={{flex:1,justifyContent:"center",backgroundColor:"rgb(5,23,41)"}}>
                                    <TouchableOpacity onPress={showModal}>
                                        <Text style={{color:"white",textAlign:"center",textTransform:"uppercase",paddingVertical:10}}>{optioncountry||"Click to Choose"}</Text>
                                    </TouchableOpacity>
                               </View>
                               }
                               onSelected={onSelectedcountry}
                               items={objcountries}
                               sortingLanguage={'tr'}
                               showToTopButton={true}
                               selected={null}
                               showAlphabeticalIndex={true}
                               autoGenerateAlphabeticalIndex={true}
                               selectPlaceholderText={'Choose one...'}
                               onEndReached={() => console.log('list ended...')}
                               searchPlaceholderText={'Search...'}
                               requireSelection={false}
                               autoSort={false}
                               />
                       </View>
                       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                           <Text style={{flex:1}}>State</Text>
                           <Text style={{flex:1}}>Postal/Zip code</Text>
                       </View>
                       <View style={styles.country}>
                           <PickerModal renderSelectView={(disabled, selected, showModal)=>
                               <View style={{width:"50%",backgroundColor:"rgb(5,23,41)"}}>
                                   <TouchableOpacity onPress={showModal} disabled={stateList.length===0}>
                                        <Text style={{color:"white",textAlign:"center",textTransform:"uppercase",paddingVertical:10}}>{optionstate||"Click to Choose"}</Text>
                                    </TouchableOpacity>
                               </View>
                               }
                               onSelected={onSelectedstate}
                               items={objstate}
                               sortingLanguage={'tr'}
                               showToTopButton={true}
                               selected={null}
                               showAlphabeticalIndex={true}
                               autoGenerateAlphabeticalIndex={true}
                               selectPlaceholderText={'Choose one...'}
                               onEndReached={() => console.log('list ended...')}
                               searchPlaceholderText={'Search...'}
                               requireSelection={false}
                               autoSort={false}
                               />
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
                       <TouchableOpacity style={styles.send} onPress={async ()=>{await saveAddress();alert("Address Saved Successfully");navigation.navigate("ManageAddress")}}>
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
       backgroundColor : 'rgb(5,23,41)',height:Platform.OS === 'android' ? 35 :55
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