import { View, Text,Pressable ,StyleSheet} from 'react-native'
import React from 'react'

const SeeAll = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.title}>See all</Text>
    </Pressable>
  )
}

export default SeeAll

const styles = StyleSheet.create({
    title:{
        color:'#E21221',
        fontFamily:"Poppins-Regular",
        fontSize:15
    }
})