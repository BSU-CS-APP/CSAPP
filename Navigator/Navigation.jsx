import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../Screens/WelcomeScreen"
import LoginScreen from "../Screens/LoginScreen"
import SignupScreen from "../Screens/SignupScreen"

// function WelcomeScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }

const Stack = createNativeStackNavigator();

const Navigation = () => {
    
  return (
    
      <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Register" component={SignupScreen} />
      </Stack.Navigator>
   
  )
}

export default Navigation

const styles = StyleSheet.create({})