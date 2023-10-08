import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.textColor}>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.textColor}>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.textColor}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.textColor}>More</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  container: { padding: 8 },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8
  },
  textColor: {
    color: '#000'
  },
  elevatedCard: {
    backgroundColor: '#ccc',
    elevation: 50,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2
  }

})