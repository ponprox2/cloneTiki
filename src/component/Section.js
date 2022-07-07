import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const ArrData = [
  'Tất cả',
  'Điện thoại SmartPhone',
  'Máy tính bảng',
  'Điện thoại',
];
const data = [
  {
    image: require('../assets/image/image2.png'),
    name: 'Điện thoại Vsmart Bee (Smart Bee)',
    price: '600.000',
  },
  {
    image: require('../assets/image/image2.png'),
    name: 'Điện thoại Vsmart Bee (Smart Bee)',
    price: '600.000',
  },
  {
    image: require('../assets/image/image2.png'),
    name: 'Điện thoại Vsmart Bee (Smart Bee)',
    price: '600.000',
  },
  {
    image: require('../assets/image/image2.png'),
    name: 'Điện thoại Vsmart Bee (Smart Bee)',
    price: '600.000',
  },
  {
    image: require('../assets/image/image2.png'),
    name: 'Điện thoại Vsmart Bee (Smart Bee)',
    price: '600.000',
  },
];
const renderItemp = ({item, index}) => {
  return (
    <TouchableOpacity>
      <View style={styles.ButtonFillterContainer}>
        <Text style={styles.filterInactiveText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const renderListItem = ({item, index}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={item.image} />
          <Text style={styles.itemName} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={item.image} />
          <Text style={styles.itemName} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default function Section() {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollBar={false}>
      <View style={styles.container}>
        <Text style={styles.text}>Điện thoại - Máy tính bảng</Text>
        <View style={styles.BoxImage}>
          <Image
            style={styles.image}
            source={require('../assets/image/image1.png')}
          />
        </View>
        <View style={styles.fillterContainer}>
          <FlatList
            data={ArrData}
            renderItem={renderItemp}
            numColumns={1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.listItemContainer}>
          <FlatList
            data={data}
            renderItem={renderListItem}
            numColumns={1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.seeMoreContainer}>
            <Text style={styles.seeMoreText}>XEM THÊM 636 SẢN PHẨM ></Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  fillterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  ButtonFillterContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
    backgroundColor: 'white',
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
  scrollView: {
    marginBottom: 110,
  },
});
