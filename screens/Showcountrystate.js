import React, {useEffect,useState} from 'react'
import { View, Text } from 'react-native'
import { Paragraph } from 'react-native-paper';

export default function Showcountrystate({isaddressfetched,updateaddressfetched,country,state,countrylist,statelist}) {
    const [filteredcountry,setfilteredcountry] = useState("")
    const [filteredstate,setfilteredstate] = useState("")
    const fetchcountrystate = (c,s) =>{
        
        setfilteredcountry(Object.keys(countrylist)
        .filter(key => c.includes(key))
        .reduce((obj, key) => {
        //   obj[key] = countrylist[key];
          return countrylist[key];
        }, {}));

        const filter = (Object.keys(statelist)
        .filter(keys => c.includes(keys))
        .reduce((obj1, keys) => {
        //   obj[key] = countrylist[key];
          return statelist[keys];
        }, {}));
        // console.log(Statelist[s])

        setfilteredstate(Object.keys(filter)
        .filter(keys => s.includes(keys))
        .reduce((obj1, keys) => {
        //   obj[key] = countrylist[key];
          return filter[keys];
        }, {}));
        
        // console.log("hello",filteredstate)
      }
    useEffect(()=>{
        if(isaddressfetched){
            updateaddressfetched()
            fetchcountrystate(country,state)
        }
        // console.log(country,state)
      },[isaddressfetched])

      console.log(filteredstate,filteredcountry)
    return (
        <View>
           <Text>{(filteredstate&&filteredcountry)?(<Paragraph style={{fontSize:12}}>{filteredstate}<Text>,</Text>{filteredcountry}.</Paragraph>):(<></>)}</Text>
        </View>
    )
}
