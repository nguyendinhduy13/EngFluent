import Toast from 'react-native-toast-message';

export const ToastSuccess = (text2: string) => {
    return Toast.show({
        position: 'bottom',
        type: 'success',
        text1: 'Thành công',
        text2,
    });
};

export const ToastError = (text2: string) => {
    return Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Lỗi',
        text2,
    });
};

export const ToastInfo = (text2: string) => {
    return Toast.show({
        position: 'bottom',
        type: 'info',
        text1: 'Thông báo',
        text2,
    });
};
