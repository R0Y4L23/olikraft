import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons} from '@expo/vector-icons';
export default function MyOrders() {
    return (
        <View>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="My Orders" titleStyle={styles.title}/>
                <Ionicons style={styles.edit} name="search" size={24} color="white" />
            </Appbar.Header>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="My Orders" titleStyle={styles.title}/>
                <Ionicons style={styles.edit} name="search" size={24} color="white" />
            </Appbar.Header>
        </View>
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)'
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
    
})
