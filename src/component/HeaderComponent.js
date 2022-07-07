import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

export default function HeaderComponent({title}) {
  return (
    <View>
      <StatusBar />
      <View style={styles.headerContainer}>
        <View style={styles.cartContainer}>
          <View style={styles.cartIcon} />
        </View>

        <Text style={styles.headerText}>{title}</Text>

        <View style={styles.cartContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#1e88e5',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});
