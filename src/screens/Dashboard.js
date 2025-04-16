// Dashboard.js
import React, { useState } from 'react';
import { View } from 'react-native';
import Topbar from './Topbar'; 
import Sidebar from './Sidebar';
import Background from '../components/Background'; 
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const Dashboard = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Topbar navigation={navigation} setSidebarVisible={setSidebarVisible} name="Trang chủ"/>

        <Background>
          <Logo />
          <Header>Let’s start</Header>
          <Paragraph>
            Your amazing app starts here. Open your favorite code editor and start editing this project.
          </Paragraph>
          <Button
            mode="outlined"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
            }
          >
            Logout
          </Button>
        </Background>
      </View>

      {sidebarVisible && <Sidebar setSidebarVisible={setSidebarVisible} navigation={navigation} />}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
  },
};

export default Dashboard;
