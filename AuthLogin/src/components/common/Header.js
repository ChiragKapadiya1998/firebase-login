import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header =(props)=>{
    return(
        <View  style={styles.header}>
            <Text style={styles.title}>{props.headertitle}</Text>
        </View>
    );
};
export {Header};
const styles = StyleSheet.create({
    header:{
        height:60,
        paddingTop:12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F8F8F8',
        shadowOffset:'#000',
        shadowOpacity:0.2,
        shadowOffset:{width:0,height:2},
        borderWidth:0.5,
        borderColor:'grey',
        position:'relative'
    },
    title:{
        fontSize:18
    }
})