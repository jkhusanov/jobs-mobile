import { createStackNavigator } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';

const AuthStack = createStackNavigator({
  Auth: {
    screen: AuthScreen,
  },
},
);
export default AuthStack;
