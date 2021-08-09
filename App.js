import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Confirmation from './screens/Confirmation';
import Home from './screens/Home';
import SettingsPage from './screens/SettingsPage';
import Contacts from './screens/Contacts';
import Resetpass from './screens/Resetpass';
import Resetconfirmation from './screens/Resetconfirmation';
import Forgotpass from './screens/Forgotpass';
import Changepass from './screens/Changepass';
import Products from './screens/Products';
import Tutorial from "./screens/Tutorials"
import WriteAReview from './screens/WriteAReview';
import MoreOptions from './screens/MoreOptions';
import Profile from './screens/Profile';
import Editprofile from './screens/Editprofile';
import OrderConfirmation from './screens/OrderConfirmation';
import ManageAddress from './screens/ManageAddress';
import Address from './screens/Address';
import MyOrders from './screens/MyOrders';
import Checkout from './screens/Checkout';
export default function App() {
  return (
      <OrderConfirmation/>
  );
}