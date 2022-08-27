
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import BookingScreen from "../Screens/BookingScreen"
import CourseDetailscreen from "../Screens/CourseDetailScreen"
import DetailScreen from "../Screens/DetailsScreen"
import FacultyScreen from "../Screens/Faculty"
import TutorDetailScreen from "../Screens/TutorDetailScreen"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,} from "@react-navigation/drawer"

  const Drawer = createDrawerNavigator();
   const Stack = createNativeStackNavigator()
   //
   
const AppNavigator=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Tutor" component={BookingScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Faculty" component={DetailScreen}/>
       <Stack.Screen name="Detail" options={{headerShown:false}} component={TutorDetailScreen}/>
       <Stack.Screen name="Book" options={{headerShown:false}} component={FacultyScreen }/>
    </Stack.Navigator>
  )
}
   







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

const AppDrawer=()=>{
  return (
    
     <Drawer.Navigator backBehavior="history" options={{drawerType:"slide"}} drawerContent={props=><CustomDrawerContent{...props}/>} >
       <Drawer.Screen name="Home" component={AppNavigator}  options={{headerStatusBarHeight:0}}/>
     </Drawer.Navigator>
   
  )
 }

 const AppNavigation=()=>{
  return(
      
       <AppDrawer/>
      
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

