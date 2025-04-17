// CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const CustomHeader = ({ title, onBackPress, onMenuPress, showBackButton = true }) => {
  return (
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity onPress={onBackPress} style={styles.icon}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onMenuPress} style={styles.icon}>
        <Entypo name="dots-three-vertical" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    width: 30,
    alignItems: 'center',
  },
});

export default CustomHeader;
