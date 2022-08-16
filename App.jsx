import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from "./Navigator/Navigation"
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from "./Screens/LoginScreen"

export default function App() {
  return (
    <LoginScreen/>
    //   <NavigationContainer>
    //    <AppNavigation/>
    // </NavigationContainer>
    
  )

  }