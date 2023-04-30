import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const CategoryTitle = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default CategoryTitle

const styles = StyleSheet.create({
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:"normal",
        fontFamily:'Poppins-Regular'
    }
})