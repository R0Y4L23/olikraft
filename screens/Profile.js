import React, {useState,useEffect} from 'react'
import { View, Text , Image, StyleSheet, TextInput,TouchableOpacity,ImageBackground} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons, MaterialIcons ,Feather} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Profile({navigation}) {
    const [hidecountry, setHidecountry] = useState(true);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("") 
    let Image_Http_URL ={ uri: "https://m.media-amazon.com/images/I/71B1FM3ZR-L._SX679_.jpg"};
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         const getProfileData = async () => {
    //             try {
    //               const jsonValue = await AsyncStorage.getItem('profileData')
    //               if(jsonValue)
    //               {
    //                   let data=JSON.parse(jsonValue)
    //                   setName(`${data.first_name} ${data.last_name}`)
    //                   setEmail(data.user_email)
    //               }
    //             } catch(e) {
    //              console.log(e)
    //             }
    //         }
    //         getProfileData()
    //     });
    //     return unsubscribe;
    //   }, [navigation]);
      useEffect(()=>{const getProfileData = async () => {
                     try {
                       const jsonValue = await AsyncStorage.getItem('profileData')
                       if(jsonValue)
                       {
                           let data=JSON.parse(jsonValue)
                           setName(`${data.first_name} ${data.last_name}`)
                           setEmail(data.user_email)
                       }
                     } catch(e) {
                      console.log(e)
                     }
                 }
                 getProfileData()},[])
    return (
        <View>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}}/>
                <Appbar.Content title="Profile" titleStyle={styles.title}/>
                <TouchableOpacity onPress={()=>{navigation.navigate("Editprofile")}}>
                <MaterialIcons style={styles.edit} name="edit" size={24} color="white" />
                </TouchableOpacity>
            </Appbar.Header>
            {/* <Image source={require('../assets/profile.png')} style={{height:"30%",width:"100%",opacity:0.75}} /> */}
            <View style={{width:"100%",height:300}}>
                <ImageBackground source={Image_Http_URL} style={{flex:1,justifyContent:"center"}} imageStyle={{height:280,backgroundColor:"black"}} resizeMode="contain">
                </ImageBackground>
            </View>
            <View style={{flex:1,padding:15,marginLeft:20}}>
                <Text style={styles.name}>Full Name</Text>
                <TextInput style={{ height: 40}}  value={name} placeholder="Full Name"  />
                <Text style={styles.name} >Email</Text>
                <TextInput style={{ height: 40,marginBottom:30}}  value={email} placeholder="Email" />
                {/* <Text style={styles.name}>Country</Text>
                <View style={styles.form}>
                    <TextInput style={{ height: 40,flex:1}}  value="India" secureTextEntry={hidecountry ? true : false} placeholder="Enter here..." />
                    <Feather style={{marginTop:5}}name={hidecountry ? 'eye-off' : 'eye'} size={20} color="black"  onPress={() => setHidecountry(!hidecountry)} />
                </View> */}
                {/* <TouchableOpacity onPress={()=>{navigation.navigate("Changepass")}}>
                <Text style={{textDecorationLine:"underline",color:"rgb(5,23,41)"}}>Change Password</Text>
                </TouchableOpacity> */}
            </View>
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
     flexDirection:"row"
        
    },
})