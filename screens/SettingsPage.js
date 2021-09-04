import React , {useState}from 'react'
import { View, Text,StyleSheet,Switch,TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
export default function SettingsPage({navigation}) {
    const [toggle, setToggle] = useState(false);
    return (
        <View style={styles.container}>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}} />
                <Appbar.Content title="Settings" titleStyle={styles.title}/>
            </Appbar.Header>
            {/* <View style={styles.notification}>
                <Text style={styles.notificationtext}>
                    Notifications
                </Text>
                <Switch
                    trackColor={{false: 'gray', true: 'rgb(201,238,217)'}}
                    thumbColor="white"
                    onValueChange={(value) => setToggle(value)}
                    value={toggle}
                />
            </View> */}
            <TouchableOpacity onPress={()=>{navigation.navigate("Privacypolicy")}}>
            <View style={styles.notification}>
                <Text style={styles.notificationtext}>
                   Privacy Policy
                </Text>
                <Ionicons name="chevron-forward-sharp" size={24} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Termsofuse")}}>
            <View style={styles.notification}>
                <Text style={styles.notificationtext}>
                    Terms of use
                </Text>
                <Ionicons name="chevron-forward-sharp" size={24} color="black" />
            </View>
            </TouchableOpacity>
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
    notification: {
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        borderColor:"grey",
        borderBottomWidth:1,
        padding:20
    },
    notificationtext:{
        fontSize: 18
    },
    
    title:{
        fontSize:17
    }
 })
