import React from 'react'
import { Image, StyleSheet, Text, View ,TextInput} from 'react-native'


const Input = (props) => {
    const {contioner,label,input}=styles;
    return (
        <View style={contioner}>
           <Text style={label}>{props.label}</Text>
           <TextInput
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onChangeText={props.onChangeText}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder={props.placeholder}
            style={input}
        />
        </View>
    )
}

export  {Input}

const styles = StyleSheet.create({
    contioner:{
        flexDirection:'row',
        height:40,
        // flex:1,
        alignItems:'center'
    },
    label:{
        fontSize:18,
        flex:1,
        paddingLeft:10
    },
    input:{
      flex:3,
      fontSize:18,
      //paddingHorizontal:5,
      lineHeight:23
    }

})
