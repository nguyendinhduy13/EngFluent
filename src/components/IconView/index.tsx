import React from 'react';
import { GestureResponderEvent, TextStyle } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconOcticons from 'react-native-vector-icons/Octicons';

interface IconViewProps {
    name?: string;
    size?: number;
    typeIcon?: 'AntDesign' | 'MaterialIcons' | 'Ionicons' | 'Octicons' | 'FontAwesome5' | 'Feather'| 'FontAwesome';
    style?: TextStyle;
    onPress?: (event: GestureResponderEvent) => void;
    color?: string
}

function IconView(props: IconViewProps) {
    let {
        name = 'cached',
        size = 32,
        typeIcon = 'AntDesign',
        style,
        onPress,
        color
    } = props;
    let Icon = IconAntDesign;
    switch (typeIcon) {
        case 'MaterialIcons':
            Icon = IconMaterialIcons;
            break;

        case 'Ionicons':
            Icon = IconIonicons;
            break;

        case 'FontAwesome':
            Icon = IconFontAwesome;
            break;

        case 'Octicons':
            Icon = IconOcticons;
            break;
        case 'FontAwesome5':
            Icon = IconFontAwesome5;
            break;
        case 'Feather':
            Icon = IconFeather;
            break;

        default:
            Icon = IconAntDesign;
            break;
    }
    return <Icon name={name} size={size} style={style} onPress={onPress} color={color} />;
}

export default IconView;
