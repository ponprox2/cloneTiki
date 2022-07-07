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
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const phoneNumber = useSelector(state => state.personalInfo.phone);
  console.log(phoneNumber);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Phone', phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNext = () => {
    if (password === 'pon123') {
      storeData();
      navigation.navigate('BottomNav');
    }
    setErrorPassword(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.content, {width: windowWidth, height: windowHeight}]}>
        <Text style={styles.title}>Nhập mật khẩu</Text>
        <Text style={styles.title1}>
          Vui lòng nhập mật khẩu Tiki cho số điện thoại
        </Text>

        <Text style={styles.title1}>{phoneNumber}</Text>

        <TextInput
          //   keyboardType="numeric"
          style={styles.input}
          //   maxLength={12}
          secureTextEntry={true}
          placeholder="Mật khẩu"
          onChangeText={setPassword}
          value={password}
        />
        {errorPassword && (
          <Text style={styles.title2}>Vui lòng nhập lại mật khẩu!</Text>
        )}

        <TouchableOpacity style={[styles.button]} onPress={handleNext}>
          <Text style={styles.text}>Đăng nhập</Text>
        </TouchableOpacity>
        {/* <View>
          <TouchableOpacity>
            <Text>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View> */}
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
    paddingTop: 30,
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
    // marginTop: 24,
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
    position: 'absolute',
    bottom: 30,
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
  title2: {
    color: 'red',
    fontWeight: '500',
    fontSize: '16',
  },
});
export default LoginScreen;
