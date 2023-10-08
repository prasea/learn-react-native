import React from 'react'
import {View, SafeAreaView, Text, TextInput, Button, StyleSheet} from 'react-native'
const AppPro = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.formGroup}>
        <Text>Enter First Number</Text>
        <TextInput placeholder='Enter First Number'/>          
        </View>
        
        <View style={styles.formGroup}>          
        <Text>Enter Second Number</Text>
        <TextInput placeholder='Enter Second Number'/>        
        </View>
        <Button title='Add'/>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  formGroup : {
    flexDirection : 'row',
    alignItems : 'center', 
    justifyContent : 'space-evenly'
  }
})

export default AppPro