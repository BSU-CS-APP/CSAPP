import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import data from "../data/Courses"
import {MaterialCommunityIcons} from "@expo/vector-icons"


const categoryTutoe = ({name}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button}>
        <View style={styles.innerContainer}>
            <MaterialCommunityIcons size={24} name="pen" color="#cc6012"/>
        <Text style={styles.name}>{name}</Text>
        </View>
      </Pressable>
    </View>
  )
}


 const styles = StyleSheet.create({
     gridItem :{
         flex:1,
         margin:16,
         height:150,
         elevation:4,
         shadowColor:"white",
         shadowOpacity:0.25,
         shadowOffset:{width:0, height:2},
         shadowRadius:8,
         backgroundColor:"#080706",
         overflow:"hidden",
         borderWidth:3,
         borderRadius:15,
         borderColor:"#cc6012"
         
     },
     button:{
         flex:1
     },
     innerContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center"
     },
     name:{
        fontWeight:"bold",
        fontFamily:"helvetica",
        color:"white"
     }
 })

export default categoryTutoe