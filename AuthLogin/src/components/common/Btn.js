import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements';

const Btn = (props) => {
    return (
        <View>
            <Button
                title={props.title}
                type="outline"
                onPress={props.onPress}
                />
        </View>
    )
}

export  {Btn}

const styles = StyleSheet.create({})