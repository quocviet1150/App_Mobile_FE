import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Chào mừng</Header>
      <Paragraph>
        <Paragraph>Chúng tôi rất vui được gặp bạn!</Paragraph>
        <Paragraph>Hãy đăng nhập hoặc đăng ký để tiếp tục.</Paragraph>
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Đăng nhập
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Đăng kí
      </Button>
    </Background>
  )
}
