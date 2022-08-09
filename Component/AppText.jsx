import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import styles from "./Styles"
import defaultStyles from '../Config/styles'

export default function ({children, style}) {
  return (
   
      <Text style={[ defaultStyles.text,  style]}>{children}</Text>
   
  )
}

