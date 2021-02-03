import React from  'react';
import {View ,Text,StyleSheet} from 'react-native';

const CardSection=(props)=>{
    return(
        <View style={styles.cardsection}>
            <Text>
                {props.children}
            </Text>
        </View>
    );
};
export {CardSection};
const styles = StyleSheet.create({
    cardsection:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        //justifyContent:'flex-start',
        //flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    },
    
})