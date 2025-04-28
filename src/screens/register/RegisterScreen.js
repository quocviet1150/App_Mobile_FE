import React, { useState } from 'react'
import { StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/Background'
import Button from '../../components/Button'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import TextInputRegister from '../../components/TextInputRegister'
import { theme } from '../../core/theme'
import { emailValidator } from '../../helpers/emailValidator'
import { nameValidator } from '../../helpers/nameValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { userNameValidator } from '../../helpers/userNameValidator'
import { apiPost } from '../../api/apiService'
import Toast from 'react-native-toast-message'

export default function RegisterScreen({ navigation }) {
  const [lastName, setLastName] = useState({ value: '', error: '' })
  const [firstName, setFirstName] = useState({ value: '', error: '' })
  const [userName, setUserName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmPassword, setconfirmPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {
    const lastNameError = nameValidator(lastName.value)
    const firstNameError = nameValidator(firstName.value)
    const userNameError = userNameValidator(userName.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const confirmPasswordError = passwordValidator(confirmPassword.value)
    if (emailError || passwordError || firstNameError || confirmPasswordError || lastNameError || userNameError) {
      setLastName({ ...lastName, error: lastNameError })
      setFirstName({ ...firstName, error: firstNameError })
      setUserName({ ...userName, error: userNameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setconfirmPassword({ ...confirmPassword, error: confirmPasswordError })
      if (password.value !== confirmPassword.value) {
        setconfirmPassword({ ...confirmPassword, error: 'Mật khẩu không khớp' })
      }
      return
    }
    try {
      const res = await apiPost('user/register', {
        lastName: lastName.value,
        firstName: firstName.value,
        username: userName.value,
        email: email.value,
        password: password.value,
        repeatPassword: confirmPassword.value,
      });

      if (res && res.id) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Verify' }],
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Đăng ký thất bại',
          text2: res.message || 'Vui lòng thử lại.',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Đăng ký thất bại',
        text2: res.message || 'Vui lòng thử lại.',
      });
    }
  }

  return (
    <Background>
      <Header>Tạo tài khoản</Header>
      <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInputRegister
          label="Tên"
          returnKeyType="next"
          value={firstName.value}
          onChangeText={(text) => setFirstName({ value: text, error: '' })}
          error={!!firstName.error}
          errorText={firstName.error}
          style={{ marginRight: '1%' }}
        />

        <TextInputRegister
          label="Họ"
          returnKeyType="next"
          value={lastName.value}
          onChangeText={(text) => setLastName({ value: text, error: '' })}
          error={!!lastName.error}
          errorText={lastName.error}
          style={{ marginLeft: '1%' }}
        />
      </div>
      <TextInput
        label="Tên đăng nhập"
        returnKeyType="next"
        value={userName.value}
        onChangeText={(text) => setUserName({ value: text, error: '' })}
        error={!!userName.error}
        errorText={userName.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
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

      <TextInput
        label="Nhập lại mật khẩu"
        returnKeyType="done"
        value={confirmPassword.value}
        onChangeText={(text) => setconfirmPassword({ value: text, error: '' })}
        error={!!confirmPassword.error}
        errorText={confirmPassword.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Đăng kí
      </Button>
      <View style={styles.row}>
        <Text>Bạn đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
