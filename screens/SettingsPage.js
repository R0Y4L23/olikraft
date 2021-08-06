import React , {useState}from 'react'
import { View, Text,StyleSheet,Switch } from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


export default function SettingsPage() {
    const [toggle, setToggle] = useState(false);

    return (
        <View>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="Settings" />
                
            </Appbar.Header>
            <View style={styles.notification}>
                <Text style={styles.notificationtext}>
                    Notifications
                </Text>
                <Switch
                    trackColor={{false: 'gray', true: 'rgb(201,238,217)'}}
                    thumbColor="white"
                    onValueChange={(value) => setToggle(value)}
                    value={toggle}
                />

            </View>
            <View style={styles.notification}>
                <Text style={styles.notificationtext}>
                   Privacy Policy
                </Text>
                <Ionicons name="chevron-forward-sharp" size={24} color="black" />

            </View>
            <View style={styles.notification}>
                <Text style={styles.notificationtext}>
                    Terms of use
                </Text>
                <Ionicons name="chevron-forward-sharp" size={24} color="black" />

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
    }
 })
