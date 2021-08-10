import React, {useState} from 'react'
import { View, Text , TouchableOpacity, StyleSheet, TextInput, ImageBackground} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons, MaterialIcons ,Feather} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
export default function Editprofile() {
    const [hidecountry, setHidecountry] = useState(true);
    return (
        <View>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="Profile" titleStyle={styles.title}/>
                
            </Appbar.Header>
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
                <TextInput style={{ height: 40,paddingLeft:10,}}  value="John Doe" placeholder="Full Name"  />
                </View>
                
                <Text style={styles.name} >Email</Text>
                <View style={styles.form}>
                    <TextInput style={{ height: 40,paddingLeft:10,}}  value="johndoe152@gmail.com" placeholder="Email" />
                </View>               
               
                <Text style={styles.name}>Contact No#</Text>
                <View style={styles.form}>
                    
                    <TextInput style={{ height: 40,paddingLeft:10}}  value="+65"/><View style={{borderRightWidth:0.5,borderRadius:8,marginRight:20}}>
                    <Entypo name="triangle-down" size={24} color="grey" style={{marginTop:8}}/></View>
                    <TextInput style={{ height: 40,paddingLeft:10,}}  value="5685 5685" />
                    
                    
                </View>
                
                <Text style={styles.name}>Country</Text>
                <View style={styles.form}>
                    <TextInput style={{ height: 40,flex:1,paddingLeft:10,}}  value="India" secureTextEntry={hidecountry ? true : false} placeholder="Enter here..." />
                    <Feather style={{margin:10}}name={hidecountry ? 'eye-off' : 'eye'} size={20} color="black"  onPress={() => setHidecountry(!hidecountry)} />
                </View>

                <Text style={{textDecorationLine:"underline",color:"rgb(5,23,41)",textAlign:"right",marginTop:5}}>Change Password</Text>
            
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}> 
                    <TouchableOpacity style={styles.cancel}>
                        <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.send}>
                        <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Save</Text>
                    </TouchableOpacity>
                </View>
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
     flexDirection:"row",
     backgroundColor:"white",
     borderRadius:8,
     borderWidth:0.3,
     
     marginVertical:10,
     borderColor:"grey",   
    },

    buttoncontainer:{
        marginTop:25,
        
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