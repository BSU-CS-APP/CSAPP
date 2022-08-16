import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialCommunityIcons, FontAwesome5, AntDesign, MaterialIcons } from "@expo/vector-icons"


import WelcomeScreen from "../Screens/WelcomeScreen"
import LoginScreen from "../Screens/LoginScreen"
import SignupScreen from "../Screens/SignupScreen"
import AccountScreen from "../Screens/AccountScreen"
import JobScreen from "../Screens/JobScreen"
import EventScreen from "../Screens/EventScreen"
import CoursesScreen from "../Screens/CoursesScreen"
import Clubscreen from "../Screens/ClubScreen"




const Stack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
 const AppTab = createBottomTabNavigator();
 const JobStack = createNativeStackNavigator()
 const EventStack = createNativeStackNavigator();
 const CourseStack = createNativeStackNavigator();


 const WelcomeStackScreen =()=>(
  <Stack.Navigator>
      <Stack.Screen name="Homes" component={WelcomeScreen} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Register" component={SignupScreen} />
      </Stack.Navigator>
 )
 const AccountStackScreen =()=>(
  <Stack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} options={{
        headerShown:false
      }}/>
      
      </Stack.Navigator>
 )

 const CoursesStackScreen =()=>(
  <Stack.Navigator>
      <CourseStack.Screen name="Course" component={CoursesScreen} options={{
        headerShown:false
      }}/>
      
      </Stack.Navigator>
 )

 const EventStackScreen =()=>(
  <Stack.Navigator>
      <EventStack.Screen name="Event" component={EventSscreen} options={{
        headerShown:false
      }}/>
      
      </Stack.Navigator>
 )

 const JobStackScreen =()=>(
  <Stack.Navigator>
      <JobStack.Screen name="Jobs" component={JobScreen} options={{
        headerShown:false
      }}/>
      
      </Stack.Navigator>
 )

 

const AppNavigation = () => {
  return (
    <AppTab.Navigator>
      
      <AppTab.Screen name ="Job" component={JobStackScreen} options={{
        tabBarIcon:()=><Ionicons name="search-circle-sharp" size={24} color="black" />
      }}/>
      <AppTab.Screen name ="Accounts" component={CoursesStackScreen} options={{
        tabBarIcon:()=><Ionicons name="person-add-sharp" size={24} color="black" />
      }}/>
      <AppTab.Screen name ="Courses" component={CoursesStackScreen} options={{
        tabBarIcon:()=><MaterialIcons name="quick-contacts-mail" size={24} color="black" />
      }}/>
      <AppTab.Screen name ="Events" component={EventStackScreen} options={{
        tabBarIcon:()=><MaterialIcons name="quick-contacts-mail" size={24} color="black" />
      }}/>
      
    </AppTab.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})