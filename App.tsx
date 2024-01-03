import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import NonScrollableCards from './components/NonScrollableCards';
import ScrollableCards from './components/ScrollableCards';
import PlaceCard from './components/PlaceCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView horizontal={false}>
        <NonScrollableCards />
        <ScrollableCards />
        <PlaceCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
