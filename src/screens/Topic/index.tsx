import { Colors } from "@assets/colors";
import { TOPIC } from "@assets/index";
import IconView from "@components/IconView";
import { ScreenName } from "@routes/ScreenName";
import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import styles from "./styles";

const Topic = ({ navigation }: any) => {

        const [defaultLevel, setDefaultLevel] = useState<number>(0);

        const level = [
                "Trình độ A1",
                "Trình độ A2",
                "Trình độ B1",
                "Trình độ B2",
                "Trình độ C1",
                "Trình độ C2"
        ]

        const goToTopicDetail = () => {
                navigation.navigate(ScreenName.TopicDescription);
        }

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
                                <ScrollView showsVerticalScrollIndicator={false}>
                                        <ImageBackground
                                                source={TOPIC.LIST_TOPIC}
                                                style={styles.listTopic}
                                        >
                                                <View style={styles.wrapAllTopic}>
                                                        <TouchableOpacity
                                                                style={styles.wrapTopic}
                                                                activeOpacity={0.8}
                                                                onPress={goToTopicDetail}
                                                        >
                                                                <View style={styles.wrapContentTopic}>
                                                                        <Image
                                                                                source={TOPIC.TOPIC_IMAGE}
                                                                                style={styles.topicImage}
                                                                        />
                                                                        <View style={styles.wrapDescription}>
                                                                                <View>
                                                                                        <Text style={styles.topicTitle}>Làm quen bạn mới</Text>
                                                                                </View>
                                                                                <Text style={styles.topicDescription}>
                                                                                        Giới thiệu bản thân một cách đơn giản và hỏi thông tin về người khác
                                                                                </Text>
                                                                        </View>
                                                                </View>
                                                                <View style={styles.wrapIcon}>
                                                                        <IconView
                                                                                typeIcon="MaterialIcons"
                                                                                name="arrow-forward-ios"
                                                                                size={10}
                                                                                style={styles.iconStyle}
                                                                        />
                                                                </View>
                                                        </TouchableOpacity>
                                                </View>
                                        </ImageBackground>
                                </ScrollView>
                        </SafeAreaView>
                </View>
        )
}

export default Topic;