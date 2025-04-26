import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CustomHeader from '../component/CustomHeader';
import Footer from '../component/Footer';

const EmployeePopup = ({ route, navigation }) => {
    const { employeeId, name } = route.params;
    const nameEmployee = name || '';

    return (
        <View style={styles.container}>
            <CustomHeader
                title={nameEmployee}
                showBackButton={true}
                onBackPress={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={styles.main}>
                    Thông tin nhân viên với ID: {employeeId}
                </View>
            </ScrollView>


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
    item: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
    },
    itemText: {
        fontSize: 16,
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});

export default EmployeePopup;
