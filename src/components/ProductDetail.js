import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const ProductDetail = ({ product }) => {
  console.log(product);
  const {
    image,
    name,
    storeName,
    storeImage,
    price,
    description,
  } = product;

  const {
    thumbnailStyle,
    thumbnailContainer,
    headerContent,
    headerText,
    songImage,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            source={{ uri: storeImage }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerText}>{ name }</Text>
          <Text>{ storeName }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={songImage} />
      </CardSection>
      <CardSection>
        <View style={headerContent}>
          <Text style={headerText}>{ price }</Text>
          <Text>{ description }</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  songImage: {
    height: 300,
    width: null,
    flex: 1,
  }
});


export default ProductDetail;
