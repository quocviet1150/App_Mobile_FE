import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { passwordValidator } from '../helpers/passwordValidator'
import { userNameAndEmailValidator } from '../helpers/userNameAndEmailValidator'

export default function LoginScreen({ navigation }) {
  const [userNameOrEmail, setUserNameOrEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const passwordError = passwordValidator(password.value)
    const userNameAndEmailError = userNameAndEmailValidator(userNameOrEmail.value)
    if (passwordError || userNameAndEmailError) {
      setUserNameOrEmail({ ...userNameOrEmail, error: userNameAndEmailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

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
      <Button mode="contained" onPress={onLoginPressed}>
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
