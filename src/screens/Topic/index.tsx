import { Colors } from "@assets/colors";
import { TOPIC } from "@assets/index";
import IconView from "@components/IconView";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import styles from "./styles";

const Topic = () => {

        const [defaultLevel, setDefaultLevel] = useState<number>(0);

        const level = [
                "Trình độ A1",
                "Trình độ A2",
                "Trình độ B1",
                "Trình độ B2",
                "Trình độ C1",
                "Trình độ C2"
        ]

        return (
                <View style={styles.container}>
                        <SafeAreaView style={styles.container}>
                                <View style={styles.header}>
                                        <View>
                                                <Text style={styles.textheader1}>Học hội thoại cùng AI</Text>
                                                <Text style={styles.textheader2}>Tự tin giao tiếp Tiếng Anh</Text>
                                        </View>
                                        <SelectDropdown
                                                data={level}
                                                defaultValueByIndex={defaultLevel}
                                                onSelect={(selectedItem, index) => {
                                                        setDefaultLevel(index);
                                                }}
                                                buttonStyle={styles.dropdown3BtnStyle}
                                                rowStyle={styles.dropdown3RowStyle}
                                                dropdownStyle={styles.dropDown}
                                                renderCustomizedButtonChild={(selectedItem) => {
                                                        return (
                                                                <View style={styles.dropdown3BtnChildStyle}>
                                                                        <Image source={TOPIC.FIRE_ICON} style={styles.iconFire} />
                                                                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'Sơ cấp'}</Text>
                                                                        <IconView
                                                                                name='caretdown'
                                                                                size={12}
                                                                                color={Colors.orange1}
                                                                                typeIcon='AntDesign'
                                                                        />
                                                                </View>
                                                        );
                                                }}
                                                buttonTextStyle={styles.dropdown3BtnTxt}
                                                renderCustomizedRowChild={(item) => {
                                                        return (
                                                                <View style={styles.dropdown3RowChildStyle}>
                                                                        <Text style={styles.dropdown3RowTxt}>{item}</Text>
                                                                </View>
                                                        );
                                                }}
                                        />
                                </View>
                        </SafeAreaView>
                </View>
        )
}

export default Topic;