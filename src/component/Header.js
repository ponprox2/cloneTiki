import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Search from '../assets/icon/Search.svg';
import AddIcon from '../assets/icon/AddIcon.svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Search fill={'black'} />
        <TextInput
          style={styles.textInput}
          placeholder="hôm nay bạn muốn tìm gì?"
        />
      </View>
      <AddIcon style={styles.addIcon} fill={'black'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#1e88e5',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 6,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginLeft: 16,
    borderRadius: 6,
  },
  textInput: {
    paddingRight: 90,
  },
  addIcon: {
    marginRight: 12,
  },
});
