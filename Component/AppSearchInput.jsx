import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import {AntDesign} from "@expo/vector-icons"
import colors from "../Config/colors"

export default function AppSearchInput({...otherProps}) {
  return (
    <View style={styles.search}>
    <TextInput style={styles.text} {...otherProps} />
    <AntDesign name="search1" size={24} color="white" style={styles.icon} />
  </View>
  );
}

const styles = StyleSheet.create({
    text:{
      color:"#fff",
      fontSize:20,
      fontWeight:"bold",
      flex:1
    },

    search:{
      flexDirection:"row",
    backgroundColor:"#121111", 
    borderRadius:25,
    marginTop:20, 
    marginRight:10, 
    paddingVertical:15,
    paddingLeft:10,
    width:"100%",
    marginBottom:50, 
    
  },
  //#eba90e
  textInput:{
    fontSize:18,
    fontFamily:"helvetica",
    color:"white",
  paddingLeft:5
  }
})

