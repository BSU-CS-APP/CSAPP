import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import ListItem from '../Component/ListItem'
import Screen from "../Component/Screen"
import ListItemSeparator from '../Component/ListItemSeparator'
import ListItemDelete from '../Component/ListItemDelete'
import Internships from "../data/Internships"


const InternshipScreen = ({}) => {
   const [interns, setIntern] = useState(Internships)
    const [refreshing, setRefreshing] = useState(false)
   const handleDelete = (item) => {
    const newItern = interns.filter(intern=>intern.id!==item.id)
    setIntern(newItern)
   }

  return (
     
    <Screen>
     <FlatList
     data={Internships}
      keyExtractor={item=>item.id.toString()}
      renderItem={({item})=><ListItem 
         title={item.title}
          subtitle={item.description}
          image={item.image}
           onPress={()=>handleDelete(item)}
          renderRightActions={()=><ListItemDelete onPress={()=>alert(JSON.stringify(item))}/>}
      />}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={()=>{
        setIntern([
          {
            id:2,
            title:"Amazon new Job",
            description:"this is the new job for the new graduate fronm any university",
            image: require("../assets/backgroundplacement.jpeg")
          }
        ])
      }}
    />
    </Screen>
  )
  }

export default InternshipScreen

  