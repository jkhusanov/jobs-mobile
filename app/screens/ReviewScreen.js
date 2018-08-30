import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements'

export default class ReviewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review Jobs',
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Settings"
        titleStyle={{ color: "rgba(0, 122, 255, 1)" }}
        buttonStyle = {{
          backgroundColor: "rgba(0, 0, 0, 0)"}
        }
        clear
      />
    ),
    headerStyle: {
      // marginTop: Platform.OS === 'android' ?  Expo.Constants.statusBarHeight : 0
    }

  })
  render() {
    return (
      <View>
        <Text>
          ReviewScreen
        </Text>
      </View>
    )
  }
}