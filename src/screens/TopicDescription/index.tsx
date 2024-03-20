import { BACKGROUND } from "@assets/index";
import CustomHeader from "@components/CustomHeader";
import IconView from "@components/IconView";
import { ScreenName } from "@routes/ScreenName";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";


const TopicDescription = ({ navigation }: any) => {

        const Description = ({ title, content }: { title: string, content: string }) => {
                return (
                        <View>
                                <Text>
                                        {title}
                                </Text>
                                <Text>
                                        {content}
                                </Text>
                        </View>
                )
        }

        const navigateToSampleSentence = () => {
                navigation.navigate(ScreenName.SampleSentence);
        }

        return (
                <ImageBackground
                        source={BACKGROUND.APP}
                        style={styles.container}>
                        <SafeAreaView
                                style={styles.container}
                        >
                                <CustomHeader title={'Ở tiệm trà sữa'} />
                                <View style={styles.wrapDescription}>
                                        <Text style={styles.title}>
                                                Miêu tả tình huống
                                        </Text>
                                        <Text style={styles.description}>
                                                Bạn đang gọi đồ uống tại quán trà sữa
                                        </Text>
                                </View>
                                <View style={styles.wrapDescription}>
                                        <Text style={styles.title}>
                                                Miêu tả tình huống
                                        </Text>
                                        <Text style={styles.description}>
                                                Bạn đang gọi đồ uống tại quán trà sữa
                                        </Text>
                                </View>
                                <View style={styles.wrapDescription}>
                                        <Text style={styles.title}>
                                                Bạn có thể nói gì trong tình huống này?
                                        </Text>
                                        <Text style={styles.description}>
                                                * Hỏi đối phương trà trong trà sữa là trà đen hay trà xanh ? {'\n'}{'\n'}
                                                * Yêu cầu trà sữa của bản thân phải ít đường, ít đá. {'\n'}{'\n'}
                                                * Hỏi đối phương có thể dùng phiếu giảm giá được không?
                                        </Text>
                                </View>

                                <TouchableOpacity
                                        style={styles.seeBtn}
                                        activeOpacity={0.8}
                                        onPress={navigateToSampleSentence}
                                >
                                        <Text style={styles.txtBtn}>
                                                Xem các cách biểu đạt thông dụng
                                        </Text>
                                        <View style={styles.wrapIcon}>
                                                <IconView
                                                        typeIcon="MaterialIcons"
                                                        name="arrow-forward-ios"
                                                        size={10}
                                                        style={styles.iconStyle}
                                                />
                                        </View>
                                </TouchableOpacity>
                        </SafeAreaView>
                </ImageBackground>
        );
};

export default TopicDescription;