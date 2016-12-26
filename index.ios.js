import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import Header from './src/components/Header';
import ProductsList from './src/components/ProductsList';


const App = () => (
  <View style={{ flex: 1 }} >
    <Header />
    <ProductsList />
  </View>
);

AppRegistry.registerComponent('catlog', () => App);
