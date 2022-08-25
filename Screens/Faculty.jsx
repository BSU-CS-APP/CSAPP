import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import AppText from "../Component/AppText"
import Card from '../Component/Card';
import {MaterialCommunityIcons, Entypo} from "@expo/vector-icons"

 const image= require("../assets/image5.jpg")
 const image1= require("../assets/image6.jpg")
 const image2= require("../assets/sebastian-herrmann-NbtIDoFKGO8-unsplash2.jpg")
 const image3= require("../assets/lab3.jpeg")
 const image4= require("../assets/alumjni.jpg")


export default function TutorScreen() {
  return (
    <ImageBackground style={{backgroundColor:"#000",  height:"100%"}}>
      <View style={{alignItems:"flex-end",flexDirection:"row", justifyContent:"space-between" ,marginRight:10, marginTop:30, marginBottom:10}}>
      <TouchableOpacity>
      <Entypo name="chevron-left" size={24} color="#eba90e" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Entypo name="menu" size={24} color="#eba90e" />
      </TouchableOpacity>
      </View>
      <ImageBackground source={require("../assets/unsplashEeTnaC1S4.jpg")} style={styles.image}>
        
        <AppText style={{marginLeft:10, color:"#ffff",fontSize:30, marginTop:140, fontWeight:"bold"}}>Learning & Tutoring</AppText>
      </ImageBackground>
      <View style={{ borderBottomWidth:4, marginTop:-209, marginLeft:15, marginRight:15, borderBottomColor:"#eba90e"}}/>
      <ScrollView>
      <Card  image={image} title="Book A Tutor"/>
      <Card  image={image1} title="Grade Enhancement Program"/>
      <Card  image={image2} title="Grade Enhancement Program"/>
      </ScrollView>
     </ImageBackground>
     
  );
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"50%", 
        marginTop:0
    },
    logo:{
        width:100,
        height:90,
        marginLeft:10,
        marginTop:10,
    
    }
})