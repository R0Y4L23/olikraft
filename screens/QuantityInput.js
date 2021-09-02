import React ,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons,Entypo} from '@expo/vector-icons';
import { useQuantity } from '../hooks/useQuantity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
export const QuantityInput = ({qt,fetchcart,id}) => {
    const quantity = useQuantity(qt); // Use quantity here, do not need to pass from props
    const navigation = useNavigation(); 
    // var [cartdata,setCartdata] = useState([])
    const decrement = () => {
        // setCartdata(ct)
        quantity.setValue(Number(quantity.value) - 1);
        // console.log(ct)
        quantityupdate(Number(quantity.value) - 1,id)
        
    };

    const increment = () => {
      // setCartdata(ct)
      // console.log(quantity)
      quantity.setValue(Number(quantity.value) + 1);
      
      quantityupdate(Number(quantity.value) + 1,id)
      
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
    const quantityupdate=async (quan,id)=>{
        let token = await getData()
  
        console.log(quan)
        let cartdata={}
        cartdata[id] = quan

            fetch('https://olikraft.com/api/letscms/v1/cart/update-quantities', {
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
                // console.log(response.message)
                // navigation.navigate("Mycart")
                fetchcart()
              })
              .catch(function (error) {
                console.log(error);
              });
        
    }
    
   
  
    return (
        
        <View style={{backgroundColor:"white",flex:1,flexDirection:"row",borderWidth:1,borderLeftWidth:0,borderColor:"grey"}} >
            
            <TouchableOpacity style={{flex:1,marginLeft:5,justifyContent:"center"}} onPress={decrement} disabled={quantity.value === 1}>
                <Entypo name="minus" size={24} color="black" />
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>{Number(quantity.value)}</Text>
            </View>
            <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}  onPress={increment}>
                <Entypo name="plus" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    );
  };