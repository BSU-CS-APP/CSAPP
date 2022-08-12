import React, {useState} from 'react';
import { View, Text , StyleSheet, Image, Platform, ImageBackground} from "react-native"
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


 const validationSchema=Yup.object().shape({
  email:Yup.string().required().email().label('Email'),
  password:Yup.string().required().min(7).label("Password")
 })


export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image 
      style={styles.logo}
      source={require("../assets/bowiesign.jpeg")}/>
       <AppForm initialValues={{email:"", password:""}}
        onSubmit={values=>alert(JSON.stringify(values))}
        validationSchema={validationSchema}
       >
        <AppText style={{color:"#60615c",fontSize:20, marginLeft:5}}>WELCOME BACK</AppText>
        <AppText style={{color:"#fc9003", fontSize:30, fontWeight:"bold", marginLeft:5}}>Account Login</AppText>
      <AppFormField
       icon="email"
       name="email"
       placeholder="email"
       autoCorrect={false}
       keyboardType="email-address"
       autoCapitalize="none"
       textContentType="emailAddress"
       />
       <AppFormField
       icon="lock"
       placeholder="Password"
       autoCorrect={false}
      name="password"
       keyboardType="email-address"
       autoCapitalize="none"
       secureTextEntry={true}
       textContentType="password"
       />
       <SubmitButton title="Register" />
       </AppForm>
     </Screen>
  );
}

 const styles  =StyleSheet.create({
  container:{
       padding:10
  },
    
    logo:{
      width:"100%",
      height:230,
      alignSelf: 'center', 
      marginTop:5,
      marginBottom:10,
    }
 })
