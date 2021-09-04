import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet , Image, TouchableOpacity, ScrollView} from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Allorders from './Allorders';
import Ontheway from './Ontheway';
import Cancelled from './Cancelled';
import Delievered from './Delievered';
const Tab = createMaterialTopTabNavigator();
export default function MyOrders({navigation}) {

    return (
        
            
            <NavigationContainer independent={true}>
                <Appbar.Header style = {styles.item}>
                    <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}}/>
                    <Appbar.Content title="My Orders" titleStyle={styles.title}/>
                    
                </Appbar.Header>
                <Tab.Navigator  screenOptions={{
                    tabBarLabelStyle: { fontSize: 13,color:"white",textTransform:"none" },
                    
                    tabBarStyle: { backgroundColor: 'rgb(5,23,41)' },
                }}>
                    <Tab.Screen name="All" component={Allorders} />
                    <Tab.Screen name="Delivered" component={Delievered} />
                    <Tab.Screen name="On the way" component={Ontheway} />
                    <Tab.Screen name="Cancelled" component={Cancelled} />
                    
                </Tab.Navigator>
            </NavigationContainer>
     
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)',height:Platform.OS === 'android' ? 35 :55
    },
    icon: {
        marginLeft: 20,
    },

    title:{
        fontSize:17
    },
    edit:{
        marginRight:"3%"
    },
 
    button:{

        borderColor:"grey",
        flexDirection:"row",
        flex:1,
        justifyContent:"center",
        // marginTop:"10%"
       
    },
    total:{
        backgroundColor:"white",
        height:50,
        width:300,
       
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        borderTopWidth:0.5,
        borderRightWidth:0.5,
        borderColor:"grey",
    },
    cancel:{
        backgroundColor:"white",
        height:50,
        width:300,
       
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        borderTopWidth:0.5,
       
        borderColor:"grey",
    },
    send:{
       
        height:50,
        width:300,
        borderRightWidth:0.5,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        borderTopWidth:0.5,
        borderColor:"grey",
    }
    
})
