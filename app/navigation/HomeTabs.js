import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import MapStack from './MapStack';
import DeckStack from './DeckStack';
import ReviewStack from './ReviewStack';


const HomeTabs = createBottomTabNavigator({
  MapTab: {
    screen: MapStack,
    navigationOptions: {
      tabBarLabel: 'Location',
      tabBarIcon: ({ tintColor }) => (
        <Entypo
          name='location'
          color={tintColor}
          size={Platform.OS === 'ios' ? 22 : 25}
        />
      )
    }
  },
  DeckTab: {
    screen: DeckStack,
    navigationOptions: {
      tabBarLabel: 'Jobs',
      tabBarIcon: ({ tintColor }) => (
        <Entypo
          name='network'
          color={tintColor}
          size={Platform.OS === 'ios' ? 22 : 25}
        />
      ),
    }
  },
  ReviewTab: {
    screen: ReviewStack,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => (
        <Entypo
          name='list'
          color={tintColor}
          size={Platform.OS === 'ios' ? 22 : 25}
        />
      ),
    }
  }
}, {
  initialRouteName: 'MapTab',
  tabBarPosition: 'bottom',
  animationEnabled: Platform.OS === 'ios' ? false : true,
  swipeEnabled: Platform.OS === 'ios' ? false : false,
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#ED5276',
    inactiveTintColor: '#999999',
    style: {
      backgroundColor: '#ffffff',
      padding: Platform.OS === 'ios' ? 5 : 0,
    },
    indicatorStyle: {
      backgroundColor: 'white'
    },
    labelStyle: {
      fontSize: 12
    }
  }
});

export default HomeTabs;