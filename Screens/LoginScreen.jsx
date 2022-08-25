import React, {useState} from 'react';
import { View, Text , StyleSheet, Image, Platform, ImageBackground, TextInput, Pressable} from "react-native"
import AppTextInput from '../Component/AppTextInput';
import Screen from '../Component/Screen';
import AppButton from "../Component/AppButton"
import {Formik} from "formik"
import * as Yup from "yup"
import AppText from '../Component/AppText';
import ErrorMessage from '../Component/ErrorMessage';
import AppFormField from '../Component/AppFormField';
import SubmitButton from '../Component/SubmitButton';
import AppForm from '../Component/AppForm';
import AppLogo from '../Component/AppLogo';


 const validationSchema=Yup.object().shape({
  email:Yup.string().required().email().label('Email'),
  password:Yup.string().required().min(7).label("Password")
 })


export default function LoginScreen({navigation}) {

  return (
   
      <View style={styles.background}>
       <AppLogo title="Login"/>
       <AppTextInput placeholderTextColor="white" placeholder="Email Address"/>
       <AppTextInput placeholderTextColor="white" placeholder="Password" secureTextEntry/>
       <View style={styles.loginButton}>
       <AppButton title="Login" color="bowieyellow" style={styles.loginContainer} onPress={()=>navigation.navigate("Register")} />
       <View style={{flexDirection:"row", alignSelf:"center",}}>
       <AppText style={{color:"white",  fontWeight:"bold"}}>Dont't have an Account?</AppText>
       <Pressable>
        <Text style={{color:"white", marginTop:5, fontWeight:"bold"}}> Create Now</Text>
       </Pressable>
       </View>
       </View>    
      </View>
      
     
  );
}

 const styles  =StyleSheet.create({
  container:{
       padding:10,
       flex:1
  },
  background :{
       backgroundColor:"#000",
       flex:1
  },  
  loginButton:{
    paddingTop:20
  }
 })
