import React, { useState,useEffect } from 'react'
import { View, Text,TouchableOpacity,Button, TouchableHighlight } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import PickerModal from 'react-native-picker-modal-view';

export default function Buttons({att,pid,len,fa,images,match,titles,opt}) {
   
    let objectfinal = []
    const [objoptions, setobjoptions] = useState([])

    const [optionvalue,setoptionvalue] = useState("Click to choose")
    
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

            console.log(objectfinal)
            navigation.navigate("NewProductsvariable",{"id":objectfinal[0].id , "Images":images, pid:pid, opt:opt})

        }
        // {console.log("hello",titlessss,variations)}
    }
    const matchvardetails=(option,title)=>{
        match(option,title)
       
      
    }
    const onSelected =(selected)=> {
        // this.setState({ selectedItem: selected });
        
        // console.log(selected.Name)
        setoptionvalue(selected.Name)
        matchvardetails(selected.Name,att.name)
        return selected;
    }

    const createobj =(o) => {
        for(let i = 0; i< o.length; i++)
        {
            let obj = {}
            obj["Name"] = o[i]
            obj["Value"] = o[i]
            obj["Id"] = i
            // console.log(obj)
            // setobjoptions([...objoptions, obj]);
            if(objoptions.includes(obj) === false)
            {   
                
                objoptions.push(obj)
                
            }
        }

       
        
    }
    useEffect(()=>{
        // console.log(opt,titles)
        
        createobj(att.options)
        
        
    },[att.options])

    useEffect(()=>{
        // console.log(opt,titles)
        if(titles.length === len & opt.length === len)
        {
            item(titles,opt)
        }
      
        
        
    },[item])
  
    return (
        
          
          
            <View style={{flex:1,borderWidth:1,borderColor:"rgb(5,23,41)",backgroundColor:"white"}}>
                
          
            <PickerModal
                   renderSelectView={(disabled, selected, showModal) =>
                        <Button title={optionvalue} onPress={showModal} disabled={disabled} color={"rgb(5,23,41)"}/>
                        
                    }
                    onSelected={onSelected}
                    
                    // onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                    items={objoptions}
                    sortingLanguage={'tr'}
                    showToTopButton={true}
                    selected={optionvalue}
                    showAlphabeticalIndex={true}
                    autoGenerateAlphabeticalIndex={true}
                    selectPlaceholderText={'Choose one...'}
                    onEndReached={() => console.log('list ended...')}
                    searchPlaceholderText={'Search...'}
                    requireSelection={false}
                    autoSort={false}
                />
            </View>
                                
  
    )
}
