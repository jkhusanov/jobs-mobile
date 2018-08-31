import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';


class AuthScreen extends React.Component {
  componentDidMount() {
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token');
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps)
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('Home')
    }
  }

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

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);