import React, {useState} from 'react'
import { View, Text , Image, StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons, MaterialIcons ,Feather} from '@expo/vector-icons';

export default function Profile({navigation}) {
    const [hidecountry, setHidecountry] = useState(true);
    return (
        <View>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="Profile" titleStyle={styles.title}/>
                <TouchableOpacity onPress={()=>{navigation.navigate("Editprofile")}}>
                <MaterialIcons style={styles.edit} name="edit" size={24} color="white" />
                </TouchableOpacity>
            </Appbar.Header>
            
            <Image source={require('../assets/profile.png')} style={{height:"30%",width:"100%",opacity:0.75}} />
            
            <View style={{padding:15}}>
              
                <Text style={styles.name}>Full Name</Text>
                <TextInput style={{ height: 40}}  value="John Doe" placeholder="Full Name"  />
               
                    
                
                <Text style={styles.name} >Email</Text>
                <TextInput style={{ height: 40}}  value="johndoe152@gmail.com" placeholder="Email" />
               
                
                <Text style={styles.name}>Contact No#</Text>
                <TextInput style={{ height: 40}}  value="+65 5685 5685" placeholder="Enter here..." />
              
                <Text style={styles.name}>Country</Text>
                <View style={styles.form}>
                    <TextInput style={{ height: 40,flex:1}}  value="India" secureTextEntry={hidecountry ? true : false} placeholder="Enter here..." />
                    <Feather style={{marginTop:5}}name={hidecountry ? 'eye-off' : 'eye'} size={20} color="black"  onPress={() => setHidecountry(!hidecountry)} />
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate("Changepass")}}>
                <Text style={{textDecorationLine:"underline",color:"rgb(5,23,41)"}}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)'
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