import React from 'react'
import {View,Text,Image, StyleSheet, TextInput ,TouchableOpacity,ScrollView} from "react-native"
import { Card, Paragraph } from 'react-native-paper';
import { Ionicons, Feather,EvilIcons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
export default function Checkout() {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{flex:1}}>
            <View>
             <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="Checkout" titleStyle={styles.title}/>
                
            </Appbar.Header>
            </View>
            <ScrollView style={{marginBottom:15}}>
            <Card style={{marginTop:20,borderRadius:10,elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10,fontWeight:"bold"}}>General Information</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content >
         
                <View>   
                <Text style={styles.name}>Name</Text>
                <TextInput style={{ height: 20}}  value="John Doe" placeholder="Full Name"  />
               
                    
                
                <Text style={styles.name} >Email</Text>
                <TextInput style={{ height: 20}}  value="johndoe152@gmail.com" placeholder="Email" />
               
                
                <Text style={styles.name}>Contact No#</Text>
                <TextInput style={{ height: 20}}  value="+65 5685 5685" placeholder="Enter here..." />
                </View>
                </Card.Content>
                
               
            </Card>

            <Card style={{marginTop:20,borderRadius:10,elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10,fontWeight:"bold"}}>Shipping Address</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content >
         
                <View>   
                <Text style={styles.name}>Address Title</Text>
                    <Paragraph style={{fontSize:14}}>128, UBI Avenue 4</Paragraph>
                    <Paragraph style={{fontSize:14}}>Address Line 2</Paragraph>
                    <Paragraph style={{fontSize:14}}>Address Line 3</Paragraph>
                </View>
                <View style={{flexDirection:"row"}}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color="black"
                    />
                    <Text style={{marginTop:6,color:"grey"}}>Same as Billing address</Text>
                </View>
                </Card.Content>
                
               
            </Card>

            <Card style={{marginTop:20,borderRadius:10,elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10,fontWeight:"bold"}}>Order Payment Information</Text>
                    <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View>
                </View>
                <Card.Content >
                <View style={{flexDirection:"row",borderBottomWidth:0.5,marginBottom:10}}>
                       
                        <View style={{justifyContent:"center",width:"50%",padding:10}}>
                            <Text style={{fontSize:13,fontWeight:"bold",}}>
                                Olikraft Handikraft Wooden Blocking Board
                            </Text>
                            <Text style={{color:"grey"}}>
                                11 inch
                            </Text>
                            </View>
                        <View style={{flex:1,alignItems:"flex-end"}}>
                            <Text style={{color:"grey",marginTop:10}}>
                                2nos x $39.99 
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop:10,borderBottomWidth:0.5}}>
                        <View style={{flexDirection:'row',paddingBottom:5}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                                Item Total
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginLeft:15}}>
                                $79.98
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',paddingBottom:10}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                                Shipping
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold"}}>
                                $12.00
                            </Text>
                        </View>
                        
                    </View>
                    
                
                <View style={{marginTop:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                            Grand Total
                        </Text>
                        <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold"}}>
                            $91.98
                        </Text>
                    </View>
                </View>
                </Card.Content>
                
               
            </Card>

            
           
            </ScrollView>
            
            <View>
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>Payable Amount</Text>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>$91.98</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.send}>
                            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Place Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    container:{
        backgroundColor:"rgb(249,249,249)",
      
        height:"100%"
    },
    item: {
        backgroundColor : 'rgb(5,23,41)',
       
     },
    icon: {
        marginLeft: 20
    },

    title:{
        fontSize:17
    },
    name:{
        fontSize:12,
        color:"grey",
        marginTop:10,
        
    },

    button:{
        backgroundColor:"white",
        borderTopWidth:0.5,
        marginTop:10,
        borderColor:"grey",
        flexDirection:"row",
        padding:15
    },
    cancel:{
        backgroundColor:"white",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"flex-start",
        flex:1
    },
    send:{
        backgroundColor:"rgb(33,184,97)",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})