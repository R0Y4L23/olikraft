import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigation_Containers/MainStack';
import { Provider as PaperProvider } from 'react-native-paper';

import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode } 

import { StripeProvider } from '@stripe/stripe-react-native';
export default function App() {
  return (
    <PaperProvider>
    <StripeProvider
      publishableKey="pk_live_51JKywdEyBNY91bY3whkMiTcRaKtRzonxluKbDwI8OtqpzhqPcXO0Zg5GzKTRdztihWcfxSti1nCm99btvFOWRLca00Na5VXg5i"
      // urlScheme="stripe-example" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{olikraft}}" // required for Apple Pay
    >
      <NavigationContainer>
        <View style={styles.droidSafeArea}>
        <SafeAreaView style={{flex:1}}>
        <MainStack/>
        </SafeAreaView>
        </View>
      </NavigationContainer>  
    </StripeProvider>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
}
});