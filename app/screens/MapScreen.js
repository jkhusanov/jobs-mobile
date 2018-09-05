import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
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
      </View>
    )
  }
}