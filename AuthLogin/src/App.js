import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import firebase from 'firebase';
import {Btn, Header, Spinner} from './components/common'
import LoginFrom from './components/LoginFrom';
import TextInput from './components/TextInput';
export default class App extends Component {
state={loggrdIn:null}
  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBuYensXkSnYOIZslJcPf4lOeJL__1VwK0",
      authDomain: "authentication-7ae4b.firebaseapp.com",
      projectId: "authentication-7ae4b",
      storageBucket: "authentication-7ae4b.appspot.com",
      messagingSenderId: "458364704776",
      appId: "1:458364704776:web:71608a379307ab3d67d9bd"
    });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggrdIn:true})
      }else{
        this.setState({loggrdIn:false})
      }
    })
  }
  reanderContext(){
    switch(this.state.loggrdIn){
      case true:
        return (<Btn  title="LogOut" onPress={()=>{firebase.auth().signOut()}}/>);
      case false:
        return(
          // <TextInput />
          <LoginFrom />
        );
      default :
         return <Spinner />
      
        
    }
   
  }
  render() {
    return (
      <>
      <SafeAreaView >
        <Header headertitle="Login"/>
        {this.reanderContext()}
        {/* <LoginFrom /> */}
        {/* <TextInput /> */}
      </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({})
