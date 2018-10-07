import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
import RootNavigator from './app/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configurationStore from './app/store';
import registerForNotifications from './services/push_notifications';
import { Notifications } from 'expo';
export default class App extends React.Component {

  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin} = notification;
      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'OK.' }]
        )
      }

    })
  }

  render() {
    const { persistor, store } = configurationStore();
    // AsyncStorage.removeItem('fb_token');

    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator/>
      </PersistGate>
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
