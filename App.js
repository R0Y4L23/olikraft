import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigation_Containers/MainStack';
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