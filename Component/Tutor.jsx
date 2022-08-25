import { View, Text, StyleSheet, Pressable, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import data from "../data/Courses"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import AppText from './AppText'


const categoryTutoe = ({image, tutor_name, status }) => {
  return (
    <View style={styles.gridItem}>
      
      <Image source={image} style={{
        width:"100%", 
      borderBottomRightRadius:25,
       borderBottomLeftRadius:25, 
       height:120}}
       />
        <View style={styles.innerContainer}>
        <AppText style={{color:"#fff"}}>{tutor_name}</AppText>
        <AppText style={{color:"#fff"}}>In Person</AppText>
        <AppText style={{color:"#fff"}}>online</AppText>
        <AppText style={{color:"#fff"}}>Available</AppText>
        </View>
          <TouchableOpacity style={{height:60, width:130, marginLeft:10}}>
            <AppText style={{backgroundColor:"#cc6012"}}>View More</AppText>
          </TouchableOpacity>
    </View>
  )
}


 const styles = StyleSheet.create({
     gridItem :{
         flex:1,
         margin:16,
         height:280,
         width:5000,
         elevation:4,
         shadowColor:"white",
         shadowOpacity:0.25,
         shadowOffset:{width:0, height:2},
         shadowRadius:8,
         backgroundColor:"#080706",
         overflow:"hidden",
         borderWidth:3,
         borderRadius:15,
         
         
     },
     button:{
         flex:1
     },
     innerContainer:{
        flex:1,
        padding:16,
        
     },
     name:{
        fontWeight:"bold",
        fontFamily:"helvetica",
        color:"white"
     }
 })

export default categoryTutoe