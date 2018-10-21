import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { MapView, LinearGradient } from 'expo';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    mapLoaded: false,
    isLoading: true,
    region: {
      latitude: null,
      longitude: null,
      latitudeDelta: null,
      longitudeDelta: null,
    }
  }

  componentDidMount() {
    this.getCurrentLocation()
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('DeckTab')
    });
  }
  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position.coords.latitude && position.coords.longitude) {
          this.setState({
            region: {
              latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
          })
        }
        this.setState({ isLoading: false, mapLoaded: true });
      },
      (error) => {
        console.log(error)
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  loadingView = () => {
    return (
      <LinearGradient colors={['#536976', '#292E49']} style={styles.loadingView}>
        <View style={styles.activityIndicatorAndButtonContainer}>
          <ActivityIndicator size="large" />
          <View style={styles.getLocationbuttonContainer}>
            <Button
              raised
              icon={{ name: 'my-location' }}
              title='Get Location'
              buttonStyle={styles.getLocationButton}
              onPress={this.getCurrentLocation.bind(this)}
            // onPress={console.log('current location pressed')}
            />
          </View>
        </View>
      </LinearGradient>
    )
  }

  contentView = () => {
    const { region, mapLoaded } = this.state
    if (mapLoaded) {
      <View style={{ flex: 1, justifyContent: 'center', }}>
        <ActivityIndicator size='large' />
      </View>
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          showsUserLocation
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Search This Area"
            buttonStyle={{
              backgroundColor: '#009688',
              width: 300,
              height: 45,
            }}
            icon={{
              name: 'search',
              color: 'white',
            }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    )
  }
  render() {
    const { isLoading } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {isLoading ? this.loadingView() : this.contentView()}
      </View>

    )
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    // left: 0,
    // right: 0,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getLocationbuttonContainer: {
    marginTop: 200,
  },
  getLocationButton: {
    backgroundColor: "#c84343",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
})
export default connect(null, actions)(MapScreen);
