import React from 'react';
import {View,Text,ActivityIndicator}  from 'react-native';

const Spinner = (props) =>{
    return(
        <View>
            <ActivityIndicator  size={props.size ||'large'}/>
        </View>
    )
}
export {Spinner};