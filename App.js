import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigation_Containers/MainStack';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode } 

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.droidSafeArea}>
      <SafeAreaView style={{flex:1}}>
      <MainStack/>
      </SafeAreaView>
      </View>
    </NavigationContainer>  
  );
}
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
}
});