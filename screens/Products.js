import React from 'react'
import { Appbar } from 'react-native-paper';
import { ScrollView, View,Text,Image } from 'react-native'

const ProductsComponent=({product,nprice,pprice,discount,discountPrice})=>{
    return (
        <View style={{width:325,height:140,margin:15,backgroundColor:"white",shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,shadowRadius: 20,elevation:5,display:"flex",flexDirection:"row",justifyContent:"space-around",padding:10}}>
        <Image source={require("../assets/yarn.jpeg")} style={{height:75,width:75}}/>
        <View>
            <Text style={{fontSize:18,width:150}}>{product}</Text>
            <Text style={{fontSize:15,fontWeight:"800",marginTop:10}}>${nprice} <Text style={{color:"red",textDecorationLine:"line-through"}}>${pprice}</Text></Text>
            <Text style={{color:"green",fontSize:16,fontWeight:"800",marginTop:10}}>You Save {discount}% (${discountPrice})</Text>
        </View>
    </View>
    )
}

const Products = () => {

    const ProductsJSON=[{"product":"Premium Yarn Collection","nprice":19.99,"pprice":20.99,"discount":25,"discountPrice":15},{"product":"Premium Yarn Collection","nprice":19.99,"pprice":20.99,"discount":25,"discountPrice":15},{"product":"Premium Yarn Collection","nprice":19.99,"pprice":20.99,"discount":25,"discountPrice":15}]
    return (
       <View style={{backgroundColor:"#f9f9f9"}}>
           <Appbar.Header style = {{backgroundColor:"rgb(5,23,41)"}}>
                <Appbar.Content title="Products" titleStyle={{fontSize:20}}/>
                <Appbar.Action icon="briefcase"/>
                <Appbar.Action icon="magnify" />
            </Appbar.Header>
            <ScrollView>
                {ProductsJSON.map((itm,idx)=>{return <ProductsComponent key={idx} product={itm.product} nprice={itm.nprice} pprice={itm.pprice} discount={itm.discount} discountPrice={itm.discountPrice}/>})}
            </ScrollView>
       </View>
    )
}

export default Products
