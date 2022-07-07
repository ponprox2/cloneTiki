import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNav from '../screen/bottomNav/index';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import SPLashScreen from './SPLashScreen';
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SPLashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SPLashScreen" component={SPLashScreen} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
