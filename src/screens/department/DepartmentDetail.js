import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../component/CustomHeader';
import Footer from '../component/Footer';
import { Picker } from 'react-native-web';
import Toast from 'react-native-toast-message';
import { apiGet } from '../../api/apiService';

const DepartmentDetail = ({ route, navigation }) => {
  const { type, id } = route.params;
  const [departmentName, setDepartmentName] = useState('');
  const [selectedManager, setSelectedManager] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});
  const [managers, setManagers] = useState([
    { id: '1', name: 'Nguyễn Văn A' },
    { id: '2', name: 'Trần Thị B' },
    { id: '3', name: 'Lê Văn C' },
  ]);
  const [screenTitle, setScreenTitle] = useState('');
  const [buttonName, setButtonName] = useState('');

  useEffect(() => {
    if (type === 'create') {
      setScreenTitle('Thêm phòng ban');
      setButtonName('Thêm mới');
    } else if (type === 'update') {
      setScreenTitle('Cập nhật phòng ban');
      setButtonName('Cập nhật');
      fetchDepartmentById();
    }
  }, [type]);

  const fetchDepartmentById = async () => {
    try {
      const res = await apiGet(`department/getDepartmentById/${id}`);
      if (res) {
        setDepartmentName(res.departmentName);
        setEmployeeCount(res.numberOfEmployees);
        setSelectedManager(res.headOfDepartment);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Có lỗi xảy ra',
          text2: 'Không tìm thấy phòng ban.',
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Có lỗi xảy ra',
        text2: 'Vui lòng thử lại sau.',
      });
    }
  };

    const handleSubmit = () => {
      const newErrors = {};

      if (!departmentName) {
        newErrors.departmentName = 'Tên phòng ban không được để trống.';
      } else if (departmentName.length > 255) {
        newErrors.departmentName = 'Tên phòng ban không được vượt quá 255 ký tự';
      }

      if (!selectedManager) {
        newErrors.selectedManager = 'Vui lòng chọn người quản lý.';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    };
    return (
      <View style={styles.container}>
        <CustomHeader
          title={screenTitle}
          showBackButton={true}
          onBackPress={() => navigation.goBack()}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.main}>
            <Text style={styles.label}>Tên phòng ban</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập tên phòng ban..."
              value={departmentName}
              onChangeText={setDepartmentName}
            />
            {errors.departmentName && (
              <Text style={styles.errorText}>{errors.departmentName}</Text>
            )}

            <Text style={styles.label}>Người quản lý</Text>
            <View style={styles.dropdown}>
              <Picker
                selectedValue={selectedManager}
                onValueChange={(itemValue) => setSelectedManager(itemValue)}
                style={styles.dropdownPicker}
              >
                <Picker.Item label="-- Chọn người quản lý --" value="" />
                {managers.map((manager) => (
                  <Picker.Item label={manager.name} value={manager.id} key={manager.id} />
                ))}
              </Picker>
            </View>
            {errors.selectedManager && (
              <Text style={styles.errorText}>{errors.selectedManager}</Text>
            )}

            <Text style={styles.label}>Số lượng nhân viên</Text>
            <TextInput
              style={styles.input}
              placeholder="Số lương nhân viên..."
              value={employeeCount}
              disabled={true}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{buttonName}</Text>
              </TouchableOpacity>
            </View>
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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'green',
      backgroundColor: '#fff',
    },
    buttonText: {
      color: 'green',
      fontSize: 16,
    },
    main: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
      color: '#555',
    },
    input: {
      height: 45,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginTop: 8,
      backgroundColor: '#f9f9f9',
      fontSize: 16,
    },
    dropdown: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 12,
      backgroundColor: '#f9f9f9',
      height: 50,
      justifyContent: 'center',
    },

    dropdownPicker: {
      color: '#333',
      fontSize: 16,
      border: 'none',
      backgroundColor: '#f9f9f9',
    },
    errorText: {
      fontSize: 14,
      color: 'red',
      marginTop: 5,
    },
  });

  export default DepartmentDetail;
