import React, { useState } from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import { View } from 'react-native-web';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

export default function Profile({ navigation }) {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Topbar navigation={navigation} setSidebarVisible={setSidebarVisible}  name="Quản lý trang cá nhân"/>
        <Background>
          <Header>Let’s start</Header>
        </Background>
      </View>
      {sidebarVisible && <Sidebar setSidebarVisible={setSidebarVisible} navigation={navigation} />}
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