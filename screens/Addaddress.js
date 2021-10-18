import React,{useState,useEffect} from 'react'
import {View,Text,Image,TextInput,Button,TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import PickerModal from 'react-native-picker-modal-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Addaddress({navigation,route}) {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [token,setToken]=useState("")
    const [street,setStreet]=useState("")
    const [building,setBuilding]=useState("")
    const [city, setCity] = useState("")
    const [country,setCountry]=useState("")
    const [zip, setZip] = useState("")
    const [state,setState]=useState("")
    const [phone,setPhone]=useState("")
    const [success,setSuccess]=useState("")
    const [addresstype,setaddresstype]=useState("billing")
    const [countryList,setCountryList]=useState([])
    const [countryKeyList,setCountryKeyList]=useState([])
    const [stateList,setStateList]=useState([])
    const [States, setStates] = useState({})
    const [clist,setclist] = useState([])
    const [slist,setslist] = useState([])
    const [objcountries, setobjcountries] = useState([])
    const [optioncountry,setoptioncountry] = useState("Click to choose")
    const [objstate, setobjstate] = useState([])
    const [optionstate,setoptionstate] = useState("Click to choose")
    const type_of_address = [ {
        Name:'Billing',
        Value:'billing',
        Id:0
    },
    {
        Name:'Shipping',
        Value:'shipping',
        Id:0
    }
]
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
    const saveAddress=async ()=>{

      //  console.log(country,objstate,'%%%%%%%')
        const response = await fetch(`https://olikraft.com/api/letscms/v1/address/${addresstype}`, {
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
            'state':objstate,
            'postcode':zip,
            'phone':phone,
            'address_1':`${building}`,
            'address_2':`${street}`})
          })
          
          return response.json()
      }
      const fetchaddress = async (addresstype) =>{
        let token = await getData()
        console.log("https://olikraft.com/api/letscms/v1/address/" + addresstype)
        await fetch("https://olikraft.com/api/letscms/v1/address/" + addresstype ,{
            headers:{
                letscms_token:token
            }
        })
        .then(response => response.json())
        .then((res) => {
            setclist(res.data.countries)
            setslist(res.data.states)
            var values = Object.keys(res.data.countries).map(function (key) { return res.data.countries[key]; });
            console.log(values.length,": Total Countries")
            const keys=Object.keys(res.data.countries)
            setCountryKeyList(keys)
            setCountryList(values)
            let o=[]
            for(let i = 0; i< values.length; i++)
            {
                let obj = {}
                obj["Name"] = values[i]
                obj["Value"] = values[i]
                obj["Id"] = i
                o.push(obj)
            }
            setobjcountries(o)
        })
        .catch(error => console.log(error))
    }

    const getStates=(index)=>{
        if(!Array.isArray(slist[countryKeyList[index]])&&slist[countryKeyList[index]]!=undefined)
        {
          setStates(slist[countryKeyList[index]])
          const stateValues=Object.keys(slist[countryKeyList[index]]).map(function (key) { return slist[countryKeyList[index]][key]; })
          setStateList(stateValues)
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
           console.log(stateValues)
          
        }
        else{
          setStateList([])
        }
    }

    const getStatecode = (statevalue) =>{
      setState(Object.keys(States).find(key => States[key] === statevalue))
    }
    const getCountrycode = (countryvalue) =>{
      setCountry(Object.keys(clist).find(key => clist[key] === countryvalue))
      let c=Object.keys(clist).find(key => clist[key] === countryvalue)
      if (
        typeof slist[c] === 'object' &&
        !Array.isArray(slist[c]) &&
        slist[c] !== null
    ) 
    {
        let a=Object.values(slist[c])
        let o=[]
        for(let i=0;i<a.length;i++)
        {

            let obj = {}
            obj["Name"] =  a[i]
            obj["Value"] =  a[i]
            obj["Id"] = i
            o.push(obj)
        }
      //  console.log(o)
        setobjstate(o)
    }
    else{
        setobjstate([])
        setoptionstate("Click To Choose")
    }
    }
    const onSelectedcountry =(selected)=> {
        // this.setState({ selectedItem: selected });
       // console.log(selected.Name)
        setoptioncountry(selected.Name)
        // matchvardetails(selected.Name,att.name)
        getCountrycode(selected.Name);
       // getStates(selected.Id);
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

    const onSelectedaddresstype =(selected)=> {
        console.log(selected.Name,"^^^^^^^^^^^^^^^^")
        setaddresstype(selected.Value)
        fetchaddress(selected.Value)
        return selected;
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
        fetchaddress("billing")
        
        
    },[])
    return (
           <View style={styles.container}>
               {/* {console.log(objstate)} */}
               <View>
                <Appbar.Header style = {styles.item}>
                        <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}}/>
                        <Appbar.Content title={`Add ${addresstype} Address`} titleStyle={styles.title}/>
                    </Appbar.Header>
                </View>
                <ScrollView style={{flex:1}}>
                    
                 <View style={styles.content}>
                 <Text>Type of Address</Text>
                    <View style={styles.form}>
                    <PickerModal
                            renderSelectView={(disabled, selected, showModal) =>
                                <View style={{flex:1,justifyContent:"center",backgroundColor:"rgb(5,23,41)"}}>
                                    <Button title={addresstype||"Select"} onPress={showModal} color={"rgb(5,23,41)"} />
                                </View>
                                }
                                onSelected={onSelectedaddresstype}
                                items={type_of_address}
                                showToTopButton={true}
                                selected={null}
                                selectPlaceholderText={'Choose one...'}
                                onEndReached={() => console.log('list ended...')}
                                searchPlaceholderText={'Search...'}
                                requireSelection={false}
                                autoSort={false}
                        />
                        
                    </View>
                   <Text>Street name</Text>
                    <View style={styles.form}>    
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setStreet} placeholder="Enter here..." />
                    </View>
                    <Text>Building</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white",textAlignVertical:"top"}} onChangeText={setBuilding} placeholder="Enter here..." />
                    </View>
                    <Text>City</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setCity}  placeholder="Enter here..."  />
                    </View>
                    <Text style={{marginVertical:5}}>Country</Text>
                    
                    <View style={styles.form,{backgroundColor:"rgb(249,249,249)"}}>
                    <PickerModal
                            renderSelectView={(disabled, selected, showModal) =>
                                <View style={{flex:1,justifyContent:"center",backgroundColor:"rgb(5,23,41)"}}>
                                    <Button title={optioncountry||"Click to Choose"} onPress={showModal} color={"rgb(5,23,41)"} />
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
                        <PickerModal
                                renderSelectView={(disabled, selected, showModal) =>
                                    <View style={{width:"50%",justifyContent:"center"}}>
                                        <Button title={optionstate||"Select State"} onPress={showModal} color={"rgb(5,23,41)"} disabled={objstate.length===0}/>
                                    </View>
                                    }
                                    onSelected={onSelectedstate}
                                    // onBackButtonPressed={this.onBackButtonPressed.bind(this)}
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
                            
                        <TextInput style={{ height: 40,padding: 10,marginLeft:5,backgroundColor:"white"}} onChangeText={setZip} placeholder="Enter here..." />
                    </View> 
                    <Text>Phone</Text>
                    <View style={styles.form}>
                        <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setPhone}  placeholder="Enter here..." keyboardType="number-pad" />
                    </View>

                    
                    <Text style={{textAlign:"center",color:"green"}}>{success}</Text>
                </View> 
                </ScrollView>
              
                <View style={styles.button}> 
                <TouchableOpacity style={styles.cancel} onPress={()=>{navigation.navigate("ManageAddress")}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send} onPress={()=>{saveAddress().then((data)=>{console.log(data),alert("Address Added Successfully");navigation.navigate("Home")})}}>
                            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Save</Text>
                        </TouchableOpacity>
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
        backgroundColor:"white",
        borderRadius:8,
        borderWidth:0.5,
        // padding:10,
        marginVertical:10,
        borderColor:"grey",
    },
    button:{
        backgroundColor:"white",
        elevation:5,
        borderColor:"grey",
        flexDirection:"row",
        paddingVertical:20,
        paddingHorizontal:10
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
