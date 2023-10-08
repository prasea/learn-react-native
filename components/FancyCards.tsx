import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.sectionHeading}>FancyCards</Text>
      <View style={[styles.card, styles.cardElevated]}>

        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Damak_Landscape.jpg' }} style={styles.cardImage} />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Damak Municipality</Text>
          <Text style={styles.cardCaption}>Damak Chowk</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione blanditiis obcaecati quo, quasi impedit repellat officiis architecto autem sunt!
          </Text>
          <Text style={styles.cardFooter}>Lorem ipsum dolor sit.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  card: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 400,
    width: 400,
    borderRadius: 8,
  },
  cardImage: {
    height: 200,
    width: 400,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardElevated: {
    backgroundColor: '#ccc'
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  cardCaption: {
    color: '#000',
    fontSize: 14
  },
  cardDescription: {
    color: '#000',
    fontSize: 12,
    marginVertical: 15
  },
  cardFooter: {
    color: '#000',
    textAlign: 'center',
    fontSize: 10
  }
})