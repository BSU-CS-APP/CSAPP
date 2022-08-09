import { StyleSheet, Platform } from 'react-native'

 const styles  = StyleSheet.create({
    text:{
        fontSize:18,
    fontfamily:Platform.OS==="android"? "Roboto":"Avenir"
    }
 })


 export default styles