import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Thumbnail,
} from 'native-base';

const store = {
  name: "Mandala",
  image: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/13385886_230423407344378_45149647_a.jpg",
  products: [
    {
      name: "iPhone Case",
      price: 20000,
      image: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14052225_1603080609984714_1311086829_n.jpg?ig_cache_key=MTMyNjQ2MDU3MzAxMzIwNDA5NQ%3D%3D.2"
    }
  ]
}

export default class Product extends Component {

    render() {
        return (
            <Card style={{elevation: 3}}>
                <CardItem>
                    <Thumbnail source={{uri: store.image}}/>
                    <Text>{store.name}</Text>
                </CardItem>
                <CardItem>
                    <Image style={{ resizeMode: 'repeat', width: null }} source={{uri: store.products[0].image}}/>
                </CardItem>
                <CardItem style={{flex: 1, flexDirection: 'row'}}>
                    <Text>${store.products[0].price}</Text>
                    <Text>{store.products[0].name}</Text>
                </CardItem>
            </Card>
        );
    }
}
