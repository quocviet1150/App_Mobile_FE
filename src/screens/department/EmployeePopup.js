import React, { useEffect, useState } from 'react';
import { Picker, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomHeader from '../component/CustomHeader';
import Footer from '../component/Footer';

const LEVEL = [
    { item: 'Giám đốc', id: 1 },
    { item: 'Trưởng phòng', id: 2 },
    { item: 'Phó phòng', id: 3 },
    { item: 'Quản lý', id: 4 },
    { item: 'Nhân Viên', id: 5 },
];

const DEPARTMENT = [
    { item: 'Phòng Kinh doanh', id: 1 },
    { item: 'Phòng Nhân sự', id: 2 },
    { item: 'Phòng IT', id: 3 },
    { item: 'Phòng Marketing', id: 4 },
    { item: 'Phòng Tài chính', id: 5 },
];

const EmployeePopup = ({ route, navigation }) => {
    const { id, type } = route.params;
    const [screenTitle, setScreenTitle] = useState('');
    const [buttonName, setButtonName] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeCode, setEmployeeCode] = useState('');
    const [salary, setSalary] = useState(null);
    const [level, setLevel] = useState(LEVEL[0]?.id || null);
    const [department, setDepartment] = useState(DEPARTMENT[0]?.id || null);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(1);
    const [sex, setSex] = useState(true);

    useEffect(() => {
        if (type === 'create') {
            setScreenTitle('Thêm nhân viên');
            setButtonName('Thêm mới');
        } else if (type === 'update') {
            setScreenTitle('Cập nhật nhân viên');
            setButtonName('Cập nhật');
        }
    });

    const handleSubmit = () => {
        console.log('Submit thành công:', {
            employeeName,
            employeeCode,
            salary,
            levelId: level,
            departmentId: department,
            status,
            sex
        });
        let tempErrors = {};

        if (!employeeName.trim()) {
            tempErrors.employeeName = 'Tên nhân viên không được để trống';
        } else if (employeeName.length > 255) {
            tempErrors.employeeName = 'Tên nhân viên không được vượt quá 255 ký tự';
        }

        if (!employeeCode.trim()) {
            tempErrors.employeeCode = 'Mã nhân viên không được để trống';
        } else if (employeeCode.length > 10) {
            tempErrors.employeeCode = 'Mã nhân viên không được vượt quá 10 ký tự';
        }

        if (!salary || isNaN(salary)) {
            tempErrors.salary = 'Mức lương phải là số và không được để trống';
        }

        if (!level) {
            tempErrors.level = 'Bạn phải chọn chức vụ';
        }
        if (!department) {
            tempErrors.department = 'Bạn phải chọn phòng ban';
        }

        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
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
            <ScrollView style={{ padding: 10 }}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Tên nhân viên"
                    value={employeeName}
                    onChangeText={(text) => { setEmployeeName(text); setErrors({ ...errors, employeeName: null }); }}
                />
                {errors.employeeName && <Text style={styles.errorText}>{errors.employeeName}</Text>}

                <TextInput
                    style={styles.inputText}
                    placeholder="Mã nhân viên"
                    value={employeeCode}
                    onChangeText={(text) => { setEmployeeCode(text); setErrors({ ...errors, employeeCode: null }); }}
                />
                {errors.employeeCode && <Text style={styles.errorText}>{errors.employeeCode}</Text>}

                <TextInput
                    style={styles.inputText}
                    placeholder="Mức lương"
                    value={salary}
                    onChangeText={(text) => { setSalary(text); setErrors({ ...errors, salary: null }); }}
                    keyboardType="numeric"
                />
                {errors.salary && <Text style={styles.errorText}>{errors.salary}</Text>}

                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.statusLabel}>Chọn chức vụ:</Text>
                    <Picker
                        selectedValue={level}
                        onValueChange={(itemValue) => {
                            setLevel(itemValue);
                            setErrors({ ...errors, level: null });
                        }}
                        style={styles.picker}
                    >
                        {LEVEL.map((levelOption) => (
                            <Picker.Item key={levelOption.id} label={levelOption.item} value={levelOption.id} />
                        ))}
                    </Picker>
                    {errors.level && <Text style={styles.errorText}>{errors.level}</Text>}
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.statusLabel}>Chọn phòng ban:</Text>
                    <Picker
                        selectedValue={department}
                        onValueChange={(itemValue) => {
                            setDepartment(itemValue);
                            setErrors({ ...errors, department: null });
                        }}
                        style={styles.picker}
                    >
                        {DEPARTMENT.map((departmentOption) => (
                            <Picker.Item key={departmentOption.id} label={departmentOption.item} value={departmentOption.id} />
                        ))}
                    </Picker>
                    {errors.department && <Text style={styles.errorText}>{errors.department}</Text>}
                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.statusLabel}>Trạng thái:</Text>
                    <Picker
                        selectedValue={status}
                        onValueChange={(itemValue) => setStatus(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Đang làm việc" value="1" />
                        <Picker.Item label="Nghỉ phép" value="2" />
                        <Picker.Item label="Nghỉ không phép" value="3" />
                        <Picker.Item label="Nghỉ việc" value="4" />
                        <Picker.Item label="Nghỉ thai sản" value="5" />
                    </Picker>
                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.statusLabel}>Giới tính:</Text>
                    <Picker
                        selectedValue={sex}
                        onValueChange={(itemValue) => setSex(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Nam" value="true" />
                        <Picker.Item label="Nữ" value="false" />
                    </Picker>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>{buttonName}</Text>
                    </TouchableOpacity>
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
    inputText: {
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
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
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 5,
        fontSize: 12,
    },
    statusLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
});

export default EmployeePopup;
