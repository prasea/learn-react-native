import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const makeCall = (url: string) => {
    Linking.openURL(url)
  }
  const contacts = [
    { uid: 1, name: 'Ram Bahadur', phone: 98010000, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { uid: 2, name: 'Hari Bahadur', phone: 98020000, image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { uid: 3, name: 'Sam Bahadur', phone: 98030000, image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { uid: 4, name: 'Khem Bahadur', phone: 98040000, image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ]
  return (
    <View>
      <Text style={styles.sectionHeading}>Our Team</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({ uid, name, phone, image }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: image }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <TouchableOpacity onPress={() => makeCall(`tel:${phone}`)}>
                <Text style={styles.userPhone}>{phone}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 34,
    fontWeight: '600',
    padding: 10
  },
  container: {

  },
  userCard: {
    backgroundColor: '#ccc',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginHorizontal: 10,
    marginVertical: 5
  },
  userName: {
    color: '#000',
    fontSize: 18
  },
  userPhone: {
    color: '#000',
    fontWeight: '600'
  }
})