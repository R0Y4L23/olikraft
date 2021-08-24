import React,{useState} from 'react'
import {View,Text,TextInput,TouchableOpacity, StyleSheet,ScrollView} from "react-native"
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
export default function WriteAReview({navigation}) {
    const [name, setName] = useState("")
    const [email,setEmail]=useState("")
    const [stars,setStars]=useState(0)
    const [reviewTitle,setReviewTitle]=useState("")
    const [message,setMessage]=useState("")
    return (
           <View style={styles.container}>
               <ScrollView>
               {/* <Appbar.Header style={styles.item}>
                   <Ionicons style={styles.icon} name="arrow-back" size={24} color="white" onPress={()=>{navigation.goBack()}}/>
                   <Appbar.Content title="Write a Review" titleStyle={styles.title} />
               </Appbar.Header> */}
               <View style={styles.content}>
                   <Text>Name</Text>
                   <View style={styles.form}>
                       <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setName}
                           value={name} placeholder="Your Name" />
                   </View>
                   <Text>Email</Text>
                   <View style={styles.form}>
                       <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}} onChangeText={setEmail}
                           value={email} placeholder="Your Email" />
                   </View>
                   <Text>Ratings</Text>
                   <View style={{marginVertical:10}}>
                       <View style={{display:"flex",flexDirection:"row"}}>
                           {[...Array(stars)].map((item,index)=>{return <AntDesign name="star" size={25} color="grey"
                               key={index} style={{flex:1,textAlign:"center"}} onPress={()=>{setStars(index)}}/>})}
                               {[...Array(5-stars)].map((item,index)=>{return <AntDesign name="staro" size={25}
                                   color="grey" key={index} style={{flex:1,textAlign:"center"}} onPress={()=>
                                   {setStars(stars+index+1)}}/>})}
                       </View>
                       <View style={{display:"flex",flexDirection:"row"}}>
                           <Text style={{flex:1,textAlign:"center",fontSize:13,color:"grey"}}>Poor</Text>
                           <Text style={{flex:1,textAlign:"center",fontSize:13,color:"grey"}}>Below Average</Text>
                           <Text style={{flex:1,textAlign:"center",fontSize:13,color:"grey"}}>Average</Text>
                           <Text style={{flex:1,textAlign:"center",fontSize:13,color:"grey"}}>Good</Text>
                           <Text style={{flex:1,textAlign:"center",fontSize:13,color:"grey"}}>Excellent</Text>
                       </View>
                   </View>
                   <Text>Review Title</Text>
                   <View style={styles.form}>
                       <TextInput style={{ height: 40,padding: 10,backgroundColor:"white"}}
                           onChangeText={setReviewTitle} value={reviewTitle}
                           placeholder="Give a Title for your review..." />
                   </View>
                   <Text>Review (1500 Characters)</Text>
                   <View style={styles.form}>
                       <TextInput style={{ height:"26%",padding: 10,backgroundColor:"white",textAlignVertical:"top"}}
                           onChangeText={setMessage} value={message} placeholder="Enter your review" />
                   </View>
               </View>
               <View style={styles.buttoncontainer}>
                   <View style={styles.button}>
                       <TouchableOpacity style={styles.send}>
                           <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Send Review</Text>
                       </TouchableOpacity>
                   </View>
               </View>
               </ScrollView>
           </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"rgb(249,249,249)"
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
    content:{
        
       padding:20,
       paddingTop:10
    },

    form:{
        backgroundColor:"white",
        borderRadius:8,
        borderWidth:0.5,
        marginVertical:10,
        borderColor:"grey",
        
    },
    buttoncontainer:{
        backgroundColor:"rgb(249,249,249)",
        flex:1,
        justifyContent:"flex-end"
    },

    button:{
        backgroundColor:"white",
        borderTopWidth:1,
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
        alignItems:"center",
        flex:1
    },
    send:{
        backgroundColor:"rgb(33,184,97)",
        height:40,
        width:300,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})