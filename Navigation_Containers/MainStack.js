import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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
const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
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

            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Changepass" component={Changepass} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="Editprofile" component={Editprofile} />
            <Stack.Screen name="Forgotpass" component={Forgotpass} />
            <Stack.Screen name="Resetconfirmation" component={Resetconfirmation} />
            <Stack.Screen name="Resetpass" component={Resetpass} />
        </Stack.Navigator>
    )
}
export default MainStack