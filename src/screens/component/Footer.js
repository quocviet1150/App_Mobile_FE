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
          <Text style={activeTab === 'Dashboard' ? styles.textActive : styles.text}>Tổng quan</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('Document', 'Document')}>
        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={24} color={activeTab === 'Document' ? '#007bff' : '#333'} />
          <Text style={activeTab === 'Document' ? styles.textActive : styles.text}>Đơn từ</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('Timesheet', 'Timesheet')}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="assignment" size={24} color={activeTab === 'Timesheet' ? '#007bff' : '#333'} />
          <Text style={activeTab === 'Timesheet' ? styles.textActive : styles.text}>Bảng công</Text>
        </View>
      </TouchableOpacity>

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
