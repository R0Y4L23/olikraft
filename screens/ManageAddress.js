import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';
import { Ionicons, AntDesign, EvilIcons} from '@expo/vector-icons';
import { Card, Paragraph } from 'react-native-paper';
export default function ManageAddress() {
    return (
        <View>
           <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="Manage Address" titleStyle={styles.title}/>
                <AntDesign style={styles.edit} name="plus" size={24} color="white" />
            </Appbar.Header>
            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:22,marginLeft:16,marginTop:10}}>Home</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content>
         
                    <Paragraph style={{fontSize:12}}>128, UBI Avenue 4</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 2</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 3</Paragraph>
                </Card.Content>
                
               
            </Card>

            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10}}>John's Home</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content >
         
                    <Paragraph  style={{fontSize:12}}>128, UBI Avenue 4</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 2</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 3</Paragraph>
                </Card.Content>
                
               
            </Card>

            <Card style={{marginTop:20,borderRadius:10,shadowColor:"grey",elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:22,marginLeft:16,marginTop:10}}>Home</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content>
         
                    <Paragraph style={{fontSize:12}}>128, UBI Avenue 4</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 2</Paragraph>
                    <Paragraph style={{fontSize:12}}>Address Line 3</Paragraph>
                </Card.Content>
                
               
            </Card>
            
        </View>
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)'
    },
    icon: {
        marginLeft: 20,
    },

    title:{
        fontSize:17
    },
    edit:{
        marginRight:"3%"
    },
    
})