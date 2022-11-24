import React from 'react';
import {StatusBar} from 'expo-status-bar';

import {findNodeHandle, StyleSheet,Text,View,Dimensions,FlatList,Animated,Image} from 'react-native';

const {width, height} =Dimensions.get('screen');


const images ={
    man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto',
    women:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto',
    kids:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto',
    skullcandy:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto',
    help:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto'
}

const data = Object.keys(images).map((i)=>({
    key:i,
    title:i,
    image:images[i],
    ref:React.createRef()
}));

const Tab =React.forwardRef(({item}, ref)=>{
    return(
        <View ref={ref}>
            <Text style={{
                color:'white', 
                fontSize:84/data.length, 
                fontWeight:'800',
                textTransform:'uppercase',
                }}>{item.title} </Text>
        </View>
    );
});

const Indicator = ()=>{
    return <View 
        style={{
            position:'absolute',
            height:4,
            width:100,
            backgroundColor:'white',
            bottom:-10,
        }}
    
    />
}

const Tabs =({data, scrollX})=>{
    const containerRef=React.useRef();

    React.useEffect(()=>{
        data.forEach(item=>{
            item.ref.current.measureLayout(containerRef.current,(x,y,width,height)=>{
                
            })
        })
    })

    return(
        <View style={{position:'absolute', top:50, width}}>
            <View 
                ref={containerRef}
                style={{
                justifyContent:'space-evenly', 
                flex:1,
                flexDirection:'row',
                }}>
                {data.map(item=>{
                    return <Tab key={item.key} item={item}  ref={item.ref} />
                })}
            </View>
            <Indicator/>
        </View>
    )
}

const Events = ()=>{

    const scrollX=React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <Animated.FlatList
                data={data}
                keyExtractor={item => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                paddingEnabled
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x:scrollX}}}],
                    {useNativeDriver:false}
                )}
                bounce={false}
                renderItem={({ item }) => {
                return(
                    <View style={{width,height}}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ flex: 1, resizeMode: 'cover' }}

                        />
                        <View style={[StyleSheet.absoluteFillObject,
                            {backgroundColor:'rgba(0,0,0,0.3)'},
                            ]} />
                    </View>
                );
            }}
            
            />

            <Tabs scrollx={scrollX} data={data} />
        </View>
    )
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
})

export default Events;