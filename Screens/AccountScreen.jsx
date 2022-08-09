import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import users from "../data/users"
import AppText from "../Component/AppText"
import ListItem from '../Component/ListItem';
import Screen from '../Component/Screen';
import colors from "../Config/colors"
import Icon from "../Component/Icon"
const AccountItem=[
   {
      title:"Career center",
      icon:{
         name:"person",
         backgroundColor:colors.primary
      },
   },
   {
      title:" saved Jobs",
      icon:{
         name:"format-list-bulleted",
         backgroundColor:colors.primary
      },
      title:"Interviews",
      icon:{
         name:"format-list-bulleted",
         backgroundColor:colors.primary
      },
   },
   {
      title:"courses",
      icon:{
         name:"format-list-bulleted",
         backgroundColor:colors.primary
      },
      
   }
]
export default function AccountScreen() {
    console.log(AccountItem)
  return (    
    <Screen>
      <View style={styles.container}> 
      <ListItem
       title="Tunde Ayodele"
       image={require("../assets/Bowielogo.png")}
       subtitle="Graduate"
      />
      </View>
      <View style={styles.container}>
       <FlatList
        data={AccountItem}
        keyExtractor={item=>item.title}
        renderItem={({item})=>(
         <ListItem title={item.title} 
         ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
         
         />
        )}
       />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
    container:{
    marginVertical:20
    }
})