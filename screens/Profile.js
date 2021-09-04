import React, {useState,useEffect} from 'react'
import { View, Text , Image, StyleSheet, TextInput,TouchableOpacity,ImageBackground} from 'react-native'
import { Appbar, ActivityIndicator } from 'react-native-paper';
import { Ionicons, MaterialIcons ,Feather} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Profile({navigation}) {
    const [hidecountry, setHidecountry] = useState(true);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("") 
    const [rendercomplete, setrendercomplete] = useState(false)
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
                           setrendercomplete(true)
                       }
                     } catch(e) {
                      console.log(e)
                     }
                 }
                 getProfileData()},[])
    return (
        <View>
            {rendercomplete && <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}}/>
                <Appbar.Content title="Profile" titleStyle={styles.title}/>
                <TouchableOpacity onPress={()=>{navigation.navigate("Editprofile")}}>
                <MaterialIcons style={styles.edit} name="edit" size={24} color="white" />
                </TouchableOpacity>
            </Appbar.Header>}
            {/* <Image source={require('../assets/profile.png')} style={{height:"30%",width:"100%",opacity:0.75}} /> */}
            {rendercomplete && <View style={{width:"100%",height:300}}>
                <ImageBackground source={Image_Http_URL} style={{flex:1,justifyContent:"center"}} imageStyle={{height:280,backgroundColor:"black"}} resizeMode="contain">
                </ImageBackground>
            </View>}
            {rendercomplete && <View style={{flex:1,padding:15,marginLeft:20}}>
                <Text style={styles.name}>Full Name</Text>
                <TextInput style={{ height: 40}}  value={name} placeholder="Full Name"  />
                <Text style={styles.name} >Email</Text>
                <TextInput style={{ height: 40,marginBottom:30}}  value={email} placeholder="Email" />
              
            </View>}
            {
                rendercomplete === false && <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator animating={true} color={"rgb(5,23,41)"} size="large"/>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)',height:Platform.OS === 'android' ? 35 :55
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