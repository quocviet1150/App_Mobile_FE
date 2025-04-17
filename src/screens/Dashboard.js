// Dashboard.js
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CustomHeader from './component/CustomHeader';
import Footer from './component/Footer';

const Dashboard = ({ navigation }) => {
  const data = Array.from({ length: 40 }, (_, i) => ({
    id: `${i + 1}`,
    title: `Phòng ${i + 1}`,
  }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Tổng quan"
        showBackButton={false}
        onBackPress={() => navigation.goBack()}
        onMenuPress={() => console.log('Menu pressed')}
      />
      <View style={styles.main}>
        <FlatList
          data={data}
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
