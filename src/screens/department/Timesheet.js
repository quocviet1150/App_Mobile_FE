import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ActivityIndicator, Button } from 'react-native';
import CustomHeader from '../component/CustomHeader';
import Footer from '../component/Footer';
import { TextInput } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';

const Timesheet = ({ route, navigation }) => {
    const { employeeId, name } = route.params;
    const nameEmployee = name || '';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Function to group data by date
    const groupByDate = (data) => {
        const grouped = {};
        data.forEach(item => {
            if (!grouped[item.date]) {
                grouped[item.date] = [];
            }
            grouped[item.date].push(item);
        });
        return grouped;
    };

    // Handle search by date
    const handleSearch = (date) => {
        const filtered = data.filter(item => item.date.includes(date));
        setFilteredData(filtered); // Update filtered data based on search
    };

    useEffect(() => {
        const mockData = [
            {
                avatar: 'https://photo.znews.vn/w960/Uploaded/mdf_eioxrd/2021_07_06/1q.jpg',
                name: 'Nguyễn Văn A',
                checkIn: '10:41',
                date: '2025-04-24',
            },
            {
                avatar: 'https://photo.znews.vn/w960/Uploaded/mdf_eioxrd/2021_07_06/1q.jpg',
                name: 'Nguyễn Văn B',
                checkIn: '08:26',
                date: '2025-04-25',
            },
            {
                avatar: 'https://photo.znews.vn/w960/Uploaded/mdf_eioxrd/2021_07_06/1q.jpg',
                name: 'Nguyễn Văn C',
                checkIn: '00:00',
                date: '2025-04-26',
            },
        ];

        setData(mockData);
        setLoading(false);
        setFilteredData(mockData);
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Đã có lỗi xảy ra: {error.message}</Text>
            </View>
        );
    }

    const groupedData = groupByDate(filteredData);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={nameEmployee}
                showBackButton={true}
                onBackPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.container}>
                <View style={styles.calendarContainer}>
                    <Calendar
                        onDayPress={(day) => {
                            setSelectedDate(day.dateString);
                            handleSearch(day.dateString);
                        }}
                        markedDates={{
                            [selectedDate]: { selected: true, selectedColor: 'blue' },
                        }}
                    />
                </View>
                {Object.keys(groupedData).length === 0 ? (
                    <Text style={styles.noDataText}>Không có dữ liệu chấm công cho ngày này</Text>
                ) : (
                    Object.keys(groupedData).map((date, index) => (
                        <View key={index} style={styles.dayContainer}>
                            <Text style={styles.dateText}>Ngày {date}</Text>
                            {groupedData[date].map((record, idx) => (
                                <View key={idx} style={styles.recordContainer}>
                                    <Image source={{ uri: record.avatar }} style={styles.avatar} />
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.positionText}>{record.name}</Text>
                                        <View style={styles.timeRow}>
                                            <Text style={styles.timeText}>{record.checkIn}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))
                )}
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
        padding: 4,
    },
    dayContainer: {
        marginBottom: 5,
        marginTop: 10,
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    recordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    positionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    timeText: {
        fontSize: 14,
        color: '#666',
        marginHorizontal: 2,
    },
    totalTimeContainer: {
        backgroundColor: '#DFF5E3',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    totalTimeText: {
        color: '#2DA94F',
        fontWeight: 'bold',
        fontSize: 14,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    noDataText: {
        fontSize: 16,
        color: '#f00',
        textAlign: 'center',
        marginTop: 20,
    },
    calendarContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },

});

export default Timesheet;
