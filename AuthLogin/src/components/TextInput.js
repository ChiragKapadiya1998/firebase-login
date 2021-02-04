import React,{useState} from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity,ActivityIndicator} from 'react-native'
import firebase from 'firebase';
import {Input,Button,SocialIcon} from 'react-native-elements';
class TextInput extends React.Component {
  
    state={ email:'',password:'',visible:true,loading:false, error:'',emailerror:false,erroremail:''}

    onButtonPress(){
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //email validation
        if (reg.test(this.state.email) === true){
          this.setState({emailerror:true,erroremail:''}) 
        }
        else{
            this.setState({erroremail:'email is not valid'})
        }

        const {email,password}=this.state;
        this.setState({error:'',loading:true})
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
        })
    }
    onLoginFail(){
        this.setState({
            error:'Authentication Failed ',
            loading:false
    })
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }
    reanderButton(){
      if(this.state.loading===true){
         return <ActivityIndicator size={24}/>  //spinner add
      }else{
        return (
            <View style={{margin:5,backgroundColor:'#fab1a0'}}> 
            <Button type='outline' title='Login ' onPress={this.onButtonPress.bind(this)}/>  
            </View>
        );
      }
    }
    onvisibale(){
       this.setState({visible:this.state.visible===true?false:true})
    }
    render(){
    return (<>
       
    <View style={{marginHorizontal:20,backgroundColor:'#red'}}>
    {/* todo : -email and password textinput  -icon add  -password visible and invisible  -email validation   */}
        <Input
            style={{marginTop:50,fontSize:18,color:'#2f3640'}}
            value={this.state.email}
            onChangeText={email=>this.setState({email})}
            onChange={()=>this.setState({erroremail:'',emailerror:false})}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='user@gmail.com'
            leftIcon={
                <Image  style={{width:25,height:25,marginRight:10,marginTop:50}} source={require('../Image/gmail.png')}  />
                }
            rightIcon={
                <>
                {this.state.emailerror === true?
                 <Image  style={{width:25,height:25,marginRight:10,marginTop:50}} source={require('../Image/check.png')}  />:
                 <Image  style={{width:25,height:25,marginRight:10,marginTop:50}} source={require('../Image/uncheck.png')}  />
                }
                </>
            }
        />
        {<Text style={{fontSize:16,color:'red',marginRight:10}}>{this.state.erroremail}</Text>}
        <Input
            style={{fontSize:18,color:'#2f3640'}}
            placeholder='PassWord '
            secureTextEntry={this.state.visible}
            onChangeText={password=>this.setState({password})}
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.password}
            leftIcon={
                <Image  style={{width:25,height:25,marginRight:10}} source={require('../Image/password.png')}  />
                }
            rightIcon={
                <TouchableOpacity onPress={this.onvisibale.bind(this)}>
                {this.state.visible === true?
                 <Image  style={{width:25,height:25,marginRight:10,marginTop:10}} source={require('../Image/visible.png')}  />:
                 <Image  style={{width:25,height:25,marginRight:10,marginTop:10}} source={require('../Image/invisible.png')}  />
                }
                </TouchableOpacity>

            }
        />
        {/* todo error  */}
        <Text style={{fontSize:15,color:'red',marginVertical:5,marginRight:10}}>{this.state.error}</Text>
        {/* call the  button and Spinner */}
        {this.reanderButton()}
        
   
    </View>
    </>
)}
}

export default TextInput;

const styles = StyleSheet.create({})
