import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppText from "../Component/AppText"
import colors from '../Config/colors';
import ListItem from "../Component/ListItem"

export default function CourseDetailScreen() {
  return (
    <View>
       <Image style={styles.image} source = {require("../assets/backgroundplacement.jpeg")}/>
       <View style={styles.detailContainer}>
       <AppText style={styles.title}>Welcome to CSOC 22</AppText>
        <AppText style={styles.course}>Ayodele Olumide  Tunde</AppText>
          <View style={styles.userContainer}>
          <ListItem
          image={require("../assets/bowiebackgound.jpeg")}
          subtitle="TUNDE AYODELE OLUMIDE"
          title="GRADUATE STUDENT"
          />
          </View>
       </View>
     </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height:300,
    },
     course:{
     color:colors.primary,
     fontWeight:"bold",
     marginVertical:10
     },
    detailContainer:{
        padding: 20
    },
    title:{
        fontSize:24,
        fontweight: '500%',
    },
    userContainer:{
        marginVertical:50
    }
})
