import React from 'react';
import {View, StyleSheet} from 'react-native';

// We install redux react-redux with: npm install --save redux react-redux

const AppNavigator = ()=>{
    return (
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    )
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
})

export default AppNavigator;