import React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import { CardSection } from './index';

const Card =(props)=>{
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    );
}
export {Card};
const styles = StyleSheet.create({
    card:{
        borderWidth:1,
        borderColor:'#ddd',
        borderBottomColor:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginHorizontal:5,
        marginTop:10,
        paddingHorizontal:20,
    }
    
})