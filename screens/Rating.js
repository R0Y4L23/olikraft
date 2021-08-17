import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList } from 'react-native'
import { EvilIcons} from '@expo/vector-icons';
import { render } from 'react-dom';


class Rating extends React.Component {
    // constructor()
    // {
    //     super();
    //     this.state={
    //         data:[]
    //     }
    // }

    // componentDidMount(){
    //     this.callApi();
    // }
    // async callApi(){
    //     let resp = await fetch('');
    //     let respJson = await resp.json();
    //     this.setState({data:respJson})
    // }

    render(){
    return (
        <ScrollView style={styles.container}>
            <View style={{backgroundColor:'#f0f0f0', height: 150, alignItems: 'center', paddingTop: 20}}>
                <Text style={{fontWeight:'bold'}}>Overall Rating</Text>
                <Text style={{fontSize: 35, fontWeight: 'bold', marginTop: 2 }}>4.0</Text>
                <View style={{flexDirection: 'row', marginTop: 6}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                <Text style={{color: 'grey', marginTop: 6}}>based on 54 Review</Text>
            </View>
         <View style={styles.top}>
             <View style={styles.box}>
                <Text style={styles.ratings}>Execllent</Text>
                <View style={styles.containsA}>
                <View style={styles.innerA}/>
                </View>
            </View> 
             <View style={styles.box}>
                <Text style={styles.ratings}>Good</Text>
                <View style={styles.containsB}>
                <View style={styles.innerB}/>
                </View>
            </View> 
             <View style={styles.box}>
                <Text style={styles.ratings}>Average</Text>
                <View style={styles.containsC}>
                <View style={styles.innerC}/>
                </View>
            </View> 
             <View style={styles.box}>
                <Text style={styles.ratings}>Below Average</Text>
                <View style={styles.containsD}>
                <View style={styles.innerD}/>
                </View>
            </View> 
             <View style={styles.box}>
                <Text style={styles.ratings}>Poor</Text>
                <View style={styles.containsE}>
                <View style={styles.innerE}/>
                </View>
            </View> 
         </View>
         <View style={styles.bottom}>
            <View style={styles.review}>
                <View style={styles.left}>
                    <Image 
                    style={{width: 76, height: 76, borderRadius: 50 }}
                    source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style={{marginTop: 2, fontWeight: 'bold'}}>Oucik Delivery</Text>
                    <Text style={{marginTop: 2}}>Aiden Sanders</Text>
                  <View style={{flexDirection: 'row'}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                    <Text style={styles.details}>Perfect Excellent Quality!</Text>
                </View>
            </View>
            <View style={styles.review}>
                <View style={styles.left}>
                    <Image 
                    style={{width: 76, height: 76, borderRadius: 50 }}
                    source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style={{marginTop: 2, fontWeight: 'bold'}}>Oucik Delivery</Text>
                    <Text style={{marginTop: 3}}>Aiden Sanders</Text>
                  <View style={{flexDirection: 'row'}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                    <Text style={styles.details}>Perfect Excellent Quality!</Text>
                </View>
            </View>
            <View style={styles.review}>
                <View style={styles.left}>
                    <Image 
                    style={{width: 76, height: 76, borderRadius: 50 }}
                    source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style={{marginTop: 2, fontWeight: 'bold'}}>Oucik Delivery</Text>
                    <Text style={{marginTop: 2}}>Aiden Sanders</Text>
                    <View style={{flexDirection: 'row'}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                    <Text style={styles.details}>Perfect Excllent Quality!</Text>
                </View>
            </View>
            <View style={styles.review}>
                <View style={styles.left}>
                    <Image 
                    style={{width: 76, height: 76, borderRadius: 50 }}
                    source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style={{marginTop: 2, fontWeight: 'bold'}}>Oucik Delivery</Text>
                    <Text style={{marginTop: 2}}>Aiden Sanders</Text>
                    <View style={{flexDirection: 'row'}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                    <Text style={styles.details}>Perfect Excellent Quality!</Text>
                </View>
            </View>
            <View style={styles.review}>
                <View style={styles.left}>
                    <Image 
                    style={{width: 76, height: 76, borderRadius: 50 }}
                    source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style={{marginTop: 2, fontWeight: 'bold'}}>Oucik Delivery</Text>
                    <Text style={{marginTop: 2}}>Aiden Sanders</Text>
                    <View style={{flexDirection: 'row'}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                    <Text style={styles.details}>Perfect Excellent Quality!</Text>
                </View>
            </View>
            <View style={styles.review}>
                <View style={styles.left}>
                    <Image 
                    style={{width: 76, height: 76, borderRadius: 50 }}
                    source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style={{marginTop: 2, fontWeight: 'bold'}}>Oucik Delivery</Text>
                    <Text style={{marginTop: 2}}>Aiden Sanders</Text>
                    <View style={{flexDirection: 'row'}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                    <Text style={styles.details}>Perfect Excellent Quality!</Text>
                </View>
            </View>
            <View style={styles.review}>
                <View style={styles.left}>
                    <Image 
                    style={{width: 76, height: 76, borderRadius: 50 }}
                    source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style={{marginTop: 2, fontWeight: 'bold'}}>Oucik Delivery</Text>
                    <Text style={{marginTop: 2}}>Aiden Sanders</Text>
                    <View style={{flexDirection: 'row'}} >
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    <EvilIcons style={{marginTop:4, fontWeight:'bold'}}name="star" size={30} color="yellow" />
                    </View>
                    <Text style={styles.details}>Perfect Excellent Quality!</Text>
                </View>
            </View>
          
         </View>
        </ScrollView>
    )
}
};
export default Rating;

const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'orange',
        width: '100%',
        height: 'auto'
    },
    top: {
        backgroundColor: '#f0f0f0',
        width: '100%',
        height: 200,
    },
    box: {
        // backgroundColor: 'yellow',
        height: 3,
        margin: '.2%',
        flex: 1,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 10 ,
        
    },
    rating: {
        backgroundColor: 'blue',
        width: '20%',
        fontWeight: 'bold'
    },
    
    containsA: {
        width: '60%',
        height: 10,
        padding: 2,
        borderRadius: 25,
        borderColor: 'red',
        backgroundColor: 'whitesmoke',
        marginLeft: 60
    },
    containsB: {
        width: '60%',
        height: 10,
        padding: 2,
        borderRadius: 25,
        borderColor: 'red',
        backgroundColor: 'whitesmoke',
        marginLeft: 83
    },
    containsC: {
        width: '60%',
        height: 10,
        padding: 2,
        borderRadius: 25,
        borderColor: 'red',
        backgroundColor: 'whitesmoke',
        marginLeft: 66
    },
    containsD: {
        width: '60%',
        height: 10,
        padding: 2,
        borderRadius: 25,
        borderColor: 'red',
        backgroundColor: 'whitesmoke',
        marginLeft: 26
    },
    containsE: {
        width: '60%',
        height: 10,
        padding: 2,
        borderRadius: 25,
        borderColor: 'red',
        backgroundColor: 'whitesmoke',
        marginLeft: 90
    },
    innerA: {
        width: '90%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: 'green',
    },
    innerB: {
        width: '80%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: 'lightgreen'
    },
    innerC: {
        width: '70%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: 'yellow'
    },
    innerD: {
        width: '60%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: 'orange'
    },
    innerE: {
        width: '50%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: 'red'
    },

    bottom: {
        width: '100%',
        backgroundColor: 'white',
        height: 900 
    },

    review: {
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'lightgreen',
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderBottomColor: 'grey',
    },

    left: {
        width: '30%'
    },

    right: {
        width: '70%'
    }
});
