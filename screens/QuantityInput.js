import React ,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons,Entypo} from '@expo/vector-icons';
import { useQuantity } from '../hooks/useQuantity';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const QuantityInput = ({qt,ct,id}) => {
    const quantity = useQuantity(qt); // Use quantity here, do not need to pass from props
    const updatedquantity = {quantity:quantity.value}
    // var [cartdata,setCartdata] = useState([])
    const decrement = () => {
        // setCartdata(ct)
        quantity.setValue(quantity.value - 1);
        // console.log(ct)
        quantityupdate(ct,quantity.value - 1,id)
        
    };
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) 
          {
           return value
          }
        } catch(e) {
          console.log(e)
        }
      }
    const quantityupdate=async (cart,quan,id)=>{
        let token = await getData()
        // console.log(cart)
        cart.quantity = quan
        let cartdata={}
        cartdata[id] = cart
        // console.log(cartdata)
        //   console.log(CartData)
            fetch('https://olikraft.shubhchintak.co/api/letscms/v1/cart/update-quantities', {
                method:"POST",
                headers:{
                    "letscms_token":token,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    cart_data:cartdata
                }),
                
              },)
              .then(response => response.json())
              .then((response) =>{
                console.log(cart)
                // alert("Order Successfully Placed.Thanks for ordering!!")
                // navigation.navigate("Orderconfirmation",{orderid:response.data.order_id,cartitems:cartitems,carttotals:carttotals})
                console.log(response)
                
              })
              .catch(function (error) {
                console.log(error);
              });
        
    }
    
    const increment = () => {
      quantity.setValue(quantity.value + 1);
    };
  
    return (
        
        <View style={{backgroundColor:"white",flex:1,flexDirection:"row",borderWidth:1,borderLeftWidth:0,borderColor:"grey"}} >
            
            <TouchableOpacity style={{flex:1,marginLeft:5,justifyContent:"center"}} onPress={decrement} disabled={quantity.value === 0}>
                <Entypo name="minus" size={24} color="black" />
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>{quantity.value}</Text>
            </View>
            <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}  onPress={increment}>
                <Entypo name="plus" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    );
  };