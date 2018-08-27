import { createStackNavigator } from 'react-navigation';

import MapScreen from '../screens/MapScreen';

const MapStack = createStackNavigator({
  MapStack: {
    screen: MapScreen,
  },
},
  {
    initialRouteName: 'MapStack',
  }
);
export default MapStack;
