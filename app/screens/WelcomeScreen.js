import React from 'react';
import { View, Text, StyleSheet, AsyncStorage, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient, AppLoading, DangerZone } from 'expo';
const { Lottie } = DangerZone;
import Swiper from 'react-native-swiper';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    token: null,
    animation: null,
    animation2: null,
    animation3: null,

  }

  async componentDidMount() {
    // AsyncStorage.removeItem('fb_token')

    let token = await AsyncStorage.getItem('fb_token')

    if (token) {
      this.setState({ token });
      this.props.navigation.navigate('Home');
    }
    else {
      this.setState({ token: false });
    }

    this._playAnimation();


  }
  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  // Created three different fetches for loading lottie animations, maybe there better ways to do that like using component function
  _loadAnimationAsync = async () => {
    let result = await fetch(
      'https://www.lottiefiles.com/storage/datafiles/wW9k6ALg5Mn9cIj/data.json'
    )
      .then(data => {
        return data.json();
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({ animation: result}, this._playAnimation);
    result = await fetch(
      'https://www.lottiefiles.com/storage/datafiles/ldDtP5Mz07yOo17/data.json'
    )
    .then(data => {
      return data.json();
    })
    .catch(error => {
      console.error(error);
    });
    this.setState({ animation2: result}, this._playAnimation);
    result = await fetch(
      'https://www.lottiefiles.com/storage/datafiles/0ONDAAnHNTfjDmn/data.json'
    )
    .then(data => {
      return data.json();
    })
    .catch(error => {
      console.error(error);
    });
    this.setState({ animation3: result}, this._playAnimation);

  };

  render() {

    if (this.state.token === null) {
      return <AppLoading />
    }
    return (
      <Swiper style={styles.wrapper} loop={false}>
        <LinearGradient colors={['#2193b0', '#6dd5ed']} style={styles.slide1} >
          <Text style={styles.text}>Set Your Location</Text>
          <View style={{ flexDirection: "row", alignSelf: 'baseline' }}>
            <View style={styles.animationContainer}>
              {this.state.animation &&
                <Lottie
                  ref={animation => {
                    this.animation = animation;
                  }}
                  style={{
                    width: 400,
                    height: 400,
                    alignSelf: 'center'
                  }}
                  source={this.state.animation}
                />}
            </View>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#2980B9', '#6DD5FA']} style={styles.slide2}>
          <Text style={styles.text}>Swipe through Jobs</Text>
          <View style={{ flexDirection: "row", alignSelf: 'baseline' }}>
            <View style={styles.animationContainer}>
              {this.state.animation2 &&
                <Lottie
                  ref={animation2 => {
                    this.animation = animation2;
                  }}
                  style={{
                    width: 310,
                    height: 310,
                    alignSelf: 'center'
                  }}
                  source={this.state.animation2}
                />}
            </View>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#86A8E7', '#91eae4']} style={styles.slide3}>
          <Text style={styles.text}>Apply and Save</Text>
          <View style={{ flexDirection: "row", alignSelf: 'baseline' }}>
            <View style={styles.animationContainer}>
              {this.state.animation3 &&
                <Lottie
                  ref={animation3 => {
                    this.animation = animation3;
                  }}
                  style={{
                    width: 400,
                    height: 400,
                    alignSelf: 'center'
                  }}
                  source={this.state.animation3}
                />}
            </View>
          </View>
          <Button
            title={'Get Started'}
            containerViewStyle={{ marginTop: 10 }}
            buttonStyle={{
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
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})