import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
