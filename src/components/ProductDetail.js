import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

const ProductDetail = ({ product }) => {
  const {
    image,
    name,
    storeName,
    storeImage,
    price,
    description,
  } = product.attributes;

  const { id } = product;

  const {
    thumbnailStyle,
    thumbnailContainer,
    headerContent,
    headerText,
    productImage,
  } = styles;

  const goToProduct= () => Actions.product({ id });

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
          <Text>{ price }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={productImage} />
      </CardSection>
      <Button
        onPress={goToProduct}
        title="Más Información"
      />
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
  productImage: {
    height: 300,
    width: null,
    flex: 1,
  }
});


export default ProductDetail;
