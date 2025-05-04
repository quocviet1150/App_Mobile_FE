import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomHeader from '../component/CustomHeader';
import Footer from '../component/Footer';

const Permission = ({ navigation }) => {
    const [employees, setEmployees] = useState([]);
    const [searchText, setSearchText] = useState('');

    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <CustomHeader
                title="Quản lý phép"
                showBackButton={false}
            />

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Tìm kiếm nhân viên..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            <ScrollView>
                {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((emp) => (
                        <View key={emp.id} style={styles.main}>
                            <Image source={{ uri: emp.avatar }} style={styles.avatar} />

                            <View style={styles.info}>
                                <Text style={styles.text}>Tên: {emp.name}</Text>
                                <Text style={styles.text}>Lí do: {emp.gender}</Text>
                            </View>
                        </View>
                    ))
                ) : (
                    <View style={styles.noEmployee}>
                        <Text style={styles.noEmployeeText}>Không có nhân viên nào</Text>
                    </View>
                )}
            </ScrollView>
            <Footer navigation={navigation} title="Employee" />
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
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        marginLeft: 10,
        flex: 1,
    },
    text: {
        fontSize: 14,
    },
    salary: {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',
    },
    action: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 60,
    },
    position: {
        fontSize: 14,
        marginBottom: 5,
    },
    icons: {
        flexDirection: 'row',
    },
    noEmployee: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    noEmployeeText: {
        fontSize: 16,
        color: 'gray',
    },

});

export default Permission;