/* eslint-disable prettier/prettier */
import { Text, StyleSheet, View, Image } from 'react-native';
import React, { Component } from 'react'
import tajmahal from '../assets/tajmahal.jpg';

export default class PlaceCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Place Cards</Text>
        <View>
            <Image source={{uri: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} style={styles.image} />
            <View style={styles.card}>
            <Text style={styles.text}>Taj Mahal, Agra</Text>
            <Text style={styles.text}>One of the Seven Wonders of the World</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
      },
      container: {
        flex: 1,
        flexDirection: 'row',
      },
      image: {
        height: 500,
        width: '100%',
      },
      card: {
        backgroundColor: '#fff',
        marginBottom: 16,
      },
      text: {
        color: '#000',
        marginHorizontal: 8,
        marginVertical: 4,
      }
})