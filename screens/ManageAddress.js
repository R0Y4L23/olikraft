import React, { useState,useEffect }  from 'react'
import { View, Text,StyleSheet  } from 'react-native'
import { Appbar } from 'react-native-paper';
import Billingaddress from './Billingaddress';
import { Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Shippingaddress from './Shippingaddress';

export default function ManageAddress({navigation}) {
    // const [countrylist,setCountrylist] = useState([])
    // const [Statelist,setStatelist] = useState([])
    // const [country,setCountry] = useState()
    // const [State,setState] = useState()
    const [safetched, setsafetched] = useState(false)
    const [bafetched, setbafetched] = useState(false)
    const [showaddicon, setshowaddicon] = useState(true)
    const updateba = () => {
        setbafetched(true)
    }

    const updatesa = () => {
        setsafetched(true)
    }

    useEffect(()=>{
        let mounted = true
        
            if(safetched & bafetched){
                if(mounted){
                setshowaddicon(false)
            }
    }
    return () => mounted = false
    },[safetched,bafetched])
    return (
        <View>
           <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}} />
                <Appbar.Content title="Manage Address" titleStyle={styles.title}/>
                {
                    showaddicon ?
                    <AntDesign style ={{marginRight:10}} name="plus" size={24} color="white" onPress={()=>{navigation.navigate("Addaddress")}} />
                    :
                    <View></View>
                }
            </Appbar.Header>
            
            <Billingaddress navigation={navigation} updateba={updateba}/>
            <Shippingaddress navigation={navigation} updatesa={updatesa}/>
        </View>
    )
}
const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)',height:35,paddingBottom:17
    },
    icon: {
        marginLeft: 20,
    },

    title:{
        fontSize:17
    },

    
})