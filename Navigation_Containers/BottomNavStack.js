import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {View,Text,TouchableOpacity} from "react-native"
import { Divider } from 'react-native-paper';
import Home from "../screens/Home"
import Products from "../screens/Products"
import Tutorial from "../screens/Tutorials"
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();
const More=({navigation})=>{

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token")
    } catch (e) {
     console.log(e)
    }
  }
  const removeProfileData = async () => {
    try {
      await AsyncStorage.removeItem("profileData")
    } catch (e) {
      console.log(e)
    }
  }
  
  const handleLogout=async ()=>{
    await removeToken()
    await removeProfileData()
    navigation.navigate("Login")
  }

    return(
      <View
      style={{
        backgroundColor: 'white',
        padding: 25,
        height: "auto",
        position:"absolute",
        width:"100%",
        bottom:0,
        borderTopRightRadius:25,
        borderTopLeftRadius:25
      }}
    >
     <TouchableOpacity onPress={()=>{navigation.navigate("Mycart")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >My cart</Text>
     </TouchableOpacity>
     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("MyOrder")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >My Orders</Text>
     </TouchableOpacity>
     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("ManageAddress")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >Manage Address</Text>
     </TouchableOpacity>
     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
     <Text style={{fontSize:18,paddingBottom:11}}>Profile</Text>
     </TouchableOpacity>
     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("ContactUs")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >Contact Us</Text>
     </TouchableOpacity>
     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("Settings")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >Settings</Text>
     </TouchableOpacity>
     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("ProductDetails")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >Product Details</Text>
     </TouchableOpacity>
     <Divider/>
     <TouchableOpacity onPress={handleLogout}>
         <Text style={{fontSize:18,paddingBottom:11}} >Logout</Text>
     </TouchableOpacity>
     {/* <TouchableOpacity onPress={()=>{navigation.navigate("Productsvariable")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >Products variable</Text>
     </TouchableOpacity> */}

     {/* <TouchableOpacity onPress={()=>{navigation.navigate("Orderconfirmation")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >Order Confirmation</Text>
     </TouchableOpacity>
     <Divider/>
     
     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("Myorders")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >My orders</Text>
     </TouchableOpacity>

     <Divider/>
     <TouchableOpacity onPress={()=>{navigation.navigate("Cancelconfirmation")}}>
     <Text style={{fontSize:18,paddingBottom:11}} >Cancel Order</Text>
     </TouchableOpacity> */}
    </View>
    )
}
const BottomNavStack = () => {
    return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({focused})=>{return focused?<Ionicons name="home-outline" size={24} color="#051729" />:<Ionicons name="home-outline" size={24} color="grey" />}}}/>
      <Tab.Screen name="Products" component={Products} options={{tabBarIcon:({focused})=>{return focused?<AntDesign name="inbox" size={24} color="#051729" />:<AntDesign name="inbox" size={24} color="grey" />}}}/>
      <Tab.Screen name="Tutorials" component={Tutorial} options={{tabBarIcon:({focused})=>{return focused?<MaterialCommunityIcons name="note-multiple-outline" size={24} color="#051729" />:<MaterialCommunityIcons name="note-multiple-outline" size={24} color="grey" />}}}/>
      <Tab.Screen name="More" component={More} options={{tabBarIcon:({focused})=>{return focused?<Feather name="more-horizontal" size={24} color="#051729" />:<Feather name="more-horizontal" size={24} color="grey" />}}}/>
    </Tab.Navigator>
    )
}
export default BottomNavStack