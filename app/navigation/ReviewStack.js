import { createStackNavigator } from 'react-navigation';

import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const ReviewStack = createStackNavigator({
  ReviewStack: {
    screen: ReviewScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },

},
  {
    initialRouteName: 'ReviewStack',
  }
);
export default ReviewStack;

ReviewStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};