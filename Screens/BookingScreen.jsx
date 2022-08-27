import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ImageBackground, ScrollView, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import AppText from "../Component/AppText"
import Card from '../Component/Card';
import {MaterialCommunityIcons, Entypo, AntDesign} from "@expo/vector-icons"
import AppSearchInput from '../Component/AppSearchInput';
import Screen from '../Component/Screen';
import data from "../data/Courses"
 import BookingCategory from "../Component/categoryTutoe"

 const image= require("../assets/image5.jpg")
 const image1= require("../assets/image6.jpg")
 const image2= require("../assets/sebastian-herrmann-NbtIDoFKGO8-unsplash2.jpg")
 const image3= require("../assets/lab3.jpeg")
 const image4= require("../assets/alumjni.jpg")
 

  

export default function TutorScreen({navigation}) {

 const renderCategoryBooking =(itemData)=>{
  return(
    <BookingCategory onPress={()=>navigation.navigate("Detail")} name={itemData.item.name} />
  )
 }

  return (
    
    <ImageBackground style={{backgroundColor:"#000",  height:"100%"}}>
      <View style={{alignItems:"flex-end",flexDirection:"row", justifyContent:"space-between" ,marginRight:10, marginTop:30, marginBottom:10}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Tutor")}>
      <Entypo name="chevron-left" size={24} color="#eba90e" />
      </TouchableOpacity>
      <AppText style={styles.text}>Book A Tutor</AppText>
      <TouchableOpacity >
      <Entypo name="menu" size={24} color="#eba90e" />
      </TouchableOpacity>
      </View>
      <View style={{ borderBottomWidth:4, marginTop:10, marginLeft:95, marginRight:95, borderBottomColor:"#eba90e"}}/>
      <AppSearchInput placeholder="Enter Search" placeholderTextColor="#fff"/>
         <FlatList num data={data} keyExtractor={(item)=>item.id} renderItem={renderCategoryBooking} numColumns={2}/>
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