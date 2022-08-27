  import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppNavigation from "./Navigator/Navigation"
import { NavigationContainer } from '@react-navigation/native'



export default function App() {
  return (
    <NavigationContainer>
           <AppNavigation/>
    </NavigationContainer>
     
   
  )

  }