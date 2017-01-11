import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import ProductDetail from './ProductDetail';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentWillMount() {
    fetch(`https://catlog-api.herokuapp.com/v1/products/${this.props.id}`)
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`like there was a problem. Status Code:${response.status}`);
            return;
          }
          // Examine the text in the response
          response
          .json()
          .then(res => this.setState({ product: res.data.attributes }));
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  render() {
    console.log(this.state.product);
    const { name, price,image } = this.state.product
    return (
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{this.state.product.quantity}</Text>
        <Text>{this.state.product.description}</Text>
        <Image source={{ uri: image }}/>
      </View>
    );
  }
}

export default Product;
