import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from "../Config/colors"

const ListItemSeparator = () => {
  return (
    <View style={styles.separator}/>
  )
}
const styles = StyleSheet.create({
      separator:{
        width:"100%",
        height:1,
        backgroundColor: colors.light
      }
})
export default ListItemSeparator