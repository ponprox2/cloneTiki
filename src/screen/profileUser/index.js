import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import ChevronRight from '../../assets/icon/ChevronRight.svg';

const data = [
  'Quản lí đơn hàng',
  'Sản phẩm đã mua',
  'Sản phẩm đã xem',
  'Sản phẩm yêu thích',
  'Sản phẩm mua sau',
  'Sản phẩm đã đánh giá',
];
const renderItem = ({item, index}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={[styles.itemText]}>{item}</Text>
      <TouchableOpacity>
        <ChevronRight fill={'black'} />
      </TouchableOpacity>
    </View>
  );
};
export default function ProfileUser() {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <HeaderComponent title={'Cá nhân'} />
      <View style={styles.containerUser}>
        <View style={styles.Profile}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/image/image1.png')}
          />
          <View style={styles.profileText}>
            <Text style={styles.welcomeText}>Chào mừng bạn đến với tiki</Text>
            <TouchableOpacity>
              <Text style={styles.textLogin}>Đăng nhập/Đăng kí</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ChevronRight fill={'#0C85F2'} />
      </View>
      <View style={styles.listItemContainer}>
        <FlatList data={data} renderItem={renderItem} numColumns={1} />
      </View>
      <View style={styles.BoxSetting}>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]}>Ưu đãi cho chủ thẻ ngân hàng</Text>
          <TouchableOpacity>
            <ChevronRight fill={'black'} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]}>Cài đặt</Text>
          <TouchableOpacity>
            <ChevronRight fill={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={[styles.itemText]}>Hỗ trợ</Text>
        <TouchableOpacity>
          <ChevronRight fill={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  container: {},
  containerUser: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 100,
  },
  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    marginLeft: 12,
  },
  textLogin: {
    color: '#1e88e5',
    fontSize: 18,
    fontWeight: '500',
  },
  welcomeText: {
    color: '#828282',
  },
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.1)',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  listItemContainer: {
    marginTop: 12,
  },
  BoxSetting: {
    marginTop: 12,
    marginBottom: 12,
  },
});
