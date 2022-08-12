import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./Navigator/Navigation"

export default function App() {
  return (
      <NavigationContainer>
       <Navigation/>
    </NavigationContainer>
    
  )

  }