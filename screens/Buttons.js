import React, { useState,useEffect } from 'react'
import { View, Text,TouchableOpacity,Button, TouchableHighlight } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
export default function Buttons({att,pid,len,fa,images,match,titles,opt}) {
   
    let objectfinal = []
    const [optiontype,setoptiontype] = useState("Choose an option")
    const [optionvalue,setoptionvalue] = useState("")
    
    const navigation = useNavigation(); 
    const item=(t,o)=>{
        if((t.length === len) & (o.length === len)){

            let object = {}
            for(let i=0;i<len;i++){
                object[t[i]] = o[i]
            }
            // console.log(object)
            objectfinal = (fa.filter(fas => {
                return Object.keys(object).every(e => fas[e] === object[e])
            }))

            // console.log(objectfinal)
            navigation.navigate("NewProductsvariable",{"id":objectfinal[0].id , "Images":images, pid:pid})

        }
        // {console.log("hello",titlessss,variations)}
    }
    const matchvardetails=(option,title)=>{
        match(option,title)
       
      
    }
    useEffect(()=>{
        // console.log(opt,titles)
        if(titles.length === len & opt.length === len)
        {
            item(titles,opt)
        }
    },[item])
  
    return (
        
          
          
            <View style={{flex:1,borderWidth:1,borderColor:"rgb(5,23,41)",backgroundColor:"white"}}>
            <Picker
                style={{ height: 35,padding:5, width:"100%" }}
                selectedValue={optiontype}
                onValueChange={(option, index) =>{
                    // matchvardetails(option,title)
                    setoptionvalue(option)
                    matchvardetails(option,att.name)
                }
                }
            >
                <Picker.Item label={optiontype} value={optiontype}/>
            {
                att.options.map((option,index)=>{
                    return(
                        <Picker.Item label={option} value={option} key={index}/>
                        
                    )
                })
            }
            </Picker>
            </View>
                                
  
    )
}
