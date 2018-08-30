import React from 'react';
import { View, Text, Button } from 'react-native';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          AuthScreen
        </Text>
        <Button onPress={() => {this.props.navigation.navigate('Home')}}
          title="Done"
        />
      </View>
    )
  }
}