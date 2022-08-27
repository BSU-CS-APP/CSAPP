import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ImageBackground, ScrollView, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import AppText from "../Component/AppText"
import Card from '../Component/Card';
import {MaterialCommunityIcons, Entypo, AntDesign} from "@expo/vector-icons"
import Screen from '../Component/Screen';
import Tutor from "../Component/Tutor"
import data from "../data/Courses"
 import BookingCategory from "../Component/categoryTutoe"

 

export default function TutorDetailScreen({navigation}) {

 const renderCategoryBooking =(itemData)=>{
  return(
    <Tutor  tutor_name={itemData.item.tutor_name} image={itemData.item.image} status={itemData.item.status}  />
  )
 }

  return (
    
    <ImageBackground style={{backgroundColor:"#000",  height:"100%"}}>
      <View style={{alignItems:"flex-end",flexDirection:"row", justifyContent:"space-between" ,marginRight:10, marginTop:30, marginBottom:10}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Faculty")}>
      <Entypo name="chevron-left" size={24} color="#eba90e" />
      </TouchableOpacity>
      <AppText style={styles.text}>Tutors</AppText>
      <TouchableOpacity onPress={()=>console.log("welcome")}>
      <Entypo name="menu" size={24} color="#eba90e" />
      </TouchableOpacity>
      </View>
      <View style={{ borderBottomWidth:4, marginTop:10, marginLeft:95, marginRight:95, borderBottomColor:"#eba90e"}}/>
         <FlatList data={data} keyExtractor={(item)=>item.id} renderItem={renderCategoryBooking} numColumns={2}/>
     </ImageBackground> 
     
     
  );
}
const styles = StyleSheet.create({
    text:{
      color:"#fff",
      fontSize:20,
      fontWeight:"bold",
      
    },
    search:{
      flexDirection:"row",
    backgroundColor:"#121111", 
    borderRadius:25,
    marginTop:20, 
    marginRight:10, 
    paddingVertical:15,
    width:"100%"
  },
  textInput:{
    fontSize:18,
    fontFamily:"helvetica",
    color:"white",
  paddingLeft:5
  }
})