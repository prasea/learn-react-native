import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.cardHeading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardHeading: {
    fontSize: 24,
    fontWeight: "bold"
  },
  container: {
    flexDirection: 'row',
    flex: 1
  },
  card: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 8
  },
  redCard: { backgroundColor: 'red' },
  greenCard: { backgroundColor: 'green' },
  blueCard: { backgroundColor: 'blue' }
})