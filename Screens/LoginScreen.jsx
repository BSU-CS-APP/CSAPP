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
      source={require("../assets/Bowielogo.png")}/>
       <AppForm initialValues={{email:"", password:""}}
        onSubmit={values=>console.log(values)}
        validationSchema={validationSchema}
       >
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
       <SubmitButton title="Login" />
       </AppForm>
     </Screen>
  );
}

 const styles  =StyleSheet.create({
  container:{
       padding:10
  },
    
    logo:{
      width:80,
      height:80,
      alignSelf: 'center', 
      marginTop:30,
      marginBottom:20,
    }
 })
