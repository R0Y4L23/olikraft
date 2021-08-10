import React from 'react'
import { View,Text,ImageBackground,ScrollView,Image } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const TopComponent=({content})=>{
    return (
        <View style={{width:325,height:175,margin:15}}>
            <ImageBackground source={require(`../assets/topcomponentimage1.jpg`)} style={{flex:1,justifyContent:"center"}} imageStyle={{borderRadius:25,height:175,backgroundColor:"black",opacity:0.7}}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",height:"100%",alignItems:"flex-end",paddingBottom:15}}>
                <Text style={{textAlign:"center",color:"white",fontSize:20}}>{content}</Text>
                <AntDesign name="arrowright" size={24} color="white" />
                </View>
            </ImageBackground>
        </View>
    )
}
const ShopFromFavouriteComponent=({product,nprice,pprice})=>{
    return(
        <View style={{width:325,height:100,margin:15,backgroundColor:"white",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5,display:"flex",flexDirection:"row",justifyContent:"space-around",padding:10}}>
            <Image source={require("../assets/yarn.jpeg")} style={{height:75,width:75}}/>
            <View>
                <Text style={{fontSize:18,width:150}}>{product}</Text>
                <Text style={{fontSize:15,fontWeight:"800",marginTop:10}}>${nprice} <Text style={{color:"red",textDecorationLine:"line-through"}}>${pprice}</Text></Text>
            </View>
        </View>
    )
}
const RecentReviewsComponent=({name,stars,comment})=>{
    return (
        <View style={{width:325,height:100,margin:15,backgroundColor:"white",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5,display:"flex",flexDirection:"row",justifyContent:"space-around",padding:10}}>
            <Image source={require("../assets/celebrity.jpg")} style={{height:75,width:75,borderRadius:37}}/>
            <View>
                <Text style={{fontSize:20,fontWeight:"800"}}>{name}</Text>
                <View style={{display:"flex",flexDirection:"row"}}>
                    {[...Array(stars)].map((item,index)=>{return  <AntDesign name="star" size={24} color="orange" key={index}/>})}
                    {[...Array(5-stars)].map((item,index)=>{return  <AntDesign name="staro" size={24} color="orange" key={index}/>})}
                </View>
                <Text style={{fontSize:15,color:"grey"}}>{comment}</Text>
            </View>
        </View>
    )
}

const Home = () => {
    const TCJSON=[{"content":"Stop winding yarn by hand"},{"content":"Yarn Sets"}]
    const SFFJSON=[{"product":"Premium Cotton Yarn Collection","PPrice":"29.99","NPrice":"19.99"},{"product":"Premium Cotton Yarn Collection","PPrice":"29.99","NPrice":"19.99"},{"product":"Premium Cotton Yarn Collection","PPrice":"29.99","NPrice":"19.99"}]
    const RRJSON=[{"name":"Jack Owens","stars":4,"comment":"lorem ipsum lorem ipsum"},{"name":"Jack Owens","stars":4,"comment":"lorem ipsum lorem ipsum"},{"name":"Jack Owens","stars":4,"comment":"lorem ipsum lorem ipsum"}]
    return (
       <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f9f9f9",paddingTop:25}}>
           <ScrollView>
           <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
               <Text style={{fontSize:20}}>Hi , John Doe</Text>
               <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                   <SimpleLineIcons name="bag" size={26} color="black" />
                   <Ionicons name="search" size={26} color="black" />
               </View>
           </View>
           <View style={{height:200}}>
               <ScrollView horizontal>
                   {TCJSON.map((item,index)=>{return <TopComponent content={item.content} key={index} />})}
               </ScrollView>
           </View>
           <View style={{display:"flex",flexDirection:"row",width:350,justifyContent:"space-evenly",marginBottom:20,marginTop:10}}>
               
                   <LinearGradient style={{display:"flex",flexDirection:"row",width:150,height:75,justifyContent:"space-between",padding:10,borderRadius:15}}  colors={['#E0B042', '#E7E75F', '#E78357']}>
                   <View>
                       <Text style={{fontSize:20,color:"white"}}>10 %</Text>
                       <Text style={{color:"white"}}>Flat Offer</Text>
                   </View>
                   <SimpleLineIcons name="badge" size={30} color="white" />
                   </LinearGradient>
                   <LinearGradient style={{display:"flex",flexDirection:"row",width:150,height:75,justifyContent:"space-between",padding:10,borderRadius:15}}  colors={['#6BD1BB', '#9BE786', '#95FB5F']}>
                   <View>
                       <Text style={{fontSize:20,color:"white"}}>Discount</Text>
                       <Text style={{color:"white"}}>Weekend Sale</Text>
                   </View>
                   <SimpleLineIcons name="present" size={30} color="white" />
                   </LinearGradient>
           </View>
           <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"80%"}}>
               <Text style={{fontSize:22}}>Shop from Favourites</Text>
               <AntDesign name="arrowright" size={24} color="black" />
           </View>
           <View style={{height:125}}>
               <ScrollView horizontal>
                   {SFFJSON.map((item,index)=>{return <ShopFromFavouriteComponent product={item.product} nprice={item.NPrice} pprice={item.PPrice} key={index}/>})}
               </ScrollView>
           </View>
          
           <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"80%"}}>
               <Text style={{fontSize:22}}>Recent Reviews</Text>
               <AntDesign name="arrowright" size={24} color="black" />
           </View>
           <View style={{height:125}}>
               <ScrollView horizontal>
                   {RRJSON.map((item,index)=>{return <RecentReviewsComponent name={item.name} stars={item.stars} comment={item.comment} key={index}/>})}
               </ScrollView>
           </View>
           </ScrollView>
       </View>
    )
}

export default Home
