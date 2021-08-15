import React, {useState,useEffect} from 'react'
import { View, Text , TouchableOpacity, StyleSheet, TextInput, ImageBackground,ScrollView} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons, MaterialIcons ,Feather} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Editprofile({navigation}) {
    const [hidecountry, setHidecountry] = useState(true);
    const [token,setToken]=useState("")
    const [username,setUsername]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [passVisible,setPassVisible]=useState(false)
    const [confirmPassVisible,setConfirmPassVisible]=useState(false)
    const [confirmPass,setConfirmPass]=useState("")
    const storeProfileData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('profileData', jsonValue)
        } catch (e) {
          console.log(e)
        }
      }
    const changeProfileData=async ()=>{
        const response = await fetch('https://olikraft.shubhchintak.co/api/letscms/v1/account-details', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'letscms_token':token
            },
            body: JSON.stringify({ 
            'first_name' : name.split(" ")[0],
            'last_name' : name.split(" ")[1],
            'display_name' :name,
            'user_email' : email,
            'password' : password,
            'old_password':confirmPass})
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
                  setUsername(data.user_login)
                  setToken(token2)
              }
            } catch(e) {
             console.log(e)
            }
        }
        getProfileData()
    },[])
    return (
        <View>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}}/>
                <Appbar.Content title="Profile" titleStyle={styles.title}/>
            </Appbar.Header>
            <ScrollView>
            <View style={{width:"100%",height:240}}>
                <ImageBackground source={require(`../assets/profile.png`)} style={{flex:1,justifyContent:"center"}} imageStyle={{height:205,backgroundColor:"black"}}>
                    <View style={{flex:1,justifyContent:"flex-end",height:50,alignItems:"flex-end",paddingBottom:15}}>
                        <View style={{backgroundColor:"rgb(5,23,41)",height:50,width:50,justifyContent:"center",alignItems:"center",borderRadius:50,marginRight:20}}>
                            <Entypo name="camera" size={24} color="white" />
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{padding:15}}>
                <Text style={{color:"grey"}}>Full Name</Text>
                <View style={styles.form}>
                 <TextInput style={{ height: 40,paddingLeft:10,}} onChangeText={setName}  value={name} placeholder="Full Name"/>
                </View>
                <Text style={styles.name} >Email</Text>
                <View style={styles.form}>
                    <TextInput style={{ height: 40,paddingLeft:10,}} onChangeText={setEmail}  value={email} placeholder="Email"/>
                </View>               
                {/* <Text style={styles.name}>Country</Text>
                <View style={styles.form}>
                    <TextInput style={{ height: 40,flex:1,paddingLeft:10,}}  value="India" secureTextEntry={hidecountry ? true : false} placeholder="Enter here..." />
                    <Feather style={{margin:10}}name={hidecountry ? 'eye-off' : 'eye'} size={20} color="black"  onPress={() => setHidecountry(!hidecountry)} />
                </View> */}
                <View style={styles.form}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry={!passVisible}/>
                   <Feather name={`${passVisible?"eye-off":"eye"}`} size={35} color="black" style={{flex:1.5}} onPress={()=>{setPassVisible(!passVisible)}}/>
               </View>
               <View style={styles.form}>
                   <TextInput style={{ height: 40,padding: 10,flex:6.5,backgroundColor:"white"}} onChangeText={setConfirmPass} value={confirmPass} placeholder="Old Password" secureTextEntry={!confirmPassVisible}/>
                   <Feather name={`${confirmPassVisible?"eye-off":"eye"}`} size={35} color="black" style={{flex:1.5}} onPress={()=>{setConfirmPassVisible(!confirmPassVisible)}}/>
               </View>
                <Text style={{textDecorationLine:"underline",color:"rgb(5,23,41)",textAlign:"right",marginTop:5}} onPress={()=>{navigation.navigate("Changepass")}}>Change Password</Text>
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}> 
                    <TouchableOpacity style={styles.cancel} onPress={()=>{navigation.goBack()}}>
                        <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.send} onPress={()=>{changeProfileData().then((data)=>{console.log(data.data);storeProfileData(data.data)})}}>
                        <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create ({
    item: {
       backgroundColor : 'rgb(5,23,41)',height:35,paddingBottom:17
    },
    icon: {
        marginLeft: 20
    },
    title:{
        fontSize:17
    },
    name:{
        color:"grey",
        marginTop:10,
    },
    edit:{
        marginRight:"3%"
    },
    form:{
     flexDirection:"row",
     backgroundColor:"white",
     borderRadius:8,
     borderWidth:0.3,
     marginVertical:10,
     borderColor:"grey",   
    },
    buttoncontainer:{
        marginTop:25,
        height:140 
    },
    button:{
        backgroundColor:"white",
        elevation:5,
        borderColor:"grey",
        flexDirection:"row",
        padding:15,
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