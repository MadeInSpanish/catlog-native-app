import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import ProductDetail from './ProductDetail';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    fetch('https://catlog-api.herokuapp.com/v1/products/')
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`like there was a problem. Status Code:${response.status}`);
            return;
          }
          // Examine the text in the response
          response
          .json()
          .then(res => this.setState({ products: res.data }));
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  renderProducts() {
    return this.state.products
      .map(product => <ProductDetail key={product.id} product={product} />);
  }

  render() {
    return (
      <ScrollView>
        { this.renderProducts() }
      </ScrollView>
    );
  }
}

export default ProductsList;
