import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../Config/colors"
import defaultStyles from "../Config/styles"

const AppTextInput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} color={defaultStyles.colors.medium} size={20} style={styles.icon} />}
      <TextInput style={defaultStyles.text}{...otherProps}/>
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:20,
       
    },
   
    icon:{
        marginRight:10
    }
})