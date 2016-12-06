import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Icon,
  Title,
} from 'native-base';

import Product from './src/components/Product';

export default class catlog extends Component {
    render() {
        return (
            <Container>
              <Header>
                <Button transparent>
                    <Icon name='ios-arrow-back' />
                </Button>

                <Title>Catlog</Title>

                <Button transparent>
                    <Icon name='ios-menu' />
                </Button>
              </Header>

              <Content>
                <Product />
              </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('catlog', () => catlog);
