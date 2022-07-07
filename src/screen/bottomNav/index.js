import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/index';
import ProfileUser from '../profileUser/index';
import Notify from '../notify/index';
import User from '../../assets/icon/User.svg';
import Bell from '../../assets/icon/Bell.svg';
import HomeIcon from '../../assets/icon/HomeIcon.svg';

const Tab = createBottomTabNavigator();

export default function BottomNav({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {position: 'absolute', paddingBottom: 5},
      }}>
      <Tab.Screen
        navigation={navigation}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <HomeIcon fill={props.focused ? 'red' : 'black'} />
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        navigation={navigation}
        name="ProfileUser"
        component={ProfileUser}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <User fill={props.focused ? 'red' : 'black'} />
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        navigation={navigation}
        name="Notify"
        component={Notify}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <Bell fill={props.focused ? 'red' : 'black'} />
              </View>
            );
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}
