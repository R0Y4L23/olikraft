import React,{useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View,ActivityIndicator } from 'react-native'
import Login from "../screens/Login"
import Signup from "../screens/Signup"
import Confirmation from "../screens/Confirmation"
import BottomNavStack from './BottomNavStack'
import MyOrder from "../screens/MyOrders"
import ManageAddress from "../screens/ManageAddress"
import Profile from "../screens/Profile"
import ContactUs from "../screens/Contacts"
import Settings from '../screens/SettingsPage'
import OrderConfirmation from '../screens/OrderConfirmation'
import Checkout from "../screens/Checkout"
import MyOrders from '../screens/MyOrders'
import Mycart from '../screens/Mycart'
import Address from '../screens/Address'
import Changepass from "../screens/Changepass"
import Contacts from '../screens/Contacts'
import Editprofile from "../screens/Editprofile"
import Forgotpass from "../screens/Forgotpass"
import Resetconfirmation from "../screens/Resetconfirmation"
import Resetpass from "../screens/Resetpass"
import Cancelconfirmation from '../screens/Cancelconfirmation'
import ProductDetails from "../screens/Productdetails"
import Productsvariable from '../screens/Productsvariable'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Products from '../screens/Products'
import NewProductsvariable from '../screens/NewProductsvariable'
import Tutorials from '../screens/Tutorials'
import WriteAReview from "../screens/WriteAReview"
import TermsOfUse from "../screens/TermsOfUse"
import PrivacyPolicy from "../screens/PrivacyPolicy"
import Addaddress from '../screens/Addaddress'
const Stack = createNativeStackNavigator();

const Loading = ({navigation}) => {
    useEffect(()=>{
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('token')
                if(value)
                {
                   // navigation.navigate("BNS",{screen:"Home"})
                   navigation.reset({
                    index: 0,
                    routes: [{name: 'BNS'}],
                  });
                }
                else{
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Login'}],
                      });
                }
                return value
            } catch (e) {
                console.log(e)
            }
        }
        getData()
    },[])
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large" />
    </View>
  )
};
const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Loading" component={Loading}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="BNS" component={BottomNavStack} />
            <Stack.Screen name="MyOrder" component={MyOrder} />
            <Stack.Screen name="ManageAddress" component={ManageAddress} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Orderconfirmation" component={OrderConfirmation} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Myorders" component={MyOrders} />
            <Stack.Screen name="Mycart" component={Mycart} />
            <Stack.Screen name="Cancelconfirmation" component={Cancelconfirmation} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Changepass" component={Changepass} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="Editprofile" component={Editprofile} />
            <Stack.Screen name="Forgotpass" component={Forgotpass} />
            <Stack.Screen name="Resetconfirmation" component={Resetconfirmation} />
            <Stack.Screen name="Resetpass" component={Resetpass} />
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            <Stack.Screen name="Productsvariable" component={Productsvariable}/>
            <Stack.Screen name="NewProductsvariable" component={NewProductsvariable}/>
            <Stack.Screen name="Tutorials" component={Tutorials}/>
            <Stack.Screen name="Review" component={WriteAReview}/>
            <Stack.Screen name="Termsofuse" component={TermsOfUse}/>
            <Stack.Screen name="Privacypolicy" component={PrivacyPolicy}/>
            <Stack.Screen name="Addaddress" component={Addaddress}/>
        </Stack.Navigator>
    )
}
export default MainStack