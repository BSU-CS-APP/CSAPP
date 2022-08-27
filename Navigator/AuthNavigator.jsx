import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from "../Screens/WelcomeScreen"
import RegisterScreen from "../Screens/LoginScreen"
import WelcomeScreen from "../Screens/WelcomeScreen"


const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
    <Screen name="Welcome" component={WelcomeScreen} />
    <Screen name="Login" component={LoginScreen}/>
    <Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator

