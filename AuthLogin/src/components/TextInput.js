import React,{useState} from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import {Input,Button} from 'react-native-elements';
class TextInput extends React.Component {
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');
    // const [visible,setVisible]=useState(true)
    render(){
    state={ email:'',password:''}
    return (
    <View style={{marginHorizontal:20}}>
        <Input
            value={this.state.email}
            onChangeText={e=>this.setState(e)}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='user@gmail.com'
            leftIcon={
                <Image  style={{width:25,height:25,marginRight:10}} source={require('../Image/gmail.png')}  />
                }
        />
        <Input
            placeholder='PassWord '
            secureTextEntry={visible}
            onChangeText={e=>this.setState(e)}
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.password}
            leftIcon={
                <Image  style={{width:25,height:25,marginRight:10}} source={require('../Image/password.png')}  />
                }
            rightIcon={
                <TouchableOpacity onPress={()=>setVisible(visible===false?true:false)}>
                {visible ===true?
                 <Image  style={{width:25,height:25,marginRight:10}} source={require('../Image/visible.png')}  />:
                 <Image  style={{width:25,height:25,marginRight:10}} source={require('../Image/invisible.png')}  />
                }
                </TouchableOpacity>

            }
        />
        <Button type='outline' title='Login'/>
   
    </View>
)}
}

export default TextInput;

const styles = StyleSheet.create({})
