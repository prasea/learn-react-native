import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
function TaskItem({ id, item }) {
  return (
    <View style={styles.listItem}>
      <Text style={{ color: '#fff' }}>{id} {item}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  listItem: { padding: 10, marginVertical: 10, backgroundColor: '#2c2c2c', borderColor: '#ccc', borderWidth: 1 }
})
export default TaskItem