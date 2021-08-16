import React, { useState,useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Productimage({id}) {
    const [imagelink,setimagelink] = useState("https://media.gettyimages.com/videos/loading-symbol-loop-video-id547356852?s=640x640")
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.log(e)
        }
    }
    const fetchimage = async (ids) => {

            let token = await getData()
            await fetch('https://olikraft.shubhchintak.co/api/letscms/v1/product/'+ ids, {
                
                headers: {
                    "letscms_token": token
                }
            })
            .then(response => response.json())
            .then(function (response)
            {
                setimagelink(response.data.image)
            }).catch((e)=>{
                console.log(e)
            })

    }
    useEffect(() => 
    {
    fetchimage(id)
    
    }, [])
    let Image_Http_URL ={ uri: imagelink};
    return (
        <View style={{justifyContent:"center",marginHorizontal:10}}>
            <Image source={Image_Http_URL} style={{height:80,width:80}} resizeMode="contain"/>
        </View>
    )
}
