import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import AppButton from '../Component/AppButton';
import LoginScreen from "./LoginScreen"

export default function WelcomeScreen() {
  return (
   
      <ImageBackground style={styles.background} 
      blurRadius={0.5}
      source={require("../assets/backgroundplacement.jpeg")}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/Bowielogo.png')}/>
        <Text style={styles.tagline}>Welcome To Computer Science</Text>
        </View>
          <View style={styles.buttonContainer}>
          <AppButton title ="Login" />
          <AppButton title ="Register" color="bowieyellow"/>
          </View>
      </ImageBackground>
    
  );
}

 const styles  =  StyleSheet.create({
background:{
  flex:1,
  justifyContent: "flex-end",
  alignItems: "center"
}, 
tagline:{
fontSize:25,
fontWeight: "600",
paddingVertical:20
},
buttonContainer:{
  padding:20,
  width:'100%'
},
logo:{
   width:100,
   height:100,
   
},

logoContainer:{
  position:'absolute',
  top:70,
  alignItems:"center"
}
 })