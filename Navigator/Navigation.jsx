
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import BookingScreen from "../Screens/BookingScreen"
import CourseDetailscreen from "../Screens/CourseDetailScreen"
import DetailScreen from "../Screens/DetailsScreen"
import FacultyScreen from "../Screens/Faculty"
import WelcomeScreen from "../Screens/WelcomeScreen"
import TutorDetailScreen from "../Screens/TutorDetailScreen"
import LoginScreen from "../Screens/LoginScreen"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import SignupScreen from "../Screens/SignupScreen"
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,} from "@react-navigation/drawer"

  const Drawer = createDrawerNavigator();
   const Stack = createNativeStackNavigator()

   const AuthNavigator =()=>(
     <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
         headerShown:false
      }}/>
      <Stack.Screen name="Login" component={LoginScreen}options={{

headerShown:false
}}/>
      <Stack.Screen name="Register" component={SignupScreen} options={{

headerShown:false
}}/>
 <Stack.Screen name="Tutor" component={TutorDetailScreen}/>
       <Stack.Screen name="Faculty" component={FacultyScreen}/>
     </Stack.Navigator>
   )







const CustomDrawerContent=(props)=>{
  return (
      <ScrollView style={styles.container}>
          <View>
              <View style={styles.drawerHeader}>
                  <Text style={styles.drawerHeaderText}>Drawer</Text>
              </View>
          </View>
          <DrawerContentScrollView {...props}>
              <DrawerItemList {...props}/>
               <DrawerItem
                label="close drawer"
                onPress={()=>props.navigation.closeDrawer()}
               />
          </DrawerContentScrollView>
      </ScrollView>
  )
}


// 

const MyDrawer=()=>{
  return (
    
     <Drawer.Navigator backBehavior="history" options={{drawerType:"slide"}} drawerContent={props=><CustomDrawerContent{...props}/>} >
       <Drawer.Screen name="Home" component={AuthNavigator}  options={{headerStatusBarHeight:0}}/>
     </Drawer.Navigator>
   
  )
 }

 const AppNavigation=()=>{
  return(
  
      <NavigationContainer>
      <MyDrawer/>
      </NavigationContainer>
      
  )
 }

 const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"black"
  },
  drawerHeader:{
      backgroundColor:"black",
      height:150,
      alignItems: "center",
      justifyContent: "center",
      flex:1,
      flexDirection:"row"
  },
  drawerHeaderText:{
      color:"white",
      fontSize:24,
      fontWeight:"bold"
  }
})

export default AppNavigation

