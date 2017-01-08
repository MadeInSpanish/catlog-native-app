import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,

} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

const CategoryDetail = ({ category }) => {
  const {
    name,
  } = category.attributes;

  const {
    id,
  } = category;

  const {
    headerContent,
    headerContainer,
    headerImage,
  } = styles;

  const goToCategory = () => Actions.categoryProducts({id});

  return (
    <TouchableOpacity onPress={goToCategory}>
      <View style={headerContent}>
        <Image
          style={headerImage}
          source={require(`../images/categories/bolsos.png`)}
        />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
  },
});


export default CategoryDetail;
