import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';

const data = [
  {
    id: 1,
    type: 1,
    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
    date: '13/11/2018',
    detail: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
  },
  {
    id: 2,
    type: 1,
    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
    date: '13/11/2018',
    detail: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
  },
  {
    id: 3,
    type: 1,
    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
    date: '13/11/2018',
    detail: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
  },
  {
    id: 4,
    type: 2,
    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
    date: '13/11/2018',
    detail: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
  },
  {
    id: 5,
    type: 1,
    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
    date: '13/11/2018',
    detail: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
  },
  {
    id: 6,
    type: 1,
    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
    date: '13/11/2018',
    detail: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
  },
  {
    id: 7,
    type: 1,
    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
    date: '13/11/2018',
    detail: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
  },
];
const renderItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          {
            backgroundColor: item.type === 1 ? '#fc820a' : '#dc3988',
          },
        ]}></View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);
export default function Notify() {
  return (
    <View style={styles.screenContainer}>
      <HeaderComponent title={'Thông báo'} />
      <View style={styles.bodyContainer}>
        <View>
          <TouchableOpacity>
            <View style={styles.buttonActiveContainer}>
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonInactiveContainer}>
              <Text>Time</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonInactiveContainer}>
              <Text>Sale</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            style={styles.flatList}
            data={data}
            renderItem={renderItem}
            numColumns={1}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  Text: {
    width: 30,
    textAlign: 'center',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  buttonActiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
    marginTop: 20,
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',

  },
  activeMark: {
    backgroundColor: '#1e88e5',
    height: 50,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIcon: {
    padding: 12,

    marginLeft: -4,
  },

  listContainer: {
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
  },
  itemContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    width: '88%',
  },
  itemTopContainer: {
    flexDirection: 'row',
  },

  itemTopTextContainer: {
    marginRight: 40,
    marginLeft: 4,
  },
  itemName: {
    color: '#000',
    fontWeight: '500',
  },
  itemDate: {
    color: '#787878',
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: '#787878',

    marginTop: 12,
  },
  itemTypeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    marginBottom: 50,
  },
});
