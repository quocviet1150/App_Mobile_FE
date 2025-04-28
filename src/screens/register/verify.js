import React, { useState } from 'react'
import Toast from 'react-native-toast-message'
import { apiPost } from '../../api/apiService'
import Background from '../../components/Background'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import TextInput from '../../components/TextInput'
import { otpValidator } from '../../helpers/otpValidator'

export default function Verify({ navigation }) {
  const [otpCode, setOtpCode] = useState({ value: '', error: '' })

  const sendOtpCode = async () => {
    const otpCodeError = otpValidator(otpCode.value);
    if (otpCodeError) {
      setOtpCode({ ...otpCode, error: otpCodeError });
      return;
    }

    try {
      const res = await apiPost('user/verify', {
        token: String(otpCode.value),
      });

      if (res && res.id) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Xác thực thất bại',
          text2: res.message || 'Vui lòng thử lại.',
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Có lỗi xảy ra, vui lòng thử lại.',
      });
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Xác thực OTP</Header>
      <TextInput
        label="Mã OTP"
        returnKeyType="done"
        value={otpCode.value}
        onChangeText={(text) => setOtpCode({ value: text, error: '' })}
        error={!!otpCode.error}
        errorText={otpCode.error}
        autoCapitalize="none"
        autoCompleteType="otpCode"
        textContentType="otpCodeAddress"
        keyboardType="otp-code-address"
        description="Bạn sẽ nhận được mã otp từ email của bạn."
      />
      <Button
        mode="contained"
        onPress={sendOtpCode}
        style={{ marginTop: 16 }}
      >
        Gửi
      </Button>
    </Background>
  )
}
