import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Image
      source={require('../images/logo.png')}
      style={styles.logo}
    />
  </View>
);

const styles = StyleSheet.create({
  logo: {
    height: 46,
    width: 150
  },
  container: {
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
});

export default Header;
