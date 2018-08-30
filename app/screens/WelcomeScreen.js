import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Swiper from 'react-native-swiper';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (

      <Swiper style={styles.wrapper} loop={false}>
        <LinearGradient colors={['#2193b0', '#6dd5ed']} style={styles.slide1} >
          <Text style={styles.text}>Set Your Location</Text>
          <View style={{ flexDirection: "row", alignSelf: 'baseline' }}>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#2980B9', '#6DD5FA']} style={styles.slide2}>
          <Text style={styles.text}>Swipe through Jobs</Text>
        </LinearGradient>
        <LinearGradient  colors={['#86A8E7', '#91eae4']}  style={styles.slide3}>
          <Text style={styles.text}>Apply or Save</Text>
          <Button
            title={'Get Started'}
            containerViewStyle={{ marginTop: 20 }}
            buttonStyle = {{
              backgroundColor: '#c84343',
              borderRadius: 5,
              marginTop: 20,
            }}

            titleStyle={{ color: 'white' }}
            onPress={() => this.props.navigation.navigate('Auth')}
          />
        </LinearGradient>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})