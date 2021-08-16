import React  from 'react'
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
    return (
        <View>
           <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}} />
                <Appbar.Content title="Manage Address" titleStyle={styles.title}/>
                <AntDesign name="plus" size={24} color="white" style={{marginRight:10}} onPress={()=>{navigation.navigate("Address")}}/>
            </Appbar.Header>
            <Billingaddress/>
            <Shippingaddress/>

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