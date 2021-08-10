import React, {useState} from 'react'
import { StyleSheet,View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons ,Feather,Entypo} from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default function Mycart() {
    const [Counter,setCounter] = useState(0)
    const [Coupon,setCoupon] = useState("")
    function increment(){
        setCounter(Counter + 1)
    }

    function decrement(){
        if(Counter > 0){
            setCounter(Counter - 1)
        }
        else{
            setCounter(0)
        }
    }
    return (
        <View style={{height:"100%",flex:1}}>
            <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white" />
                <Appbar.Content title="My Cart" titleStyle={styles.title}/>
                
            </Appbar.Header>
            <View style={{padding:15}}>
                <Text style={{fontSize:13,fontWeight:"bold",marginBottom:5}}>
                    Olikraft Handikraft Wooden Blocking Board
                </Text>
                <Text style={{fontSize:13,color:"grey",marginBottom:5}}>
                    11 inch
                </Text>
                <View style={{flexDirection:"row",marginBottom:5}}>
                    <Text style={{color:"grey"}}>
                        $39.99 x 2
                    </Text>
                    <Text style={{flex:1,fontWeight:"bold",fontSize:14,marginRight:"5%",textAlign:"right"}}>
                        $39.99
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{backgroundColor:"white",flex:1,flexDirection:"row",borderWidth:1,borderLeftWidth:0,borderColor:"grey"}}>
                    <View style={{flex:1,marginLeft:5,justifyContent:"center"}}>
                        <Entypo name="minus" size={24} color="black" onPress={decrement}/>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>{Counter}</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Entypo name="plus" size={24} color="black" onPress={increment}/>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <Button title="Remove" color="rgb(5,23,41)"/>
                </View>
            </View>
            <View style={{padding:15}}>
                <Text style={{fontSize:13,fontWeight:"bold",marginBottom:5}}>
                    Apply Coupon
                </Text>
                   
                <View style={{flexDirection:"row",marginBottom:5}}>
                    <TextInput style={{ flex:1,height: 40,padding: 10,backgroundColor:"white",borderWidth:0.3,borderColor:"grey",borderRadius:5}} onChangeText={setCoupon} value={Coupon} placeholder="Enter Coupon Code.." />
                    <View style={{width:"30%",}}>
                        <Button title="Apply" color="rgb(5,23,41)" />
                    </View>
                    
                </View>
                
            </View>
            <View style={{justifyContent:"flex-end",flex:1}}>
                <View style={{justifyContent:"flex-end",borderBottomWidth:0.5,margin:10}}>
                        <View style={{flexDirection:'row',paddingBottom:5}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                                Item Total
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:15}}>
                                $79.98
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',paddingBottom:10}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                                Shipping
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:15}}>
                                $12.00
                            </Text>
                        </View>
                        
                    </View>
                    
                
                <View style={{marginHorizontal:10,marginBottom:15,justifyContent:"center"}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:10}}>
                            Grand Total
                        </Text>
                        <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:15}}>
                            $91.98
                        </Text>
                    </View>
                </View>
               
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Continue Shopping </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.send}>
                            <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>Proceed to Checkout</Text>
                        </TouchableOpacity>
                    </View>
             
            </View>
       
            
        </View>
    )
}

const styles = StyleSheet.create ({
  
    item: {
       backgroundColor : 'rgb(5,23,41)'
    },
    icon: {
        marginLeft: 20
    },

    title:{
        fontSize:17
    },
    name:{
        color:"grey",
        marginTop:10,
        
    },
    edit:{
        marginRight:"3%"
    },
    
    form:{
     flexDirection:"row"
        
    },
  

    button:{
        backgroundColor:"white",
        elevation:5,
        borderColor:"grey",
        flexDirection:"row",
        paddingVertical:20,
        paddingHorizontal:10
    },
    cancel:{
        backgroundColor:"white",
        height:50,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
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