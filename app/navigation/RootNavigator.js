import { createStackNavigator } from 'react-navigation';
import WelcomeStack from './WelcomeStack';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';


export default RootNavigator = createStackNavigator({

  Welcome: {
    screen: WelcomeStack,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Auth: {
    screen: AuthStack,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Home: {
    screen: HomeTabs,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
},
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: "Welcome"
  }

);
