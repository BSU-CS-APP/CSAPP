import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from "../Config/colors"
import AppText from "./AppText"
import {MaterialCommunityIcons, Entypo} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"


 
export default function Card({title, subTitle,image, onPress}) {
  const navigation = useNavigation()
    console.log(title, subTitle, image )
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <TouchableOpacity onPress={onPress}>  
           <Entypo name="chevron-right" size={24} color="white"/>
      </TouchableOpacity>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
      card:{
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        backgroundColor: colors.white,
        marginBottom:20,
        overflow: "hidden",
        marginTop:15,
        marginRight:15,
        marginLeft:15,
        backgroundColor:"#212020"

      },
      image:{
        width:"100%",
        height:150
         
      },
      detailsContainer:{
         padding: 20,
         flexDirection:"row",
         justifyContent:"space-between",
      },
      title:{
        marginBottom:5,
        color:"white",
        fontSize:18,
        fontWeight:"900",
      },
      subtitle:{
        color:colors.secondary,
        fontWeight:"bold"
      }
})
