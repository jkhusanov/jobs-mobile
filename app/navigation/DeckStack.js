import { createStackNavigator } from 'react-navigation';

import DeckScreen from '../screens/DeckScreen';

const DeckStack = createStackNavigator({
  DeckStack: {
    screen: DeckScreen,
  },
},
  {
    initialRouteName: 'DeckStack',
  }
);
export default DeckStack;
