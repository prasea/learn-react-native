import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BackgroundChanger04() {
  const [bgColor, setBgColor] = useState('#000');
  const changeBgColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++)
    {
      let randIndex = Math.floor(Math.random()*6);
      color += hexRange.charAt(randIndex);
    }
    setBgColor(color);
  }
  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor : bgColor}]}>
        <TouchableOpacity onPress={changeBgColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1, 
    alignItems : 'center', 
    justifyContent : 'center'
  }, 
  actionBtn : {
    backgroundColor : '#6a1b4d', 
    paddingVertical : 9, 
    paddingHorizontal : 15
  }, 
  actionBtnTxt : {
    color : '#fff', 
    fontSize : 24, 
    textTransform : 'uppercase'
  }
})