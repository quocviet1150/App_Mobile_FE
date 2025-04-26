// Dashboard.js
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomHeader from './component/CustomHeader';
import Footer from './component/Footer';

const Dashboard = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const data = Array.from({ length: 5 }, (_, i) => ({
    id: `${i + 1}`,
    title: `Phòng ${i + 1}`,
  }));

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    console.log(item.title),
    <TouchableOpacity onPress={() =>
      navigation.navigate('Department', {
        id: item.id,
        name: item.title
      })}>
      <View style={styles.item}>
        <View style={styles.row}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemText}>Số lượng: {item.employeeCount ?? 0}</Text>
            <Text style={styles.itemText}>Trưởng phòng: {item.managerName ?? 'Chưa có'}</Text>
          </View>
          <View style={styles.itemTitle}>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="trash-outline" size={16} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="create-outline" size={16} color="blue" onPress={() => navigation.navigate('DepartmentDetail', {
                type: 'update',
                id: item.id,
              })} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Tổng quan"
        showBackButton={false}
        showInsertEmployeePress={true}
        onInsertEmployeePress={() => navigation.navigate('DepartmentDetail', {
          type: 'create',
          id: null,
        })}
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
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    width: '15%',
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemInfo: {
    width: '80%',
    paddingLeft: 8,
  },

  itemText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Dashboard;
