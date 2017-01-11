import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import CategoryDetail from './CategoryDetail';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentWillMount() {
    fetch('https://catlog-api.herokuapp.com/v1/categories/')
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`like there was a problem. Status Code:${response.status}`);
            return;
          }
          // Examine the text in the response
          response
          .json()
          .then(res => this.setState({ categories: res.data }));
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  renderCategories() {
    return this.state.categories
      .map(category => <CategoryDetail key={category.id} category={category} />);
  }

  render() {
    return (
      <ScrollView>
        { this.renderCategories() }
      </ScrollView>
    );
  }
}

export default Home;
