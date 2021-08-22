import React,{useState,useEffect} from 'react'
import {View,Text,Image, StyleSheet, TextInput ,TouchableOpacity,ScrollView,Button} from "react-native"
import { Card, Paragraph } from 'react-native-paper';
import { Ionicons, Feather,EvilIcons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Shippingaddress from './Shippingaddress';
import Billingaddress from './Billingaddress';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { useConfirmPayment } from '@stripe/stripe-react-native';
export default function Checkout({route,navigation}) {
    const [checked, setChecked] = React.useState(false);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setcontact]=useState("")
    const [firstname,setfirstname] = useState("")
    const [lastname,setlastname] = useState("")
    const [country,setcountry] = useState("")
    const [city,setcity] = useState("")
    const [State,setState] = useState("")
    const [postcode,setpostcode] = useState("")
    const [cartitems,setCartitems]=useState([])
    const [carttotals,setCarttotals]=useState([])
    const {confirmPayment, loading} = useConfirmPayment();
    const [paymentmethod,setpaymentmethod] = useState("")
    const [paymentmethodtitle,setpaymentmethodtitle] = useState("")
    const [address1,setaddress1] = useState("")
    const [address2,setaddress2] = useState("")
    const [bafetched, setbafetched] = useState(false)
    const [safetched, setsafetched] = useState(false)
    const updateba = () => {
        setbafetched(true)
    }

    const updatesa = () => {
        setsafetched(true)
    }

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
    
      
     
    const fetchcheckout= async ()=>{
        let token = await getData()
    
        fetch("https://olikraft.shubhchintak.co/api/letscms/v1/checkout?coupons[]=" + route.params.coupon,{
            headers:{
                letscms_token:token
            }
        })
        .then(response => response.json())
        .then((res) => {
            // console.log("hello",res.data.customer.address_1)
            setaddress1(res.data.customer.address_1)
            setaddress2(res.data.customer.address_2)
            setcity(res.data.customer.city)
            setcountry(res.data.customer.country)
            setfirstname(res.data.customer.first_name)
            setlastname(res.data.customer.last_name)
            setState(res.data.customer.state)
            setpostcode(res.data.customer.postcode)
            setcontact(res.data.customer.phone)
            setEmail(res.data.customer.email)
            setCartitems(res.data.cart_items)
            setCarttotals(res.data.cart_totals)
            setpaymentmethod("COD")
            setpaymentmethodtitle("Cash on Delivery")

        })
        .catch(error => console.log(error))
    
    }
    
    const placeorder=async ()=>{
        let token = await getData()
            
            fetch('https://olikraft.shubhchintak.co/api/letscms/v1/order/create', {
                method:"POST",
                headers:{
                    "letscms_token":token,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                first_name:firstname,
                last_name:lastname,
                country:country,
                city:city,
                state:State,
                postcode:postcode,
                phone:contact,
                email:email,
                payment_method:paymentmethod,
                payment_method_title:paymentmethodtitle,
                address_1:address1,
                address_2:address2,
                coupons:route.params.coupon

                }),
                
              },)
              .then(response => response.json())
              .then((response) =>{
                
                alert("Order Successfully Placed.Thanks for ordering!!")
                navigation.navigate("Orderconfirmation",{orderid:response.data.order_id,cartitems:route.params.cartitems,carttotals:route.params.carttotals})
                
                
              })
              .catch(function (error) {
                console.log(error);
              });
        
    }
    // const fetchPaymentIntentClientSecret = async () => {
    //     const response = await fetch("https://olikraft.shubhchintak.co/create-payment-intent", {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         currency: 'usd',
    //       }),
    //     });
    //     const {clientSecret} = await response.json();
    //     console.log(clientSecret)
    //     return clientSecret;
      
    
    
    // };
    
    //   const handlePayPress = async () => {
            
    //     const billingDetails = {
    //         email: 'jenny.rosen@example.com',
    //       };
      
    //       // Fetch the intent client secret from the backend
    //       const clientSecret = await fetchPaymentIntentClientSecret();
      
    //       // Confirm the payment with the card details
    //       const {paymentIntent, error} = await confirmPayment(clientSecret, {
    //         type: 'Card',
    //         billingDetails,
    //       });
      
    //       if (error) {
    //         console.log('Payment confirmation error', error);
    //       } else if (paymentIntent) {
    //         console.log('Success from promise', paymentIntent);
    //       }
    //   };
    useEffect(()=>{
        fetchcheckout()
    },[])

    return (
        <View style={{flex:1,width:"100%",justifyContent:'center'}}>
            <View>
             <Appbar.Header style = {styles.item}>
                <Ionicons style ={styles.icon} name="arrow-back" size={24} color="white"  onPress={()=>{navigation.goBack()}} />
                <Appbar.Content title="Checkout" titleStyle={styles.title}/>
                
            </Appbar.Header>
            </View>
            <ScrollView style={{marginBottom:15}}>
            <Card style={{marginTop:20,borderRadius:10,elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10,fontWeight:"bold"}}>General Information</Text>
                    {/* <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View> */}
                </View>
                <Card.Content >
         
                <View>   
                <Text style={styles.name}>Name</Text>
                <TextInput style={{ height: 20}}  value={`${firstname} ${lastname}`} placeholder="Full Name"  />
               
                    
                
                <Text style={styles.name} >Email</Text>
                <TextInput style={{ height: 20}}  value={email} placeholder="Email" />
               
                
                <Text style={styles.name}>Contact No#</Text>
                <TextInput style={{ height: 20}}  value={contact} placeholder="Enter here..." />
                </View>
                </Card.Content>
                
               
            </Card>
            {
                checked 
                ?   <Billingaddress navigation={navigation} updateba={updateba}/>
                :   <Shippingaddress navigation={navigation} updatesa={updatesa} />
            }
           <View style={{flexDirection:"row"}}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color="black"
                    />
                    <Text style={{marginTop:6,color:"black"}}>Same as Billing address</Text>
                </View>
            <Card style={{marginTop:20,borderRadius:10,elevation:10}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{flex:1,fontSize:18,marginLeft:16,marginTop:10,fontWeight:"bold"}}>Order Payment Information</Text>
                    {/* <View style={{marginTop:10,marginRight:15}}>
                        <EvilIcons name="pencil" size={30} color="black" />
                    </View> */}
                </View>
                <Card.Content >
                    {   route.params.cartitems.map((item,idx)=>{return(
                    <ScrollView contentContainerStyle={{flex:1,justifyContent:"center"}} key={item.product_id}>
                        <View style={{margin:15,flex:1}} key={idx}>
                            <Text style={{fontSize:13,fontWeight:"bold",marginBottom:5}}>
                                {item.product_name}
                            </Text>
                            
                            <View style={{flexDirection:"row"}}>
                                <Text style={{color:"grey"}}>
                                    ${item.product_price} x {item.quantity}
                                </Text>
                                <Text style={{flex:1,fontWeight:"bold",fontSize:14,marginRight:"5%",textAlign:"right"}}>
                                    ${+Number(item.line_total).toFixed(2)}
                                </Text>
                            </View>
                        </View>
                        
                    </ScrollView>
                )})}
                <View style={{justifyContent:"flex-start",flex:1}}>
                <View style={{justifyContent:"flex-end",borderBottomWidth:0.5,margin:10}}>
                        <View style={{flexDirection:'row',paddingBottom:5}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:5}}>
                                Item Total
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:25}}>
                                ${+Number(route.params.carttotals.cart_contents_total).toFixed(2)}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',paddingBottom:10}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:5}}>
                                Shipping
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:25}}>
                                ${+Number(route.params.carttotals.shipping_total).toFixed(2)}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',paddingBottom:10}}>
                            <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:5}}>
                                Coupon Discounts
                            </Text>
                            <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:25}}>
                                ${+Number(route.params.carttotals.discount_total).toFixed(2)}
                            </Text>
                        </View>
                    </View>
                <View style={{marginHorizontal:10,marginBottom:15,justifyContent:"center"}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1,fontSize:13,fontWeight:"bold",marginLeft:5}}>
                            Grand Total
                        </Text>
                        <Text style={{flex:1,textAlign:"right",fontSize:13,fontWeight:"bold",marginRight:25}}>
                            ${+Number(route.params.carttotals.total).toFixed(2)}
                        </Text>
                    </View>
                </View>
            </View>
            {/* <View style={{flex:1,margin:15}}>
                    <Text style={{fontWeight:"bold",paddingVertical:10}}>Enter Mobile number:</Text>
                    <TextInput placeholder="Enter mobile number" style={{borderWidth:1, height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setphone} value={phone}/>
                </View> */}
                </Card.Content>
                
               
            </Card>
                {/* <View style={{elevation:10}}>
                    <Text style={{fontWeight:"bold",marginHorizontal:15,marginTop:10}}>Enter your card details here</Text>
                    <CardField
                        postalCodeEnabled={true}
                        placeholder={{
                        number: '4242 4242 4242 4242',
                        }}
                        cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: 'black',
                        }}
                        style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 10,
                        }}
                        // onCardChange={(cardDetails) => {
                        // console.log('cardDetails', cardDetails);
                        // }}
                        // onFocus={(focusedField) => {
                        // console.log('focusField', focusedField);
                        // }}
                    />
                    <Button onPress={handlePayPress} title="Pay" disabled={loading} />
                </View>
            
            */}
            </ScrollView>
            
            <View>
                    <View style={styles.button}> 
                        <TouchableOpacity style={styles.cancel}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>Payable Amount</Text>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>${route.params.carttotals.total}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.send} onPress={placeorder}>
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
        backgroundColor : 'rgb(5,23,41)',height:35,paddingBottom:17
       
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
        elevation:5,
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