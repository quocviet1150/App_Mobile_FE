import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../component/CustomHeader';
import Footer from '../component/Footer';

const Department = ({ route, navigation }) => {
    const { id, name } = route.params;
    const nameDepartment = name || 'Phòng ban';

    return (
        <View style={styles.container}>
            <CustomHeader
                title= { nameDepartment }
                showBackButton={true}
                onBackPress={() => navigation.goBack()}
                onMenuPress={() => console.log('Menu pressed')}
            />
             <View style={styles.main}>ID phòng ban được chọn: {id}</View>
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

export default Department;
