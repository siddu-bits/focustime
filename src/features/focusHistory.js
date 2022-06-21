import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes,spacing} from '../utils/sizes';


export const FocusHistory = ({history}) => {
  
  const renderItem = ({item}) => {
    return <Text style={styles.item}> - {item}</Text>
  }
  if(!history || !history.length) return <Text style={styles.title}>Things we have not focused on anything yet!</Text>;
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Things we have focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      
       />
    </View>
    
    
  )

};

const styles = StyleSheet.create({
    container:{
      padding:spacing.md,
      flex:1,
      //backgroundColor:"red"
    },
    item:{
      fontSize:fontSizes.md,
      color:colors.white,
      paddingTop:spacing.sm,
    },
    title: {
      color:colors.white,
      fontSize:fontSizes.md,
      fontWeight:'bold'
    }
})