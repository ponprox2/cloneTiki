import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleNext = () => {
    if (phone.length === 10) {
      dispatch({type: 'UPDATE_PHONE', phone: phone});
      navigation.navigate('VerifyLogin');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.img, {width: windowWidth}]}>
        <Image
          style={{width: windowWidth}}
          source={require('../../../assets/image/image1.png')}
        />
      </View>

      <View
        style={[styles.content, {width: windowWidth, height: windowHeight}]}>
        <Text style={styles.title}>Xin chào</Text>
        <Text style={styles.title1}>Đăng nhập hoặc tạo tài khoản</Text>

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          maxLength={12}
          placeholder="Số điện thoại"
          onChangeText={setPhone}
          value={phone}
        />
        <TouchableOpacity
          style={[
            styles.button,
            // {
            //   backgroundColor: phone ? '#16884A' : '#BFBFBF',
            //   shadowColor: phone ? 'green' : 'grey',
            // },
          ]}
          onPress={handleNext}>
          <Text style={styles.text}>Tiếp tục</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.skipText}></Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    zIndex: 2,
    position: 'absolute',
    marginTop: 130,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    // fontFamily: 'SF Pro Text',
    marginTop: 23,
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#2A2A2A',
  },
  input: {
    marginTop: 23,
    textAlign: 'center',
    height: 56,
    width: 319,
    borderWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.32)',
    borderRadius: 8,
    color: '#2A2A2A',
    fontWeight: '500',
    fontStyle: 'normal',

    // fontFamily: 'SF Pro Text',
  },
  button: {
    marginTop: 24,
    width: 319,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FAFAFA',
  },
  skipText: {
    marginTop: 24,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#16884A',
  },
  bottom: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   logo: {},
});
export default LoginScreen;
