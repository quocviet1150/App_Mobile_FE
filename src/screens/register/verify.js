import React, { useState } from 'react'
import Background from '../../components/Background'
import BackButton from '../../components/BackButton'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import { otpValidator } from '../../helpers/otpValidator'

export default function Verify({ navigation }) {
  const [otpCode, setOtpCode] = useState({ value: '', error: '' })

  const sendOtpCode = () => {

    const otpCodeError = otpValidator(otpCode.value)
    if (otpCodeError) {
        setOtpCode({ ...otpCode, error: otpCodeError })
        return
      }
     navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      })
  }

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
