import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const ActionCard = () => {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  }
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.sectionHeading}>Blog</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.cardHeader}>
          <Text style={styles.headingText}>What is React Native ? </Text>
        </View>

        <Image source={{ uri: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.cardImage} />

        <View style={styles.cardBody}>
          <Text numberOfLines={3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque voluptate illum facilis, ducimus iure aperiam assumenda sunt in voluptatum similique placeat praesentium, consectetur accusantium quis vel! Placeat ad odio eos voluptas a nobis et voluptate.</Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.button} onPress={() => openWebsite('https://en.wikipedia.org/wiki/React_Native')}>
            <Text style={styles.linkingText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.linkingText}>Share Now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  card: {
    height: 400,
    width: 400,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: '#444',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#222',
    shadowOpacity: 0.4
  },
  cardHeader: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: { color: '#fff', fontSize: 22, fontWeight: '600' },
  cardImage: {
    height: 190
  },
  cardBody: {
    padding: 10
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    alignItems: 'center',
    width: '30%',
    borderRadius: 10
  },
  linkingText: {
    color: '#000'
  }
})