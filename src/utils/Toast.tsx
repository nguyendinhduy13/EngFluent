
import { Colors } from '@assets/colors';
import {
    BaseToast,
    ErrorToast,
    InfoToast,
} from 'react-native-toast-message';

export const ToastConfig = {
    success: (props: any) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: Colors.green1 }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 17,
            }}
            text2Style={{
                fontSize: 15,
            }}
        />
    ),
    info: (props: any) => (
        <InfoToast
            {...props}
            style={{ borderLeftColor: Colors.blue2 }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 17,
            }}
            text2Style={{
                fontSize: 15,
            }}
        />
    ),
    error: (props: any) => (
        <ErrorToast
            {...props}
            style={{ borderLeftColor: Colors.red1 }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 17,
            }}
            text2Style={{
                fontSize: 15,
            }}
        />
    ),
};