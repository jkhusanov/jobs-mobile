import React from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';

import * as actions from '../actions';


class AuthScreen extends React.Component {
  static navigationOptions = {
    title: '',
    headerStyle: { backgroundColor: '#2F80ED', borderBottomWidth: 0, borderBottomColor: '#2F80ED', elevation: null, },
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white', fontSize: 20 },
    borderBottomWidth: 0,
  };
  componentDidMount() {
    // this.props.facebookLogin();
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
      <LinearGradient colors={['#2F80ED', '#56CCF2']} style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            icon={
              <MaterialCommunityIcons
                name='facebook'
                size={20}
                color='white'
              />
            }
            iconLeft
            title='Sign Up with Facebook'
            buttonStyle={styles.facebookButton}
            onPress={() => this.props.facebookLogin()}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Please note that the app does not use any of your Facebook information. It was implemented only for learning purposes
          </Text>
            <Text style={styles.infoText}>You can skip this process</Text>
            <Text style={styles.infoText}>Even if you Sign Up using Facebook, the app does not store any of your information</Text>
          </View>
          <Button
            icon={
              <SimpleLineIcons
                name='login'
                size={20}
                color='white'
              />
            }
            iconRight
            title='Double tap to Skip'
            onPress={() => this.props.skipLogin()}
            buttonStyle={[styles.signupButton]}
          />

        </View>
      </LinearGradient>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    // padding: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infoContainer: {
    // flex: 2,
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 25,
    marginVertical: 10,
  },
  signupButton: {
    backgroundColor: "#A5ECD7",
    width: 250,
    height: 45,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  facebookButton: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 250,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginVertical: 20,
  },
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}


export default connect(mapStateToProps, actions)(AuthScreen);