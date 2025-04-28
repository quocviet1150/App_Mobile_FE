import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { passwordValidator } from '../helpers/passwordValidator'
import { userNameAndEmailValidator } from '../helpers/userNameAndEmailValidator'
import Toast from 'react-native-toast-message'
import { apiPost } from '../api/apiService'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginScreen({ navigation }) {
  const [userNameOrEmail, setUserNameOrEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {

    const passwordError = passwordValidator(password.value);
    const userNameAndEmailError = userNameAndEmailValidator(userNameOrEmail.value);

    if (passwordError || userNameAndEmailError) {
      setUserNameOrEmail({ ...userNameOrEmail, error: userNameAndEmailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      const res = await apiPost('user/login', {
        usernameOrEmail: userNameOrEmail.value,
        password: password.value,
      });

      if (res && res.username) {
        AsyncStorage.setItem('auth_token', res.token)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Đăng nhập thất bại',
          text2: 'Vui lòng kiểm tra lại thông tin.',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Có lỗi xảy ra',
        text2: 'Vui lòng thử lại sau.',
      });
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Chào mừng bạn.</Header>
      <TextInput
        label="Email hoặc tên đăng nhập"
        returnKeyType="next"
        value={userNameOrEmail.value}
        onChangeText={(text) => setUserNameOrEmail({ value: text, error: '' })}
        error={!!userNameOrEmail.error}
        errorText={userNameOrEmail.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mật khẩu"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onSignUpPressed}>
        Đăng nhập
      </Button>
      <View style={styles.row}>
        <Text>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
