import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import AppText from "../Component/AppText"
import Card from '../Component/Card';
import {MaterialCommunityIcons, Entypo} from "@expo/vector-icons"

 const image= require("../assets/image3.jpg")
 const image1= require("../assets/image4.jpg")
 const image2= require("../assets/sebastian-herrmann-NbtIDoFKGO8-unsplash2.jpg")
 const image3= require("../assets/lab3.jpeg")
 const image4= require("../assets/alumjni.jpg")


export default function DetailScreen({navigation}) {
  return (
    <ImageBackground style={{backgroundColor:"#000", height:"100%"}}>
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}  style={{alignItems:"flex-end", marginRight:10, marginTop:80}}>
      <Entypo name="menu" size={24} color="#eba90e" />
      </TouchableOpacity>
      <View style={{ borderBottomWidth:5, marginTop:50, borderBottomColor:"#eba90e"}}/>
      <ImageBackground source={require("../assets/compscience.jpg")} style={styles.image}>
        <Image source={require("../assets/logo-white.png")} style={styles.logo}/>
        <AppText style={{marginLeft:10, color:"#ffff",fontSize:30, fontWeight:"bold", marginTop:15}}>Computer Science</AppText>
        <AppText style={{marginLeft:10, color:"#ffff",fontSize:30, fontWeight:"bold"}}>Department</AppText>
      </ImageBackground>
      <View style={{ borderBottomWidth:4, marginTop:-210, borderBottomColor:"#eba90e"}}/>
      <ScrollView>
      <Card  image={image} title="Learning and Tutoring" onPress={()=>navigation.navigate("Faculty")} />
      <Card  image={image1} title="Events and Announcements" onPress={()=>navigation.navigate("Faculty")}/>
      <Card  image={image2} title="Internship Oppurtunities" onPress={()=>navigation.navigate("Faculty")} />
      <Card  image={image3} title="Research Labs" onPress={()=>navigation.navigate("Faculty")}/>
      <Card  image={image3} title="Research Labs" onPress={()=>navigation.navigate("Faculty")}/>
      <Card  image={image4} title="Alumni" onPress={()=>navigation.navigate("Faculty")}/>
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