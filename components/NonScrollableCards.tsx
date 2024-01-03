/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function NonScrollableCards() {
  return (
    <View>
      <Text style={styles.heading}>Non-Scrollable Cards</Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.boxOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.box, styles.boxTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.box, styles.boxThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.box, styles.boxFour]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
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
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 8,
  },
  boxOne: {
    backgroundColor: '#ee0000',
  },
  boxTwo: {
    backgroundColor: '#0000dd',
  },
  boxThree: {
    backgroundColor: '#00cc00',
  },
  boxFour: {
    backgroundColor: '#cccc00',
  },
});
