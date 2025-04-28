import axios from 'axios';
import Toast from 'react-native-toast-message';

const API_BASE_URL = 'http://localhost:8085/api/';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const handleApiError = (error) => {
    console.error('API Error:', error);

    Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: error?.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại!',
    });

    throw error;
};

export const apiGet = async (url, params = {}) => {
    try {
        const response = await api.get(url, { params });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const apiPost = async (url, data = {}) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const apiPut = async (url, data = {}) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const apiDelete = async (url) => {
    try {
        const response = await api.delete(url);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};