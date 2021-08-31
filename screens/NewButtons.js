import React, { useState,useEffect } from 'react'
import { View, Text,TouchableHighlight,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
const useForceUpdate = () => useState()[1];
export default function NewButtons({att,len,fa,images,match,titles,opt,uid,copt,index}) {
   
    const forceUpdate = useForceUpdate();

    let objectfinal = []
    // const [optiontype,setoptiontype] = useState("Choose an option to change")
    // const [optionvalue,setoptionvalue] = useState("")
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
            // console.log(objectfinal[0].id)
            // navigation.navigate("NewProductsvariable",{"id":objectfinal[0].id , "Images":images, pid:pid})
            uid(objectfinal[0].id,images)
            // console.log("final")
            forceUpdate()

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
                selectedValue={copt[index]}
                onValueChange={(option, index) =>{
                    // matchvardetails(option,title)
                    // setoptiontype(option)
                    // setoptionvalue(option)
                    matchvardetails(option,att.name)
                }}
            >
                {/* <Picker.Item label={optiontype} value={optiontype}/> */}
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
