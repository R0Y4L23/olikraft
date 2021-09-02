import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import Buttons from './Buttons';
import NewButtons from './NewButtons';
const axios = require('axios');
export default function NewAttributesarray({id,Images,match,titles,opt,updateid,chooseoption}) {
    const [Attributes,setAttributes] = useState([])
    const [fa,setfa] = useState([])
    const fetchvarchildren = async (ids) =>{
            
        await axios.get("https://olikraft.com/api/wc/v3/products/" + ids, {
            auth: {
                username: 'ck_e296377c8e66081c9321b68f176b42812ca4c40a',
                password: 'cs_d3c061b568c0318c269f0b4c3ef6aa8a855e520e'
              }
          })
          .then(response => {
                
               setAttributes(response.data.attributes)
           
          })
          .catch(function (error) {
            console.log(error);
          })

        axios.get("https://olikraft.com/api/wc/v3/products/" + ids + "/variations", {
            auth: {
                username: 'ck_e296377c8e66081c9321b68f176b42812ca4c40a',
                password: 'cs_d3c061b568c0318c269f0b4c3ef6aa8a855e520e'
              }
          })
          .then(function (response) {

               setfa((response.data.map(({id,attributes,...rest}) => ({id,attributes}))).map(function(row){  // For each row in data.
                    // Set the static data in the result row
                    var reference = { id: row.id};
                    
                    // Iterate over `row.references`, and add the current reference to the result.
                    row.attributes.reduce(function(previous, current){
                        previous[ current.name] = current.option;
                        return previous;
                    }, reference);
                    
                    return reference;
                    }));
               
          })
          .catch(function (error) {
            console.log(error);
          })

        
    }
useEffect(()=>{
   
    fetchvarchildren(id)
   
},[])

    return (
        <View>

            {   
                    (Attributes.length != 0)
                    ?Attributes.map((att,idx)=>{
                        return(
                            <View key={idx}>
                                <View style={{marginLeft:15}}>
                                    <Text style={{color:"black",fontWeight:"bold",fontSize:19}}>{att.name} :</Text>
                                </View>
                               
                                <View style={{flexDirection:"row",marginVertical:5,marginHorizontal:15}}>
                                    <NewButtons att= {att} len={Attributes.length} fa={fa} images={Images} match={match} titles={titles} opt={opt} pid={id} uid={updateid} copt={chooseoption} index={idx}/>
                                </View>
                                       
                            </View>
                        )
                    })
                    :<View></View>
                }
        </View>
    )
}
