// Dashboard.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import CustomHeader from './component/CustomHeader';
import Footer from './component/Footer';
import { TextInput } from 'react-native-paper';

const Dashboard = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const data = Array.from({ length: 40 }, (_, i) => ({
    id: `${i + 1}`,
    title: `Phòng ${i + 1}`,
  }));

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    console.log(item.title),
    <TouchableOpacity onPress={() => navigation.navigate('Department', { 
      id: item.id, 
      name: item.title 
    })}>
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Tổng quan"
        showBackButton={false}
        showInsertEmployeePress={true}
        onInsertEmployeePress={() => navigation.navigate('DepartmentDetail')}
      />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm phòng..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.main}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
        />
      </View>
      <Footer navigation={navigation} title="Dashboard" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '740px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    overflow: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default Dashboard;
