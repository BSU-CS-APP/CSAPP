import React from 'react';
import { Text , StyleSheet , TouchableOpacity } from 'react-native';
import colors from "../Config/colors"

export default function AppButton({title, onPress, color="black"}) {
     
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
     </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.blaclk, 
        width:'100%',
        padding:15,
        alignItems: 'center',
        justifyContent:"center",
        borderRadius:25,
        marginVertical:15
    },
    text:{
        color:colors.white,
        fontSize:18, 
        textTransform:"uppercase", 
        fontWeight:"bold"}
})