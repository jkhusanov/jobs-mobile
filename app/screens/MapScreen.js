import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements'; 
import { connect } from 'react-redux';

import * as actions from '../actions';

class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    mapLoaded: false,
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  componentDidMount(){
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('DeckTab')
    });
  }

  render() {
    const { region, mapLoaded } = this.state
    if(mapLoaded) {
      <View style={{ flex: 1, justifyContent: 'center',}}>
        <ActivityIndicator size='large'/>
      </View>
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          onRegionChangeComplete={this.onRegionChangeComplete}
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
}
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    // left: 0,
    // right: 0,
  }
})
export default connect(null, actions)(MapScreen);
