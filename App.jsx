import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppNavigation from "./Navigator/Navigation"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  return (
    <SafeAreaProvider>
       <AppNavigation/> 
       </SafeAreaProvider>
  )

  }