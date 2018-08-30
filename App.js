import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './app/navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from './app/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
