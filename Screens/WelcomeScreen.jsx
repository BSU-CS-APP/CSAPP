import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import AppButton from '../Component/AppButton';
import LoginScreen from "./LoginScreen"

export default function WelcomeScreen({navigation}) {
  return (
   
      <ImageBackground style={styles.background} 
      blurRadius={0.5}
      >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/bsu-logo.png')}/>
        <Text style={styles.tagline}>Computer Science Department</Text>
        <View style={styles.second_logo}>
           <Image source={require('../assets/bowie-state-university.png')}/>
        </View>
        </View>
          <View style={styles.buttonContainer}>
          <AppButton title ="Login"  onPress={()=>navigation.navigate("Login")}/>
          <AppButton title ="Register" color="bowieyellow" onPress={()=>navigation.navigate("Register")}/>
          </View>
      </ImageBackground>
    
  );
}

 const styles  =  StyleSheet.create({
background:{
  flex:1,
  justifyContent: "flex-end",
  alignItems: "center",
  backgroundColor:"white"
}, 
second_logo:{
   marginTop:140
},
tagline:{
fontSize:25,
fontWeight: "600",
paddingVertical:5
},
buttonContainer:{
  padding:20,
  width:'100%'
},
logo:{
   width:150,
   height:130,
   
},

logoContainer:{
  position:'absolute',
  top:70,
  alignItems:"center"
}
 })