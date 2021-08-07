import React,{useState} from 'react'
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from "react-native"

import { Ionicons, Feather } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
export default function Changepass() {
    const [oldpass, setOldpass] = useState("")
    const [newpass, setNewpass] = useState("")
    const [confirmpass,setConfirmpass]=useState("")
    const [hideoldPass, setHideoldPass] = useState(true);
    const [hidenewPass, setHidenewPass] = useState(true);
    const [hideconfirmPass, setHideconfirmPass] = useState(true);
    return (
       
           <View style={styles.container}>
                <Appbar.Header style = {styles.item}>
                        <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                        <Appbar.Content title="Change Password" titleStyle={styles.title}/>
                        
                    </Appbar.Header>
                <View style={styles.content}>
                    <Text>Old Password</Text>
                    <View style={styles.form}>
                        
                        <TextInput  style={{ height: 40,padding: 10,backgroundColor:"white",width:"90%"}}  secureTextEntry={hideoldPass ? true : false} onChangeText={setOldpass} value={oldpass}/>
                        <Feather style={{marginTop:5}}name={hideoldPass ? 'eye-off' : 'eye'} size={24} color="grey"  onPress={() => setHideoldPass(!hideoldPass)} />
        
                    </View>
                    
                    <Text>New Password</Text>
                    <View style={styles.form}>
                        
                        <TextInput  style={{ height: 40,padding: 10,backgroundColor:"white",width:"90%"}}  secureTextEntry={hidenewPass ? true : false} onChangeText={setNewpass} value={newpass}/>
                        <Feather style={{marginTop:5}}name={hidenewPass ? 'eye-off' : 'eye'} size={24} color="grey"  onPress={() => setHidenewPass(!hidenewPass)} />
        
                    </View>
                    
                    <Text>Confirm Password</Text>
                    <View style={styles.form}>
                        
                        <TextInput  style={{ height: 40,padding: 10,backgroundColor:"white",width:"90%"}}  secureTextEntry={hideconfirmPass ? true : false} onChangeText={setConfirmpass} value={confirmpass}/>
                        <Feather style={{marginTop:5}}name={hideconfirmPass ? 'eye-off' : 'eye'} size={24} color="grey"  onPress={() => setHideconfirmPass(!hideconfirmPass)} />
        
                    </View>
                   
                    <View style={{marginTop:"10%"}}>
                        <Text style={styles.title}>
                            Password Should be
                        </Text>
                        <View style={{marginTop:10}}>
                            <Text style={{color:"grey"}}>
                                - Is longer than 7 characters
                            </Text>
                            <Text style={{color:"grey"}}>
                                - Does not match your old Username and Password
                            </Text>
                            <Text style={{color:"grey"}}>
                                - Is not a common password
                            </Text>
                        </View>
                    </View>
                    
                </View>
                <View style={styles.buttoncontainer}>
                        <View style={styles.button}> 
                                <TouchableOpacity style={styles.cancel}>
                                    <Text style={{fontSize:17,fontWeight:"bold"}}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.send}>
                                    <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Change</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
       </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
        // backgroundColor:"red",
        height:"100%"
    },
    item: {
       backgroundColor : 'rgb(5,23,41)'
    },
    icon: {
        marginLeft: 20
    },

    title:{
        fontSize:17
    },
    content:{
        
       padding:20
    },

    form:{
        backgroundColor:"white",
        borderRadius:8,
        borderWidth:0.5,
        marginVertical:10,
        borderColor:"grey",
        flexDirection:"row",
        
        
    },
    buttoncontainer:{
        backgroundColor:"rgb(249,249,249)",
        flex:1,
        justifyContent:"flex-end",
        marginBottom:18,
       
    },

    button:{
        backgroundColor:"white",
        borderTopWidth:1,
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