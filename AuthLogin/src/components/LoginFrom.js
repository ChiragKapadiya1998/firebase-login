import React,{Component} from 'react';
import {Image, StyleSheet,Text, TouchableWithoutFeedbackBase, View} from 'react-native';
import firebase from 'firebase';
import {Card,Btn,Input,Spinner} from './common/index'
class LoginFrom extends Component{
    state = {email: "", password: "",error:'',loading:false};
      
      onButtonPress(){
         const {email,password} =this.state;    
         this.setState({error:'',loading:true}); 
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
              error:'Auhtentication Failed. ',
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
      renderButton(){
          if(this.state.loading===true){
             return( <Spinner  size={24}/>)
          }else{
           return( <Btn  title="Login" onPress={this.onButtonPress.bind(this)}/>)
          }
      }
    render(){
        return(
            <>  
                <Card>
                 <Input 
                    label='Email'
                    value={this.state.email} 
                    onChangeText={email=>this.setState({email})} 
                    placeholder="user@gmail.com"/>
                 <Input 
                    label='PassWord' 
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password=>this.setState({password})}
                    placeholder="Password"
                    />
                    <Text style={{fontSize:18,color:'red',alignItems:'center'}}>{this.state.error}</Text> 
                   {this.renderButton()}
                </Card>
        </>
        )
    }
}
export default LoginFrom;
const styles = StyleSheet.create({
    
})