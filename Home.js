// import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View,Animated,ScrolView,Dimensions} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


// Post...
import Post1 from '../assets/popular1.jpg';
import Post2 from '../assets/popular2.jpg';
import Post3 from '../assets/popular5.jpg';
import Post4 from "../assets/popular4.jpg";
import Post5 from '../assets/popular3.jpg';
import Post6 from '../assets/popular6.jpg';


// const {usewidth,useheight}=Dimensions.get('screen');

function Home(){

       // SafeArea Value...
const edges= useSafeAreaInsets();
       
    return(
            <ScrolView>
               <View style={{
                    paddingLeft:15,
                    paddingRight:15,
                    paddingTop:100,
                    paddingBottom:25
               }}>
                    {
                        [Post1,Post2,Post3,Post4,Post5,Post6].map((item,index)=>{
                            return(
                                <View source={item} key={index} style={{
                                with:Dimensions.get('screen').width - 30,
                                height:250,
                                borderRadius:15,
                                paddingTop:20
                            }}>

                            </View>
                            )
                        })
                    }
               </View>
            </ScrolView>
    );
};

export default Home;