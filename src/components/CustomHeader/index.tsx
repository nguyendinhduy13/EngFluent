import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import FontAwe5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';

interface Props {
    title?: string;
}
const CustomHeader: React.FC<Props> = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.header]}>
            <View
                style={[
                    styles.bgicon,
                ]}>

                <FontAwe5
                    name="chevron-left"
                    size={27}
                    color={"black"}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Text style={[styles.headerText, { color: "black" }]}>
                {title}
            </Text>
        </View>
    );
};
export default CustomHeader;


