import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../component/Header';
import Section from '../../component/Section';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home() {
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Phone');
      console.log(value);
      if (value) {
        return navigation.replace('MainStack');
      }
      navigation.replace('AuthStack');
    } catch (error) {}
  };

  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <View>
      <Header />
      <Section />
      <View></View>
    </View>
  );
}
