import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const WatchlistButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress} android_ripple={{color:"#dadada"}} style={styles.buttonContainer}>
      <Ionicons name='add' size={20} color="#fff"/>
      <Text style={styles.buttonText}>Watchlist</Text>
    </Pressable>
  )
}

export default WatchlistButton

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        backgroundColor:'none',
        width:124,
        height:32,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:5,
        gap:5,
        borderColor:"#fff",
        borderWidth:1
    },
    buttonText:{
        color:'#fff',
        fontFamily:"Poppins-Light",
        fontSize: 14,
    }
})