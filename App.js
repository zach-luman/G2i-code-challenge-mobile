import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './src/redux/reducers';
import MainStackNavigation from './src/navigations/MainStackNavigation';

const Navigator = createAppContainer(MainStackNavigation);

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
