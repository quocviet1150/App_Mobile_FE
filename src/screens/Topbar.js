// Topbar.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Topbar = ({ navigation, setSidebarVisible, name }) => {
  return (
    <View style={styles.topbar}>
      <TouchableOpacity onPress={() => setSidebarVisible(true)}>
        <Icon name="menu" size={28} color="#fff" />
      </TouchableOpacity>

      <View style={styles.topbarCenter}>
        <Text style={styles.topbarText}>{name}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.menuIcon}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  topbar: {
    height: 60,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  topbarCenter: {
    flex: 1,
    alignItems: 'center',
  },
  topbarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
};

export default Topbar;
