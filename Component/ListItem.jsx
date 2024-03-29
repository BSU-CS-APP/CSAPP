import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight  } from 'react-native';
import colors from '../Config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({title, subtitle,image, ImageComponent, onPress, renderRightActions  }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.light}
    onPress={onPress}>
     
    <View style={styles.container}>
      {ImageComponent}
     {image && <Image style={styles.image} source={image}/>}
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
         {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
     </View>
     </TouchableHighlight>
     </Swipeable>
     
    
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding: 20
    },
    detailContainer:{
      marginLeft:10,
      justifyContent:"center",
    },
    image:{
        width: 70,
        height:70,
        borderRadius:35,
        
    },
    subtitle:{
      color:colors.medium
    },
    titl:{
         fontWeight:"bold"
    }
})