import React, { useState } from 'react';
import { View } from 'react-native-web';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from './component/Footer';

export default function Profile({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Background>
          <Header>Let’s start</Header>
        </Background>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
  },
};