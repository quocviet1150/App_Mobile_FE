// Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Overview')}>
        <View style={styles.iconContainer}>
          <Ionicons name="home-outline" size={24} color="#007bff" />
          <Text style={styles.textActive}>Tổng quan</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Documents')}>
        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={24} color="#333" />
          <Text style={styles.text}>Đơn từ</Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => console.log("Center Button")}>
        <View style={styles.centerButton}>
          <Ionicons name="add" size={28} color="#fff" />
        </View>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate('Timesheet')}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="assignment" size={24} color="#333" />
          <Text style={styles.text}>Bảng công</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('More')}>
        <View style={styles.iconContainer}>
          <Ionicons name="menu" size={24} color="#333" />
          <Text style={styles.text}>Thêm</Text>
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
  centerButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ff6600',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    elevation: 4,
  },
});

export default Footer;
