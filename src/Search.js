import React from 'react';

import {View, StyleSheet,Text,View} from 'react-native';

const Search = ()=>{
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

export default Search;