import React from 'react'
import { View, Text } from 'react-native'

export default function Productdetails({route,navigation}) {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Hello , This is the Products Details for product id : {route.params.id}</Text>
        </View>
    )
}
