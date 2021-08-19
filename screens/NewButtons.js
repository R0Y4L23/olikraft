import React, { useState,useEffect } from 'react'
import { View, Text,TouchableHighlight,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const useForceUpdate = () => useState()[1];
export default function NewButtons({index,pid,title,len,fa,option,images,match,titles,opt,uid}) {
   
    const forceUpdate = useForceUpdate();

    let objectfinal = []
   
    const navigation = useNavigation(); 
    const item=(t,o)=>{
        if((t.length === len) & (o.length === len)){

            let object = {}
            for(let i=0;i<len;i++){
                object[t[i]] = o[i]
            }
            console.log(object)
            objectfinal = (fa.filter(fas => {
                return Object.keys(object).every(e => fas[e] === object[e])
            }))

            console.log(objectfinal)
            console.log(objectfinal[0].id)
            // navigation.navigate("NewProductsvariable",{"id":objectfinal[0].id , "Images":images, pid:pid})
            uid(objectfinal[0].id,images)
            console.log("final")
            forceUpdate()

        }
        // {console.log("hello",titlessss,variations)}
    }
    const matchvardetails=(option,title)=>{
        match(option,title)
       
      
    }
    useEffect(()=>{
        console.log(opt,titles)
        if(titles.length === len & opt.length === len)
        {
            item(titles,opt)
            
        }
    },[item])
  
    return (
        
          
        <TouchableHighlight style={{flex:1,backgroundColor:"rgb(5,23,41)",margin:5}} key={index} onPress={()=>matchvardetails(option,title)} underlayColor="grey">
            <View>
                <Text style={{color:"white",padding:8}}>{option}</Text>
            </View>
        </TouchableHighlight>
    )
}
