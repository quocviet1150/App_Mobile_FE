import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Footer = ({ navigation, title}) => {
  const [activeTab, setActiveTab] = useState(title);

  const handleNavigation = (tab, screen) => {
    setActiveTab(tab);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => handleNavigation('Dashboard', 'Dashboard')}>
        <View style={styles.iconContainer}>
          <Ionicons name="home-outline" size={24} color={activeTab === 'Dashboard' ? '#007bff' : '#333'} />
          <Text style={activeTab === 'Dashboard' ? styles.textActive : styles.text}>Phòng ban</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('Employee', 'Employee')}>
        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={24} color={activeTab === 'Employee' ? '#007bff' : '#333'} />
          <Text style={activeTab === 'Employee' ? styles.textActive : styles.text}>Nhân Viên</Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => handleNavigation('Permission', 'Permission')}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="assignment" size={24} color={activeTab === 'Permission' ? '#007bff' : '#333'} />
          <Text style={activeTab === 'Permission' ? styles.textActive : styles.text}>Quản lý phép</Text>
        </View>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => handleNavigation('More', 'More')}>
        <View style={styles.iconContainer}>
          <Ionicons name="menu" size={24} color={activeTab === 'More' ? '#007bff' : '#333'} />
          <Text style={activeTab === 'More' ? styles.textActive : styles.text}>Thêm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
  textActive: {
    fontSize: 12,
    color: '#007bff',
  },
});

export default Footer;
