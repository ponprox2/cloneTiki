import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNav from '../screen/bottomNav/index';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
}

export default MainStack;
