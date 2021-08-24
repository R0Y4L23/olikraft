import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const Confirmation = ({navigation}) => {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f9f9f9"}}>
            <Image style={{width:100,height:100}} source={require("../assets/check.png")}/> 
            <Text style={{fontSize:30,marginTop:90,marginBottom:30}}>Congratulations!</Text>
            <Text style={{color:"grey"}}>Your account has been created successfully.</Text>
            <Text style={{color:"grey",marginBottom:90}}>We'll keep you posted on latest offers</Text>
            <TouchableOpacity style={{backgroundColor:"#21b861",height:40,width:300,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'row'}} onPress={()=>{navigation.reset({index: 0,routes: [{name: 'BNS'}]});}}>
                   <Text style={{color:"white",fontSize:16}}>Let's Get Started</Text><AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
export default Confirmation