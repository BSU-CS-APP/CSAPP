import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppText from "./AppText"

export default function AppLogo({title, style}) {
  return (
    <View style={[styles.imageContainer,style]}>
    <Image source={require("../assets/logo-white.png")} style={styles.image}/>
    <AppText style={styles.Register} >{title}</AppText>
    </View>
  )
}
const styles = StyleSheet.create({
    imageContainer:{
        justifyContent: 'center',
        alignItems:"center"
      },
      image:{
        marginTop:10,
        width:230,
        height:200, 
     },
     Register:{
      color:"#fff",
      marginTop:30,
      fontSize:30,
      fontWeight:"bold",
    },
})