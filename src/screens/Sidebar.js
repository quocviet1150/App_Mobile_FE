// Sidebar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const Sidebar = ({ setSidebarVisible, navigation }) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Pressable style={styles.overlay} onPress={() => setSidebarVisible(false)} />
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle} onPress={() => setSidebarVisible(false)}>
          Menu
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Dashboard'); setSidebarVisible(false); }}>
          <Text style={styles.sidebarItem}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Profile'); setSidebarVisible(false); }}>
          <Text style={styles.sidebarItem}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Settings'); setSidebarVisible(false); }}>
          <Text style={styles.sidebarItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#6200ee',
    flex: 1,
    width: 150,
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
  },
  sidebarTitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  sidebarItem: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 15,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
});

export default Sidebar;
