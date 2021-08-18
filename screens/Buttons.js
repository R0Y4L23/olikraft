import React, { useState } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function Buttons({index,title,len,fa,option,images}) {
    let variations = []
    let variationsweight = []
    let variationscolor = []
    let titlesweight = []
    let titlescolor = []
    
    let titles = []
    let objectfinal = []
   
    const navigation = useNavigation(); 
    function matchvardetails(option,title){
        
       
            variations.push(option)
            titles.push(title)

    
        if(title === "WEIGHT"){
            variationsweight.push(option)
            titlesweight.push(title)
        
        }

        else if(title === "COLOR"){
            variationscolor.push(option)
            titlescolor.push(title)
        
        }

        
        // console.log(variationscolor,variationsweight)
        // console.log(titlescolor,titlesweight)
        // if((variations.length === len) & (titles.length === len)){

        //     let object = {}
        //     object[titles[0]] = variations[0]

        //     objectfinal = (fa.filter(fas => {
        //         return Object.keys(object).every(e => fas[e] === object[e])
        //     }))

        //     console.log(objectfinal[0].id)
        //     navigation.navigate("NewProductsvariable",{"id":objectfinal[0].id , "Images":images})

        // }
        if((variations.length === len) & (titles.length === len)){

            let object = {}
            object[titles[0]] = variations[0]

            objectfinal = (fa.filter(fas => {
                return Object.keys(object).every(e => fas[e] === object[e])
            }))

            console.log(objectfinal[0].id)
            navigation.navigate("NewProductsvariable",{"id":objectfinal[0].id , "Images":images})

        }
        // console.log(variationscolor,variationsweight)
        if((variationscolor&variationsweight)){

            let object = {}
            
            // object[titlesweight[0]] = variationsweight[0]
            // object[titlescolor[0]] = variationscolor[0]
            console.log(titlesweight[0],variationsweight[0],titlescolor[0],variationscolor[0])
            console.log(object)
            objectfinal = (fa.filter(fas => {
                return Object.keys(object).every(e => fas[e] === object[e])
            }))

            console.log(objectfinal)
            // navigation.navigate("NewProductsvariable",{"id":objectfinal[0].id , "Images":images})

        }
       
        // console.log(Attributes.length)
    }
    return (
        
            <TouchableOpacity style={{flex:1,padding:5,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>matchvardetails(option,title)} key={index}>
                <Text style={{fontSize:14,fontWeight:"bold",color:"black"}}>{option}</Text>
                
            </TouchableOpacity>
        
    )
}
