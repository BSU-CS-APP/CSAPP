import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import colors from "../Config/colors"
import {MaterialCommunityIcons} from "@expo/vector-icons"

const ListItemDelete = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
        <MaterialCommunityIcons
         color={colors.white}
         name="trash-can"
         size={35}
        />
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDelete

const styles = StyleSheet.create({
    container:{
   backgroundColor: colors.danger,
    width:70,
    justifyContent:"center",
    alignItems: "center",
    }
})