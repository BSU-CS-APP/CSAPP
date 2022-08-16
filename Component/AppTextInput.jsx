import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function AppTextInput({...otherProps}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} {...otherProps}  />
     </View>
  );
}

const styles = StyleSheet.create({
   inputContainer:{
    marginTop:15
   },
   input:{
      borderBottomWidth:1, 
      borderColor:"white" ,
      paddingTop:10,
      margin:15,
      borderWidth:0.15,
      color:"white",
      fontSize:20
   }
})
