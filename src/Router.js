import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ProductsList from './components/ProductsList';
import CategoryProducts from './components/CategoryProducts';
import Product from './components/Product';
import Home from './components/Home';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
    navigationBarStyle={styles.viewStyle}
    titleStyle={styles.textStyle}
  >
    <Scene key="home" component={Home} title="Home" initial />
    <Scene key="products" component={ProductsList} title="Products 🎶" />
    <Scene key="product" component={Product} title="Producto"  />
    <Scene key="categoryProducts" component={CategoryProducts} title="Categoría"  />
  </Router>
);

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#262626',
    fontWeight: 'bold',
  },

  viewStyle: {
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0,
    height: 65,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
  }
};

export default RouterComponent;
