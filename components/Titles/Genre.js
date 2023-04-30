import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Genre = ({ genre }) => {
  return (
    <View>
      <Text style={styles.genreText}>Action,Sci-Fi,Family</Text>
    </View>
  )
}

export default Genre

const styles = StyleSheet.create({
    genreText:{
        color:"#fff",
        fontSize:14,
        fontFamily:"Poppins-Light"
    }
})