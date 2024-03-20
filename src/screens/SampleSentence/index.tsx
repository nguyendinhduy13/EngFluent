
import { BACKGROUND, SPEAK_WITH_AI } from "@assets/index";
import CustomHeader from "@components/CustomHeader";
import { ScreenName } from "@routes/ScreenName";
import { getAnswerFromGpt } from "@services/OpenAiService";
import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ISampleSentence } from "./interface";
import styles from "./styles";

const SampleSentence = ({ navigation }: any) => {

        const [indexActive, setIndexActive] = useState<number | null>(null);

        const [data, setData] = useState<ISampleSentence[]>([]);

        const [loading, setLoading] = useState<boolean>(false);

        const getData = () => {
                let prompt = ""
                let listPrompt = [
                        {
                                role: 'user',
                                parts: [
                                        {
                                                text: prompt.trim(),
                                        },
                                ],
                        },
                ];
                let count = 5;
                const getAnswer = () => {
                        if (count <= 0) {

                                return;
                        }
                        getAnswerFromGpt(listPrompt).then(async (res: any) => {
                                if (res.success) {


                                } else {

                                }
                        });
                }
                getAnswer();
        }

        const RenderSentece = () => {
                return (
                        <View style={styles.wrapItem}>
                                <View style={styles.wrapSentence}>
                                        <Text style={styles.textSentence}>
                                                Herr Ober, die Speisekarte bitte!
                                        </Text>
                                        <Text style={styles.textVietnamese}>
                                                Ông Phục vụ, cho thực đơn nào!
                                        </Text>
                                </View>
                                <TouchableOpacity style={styles.btnAudio}>
                                        <Image
                                                source={SPEAK_WITH_AI.LISTEN_UNACTIVE}
                                                style={styles.imageAudio}
                                        />
                                </TouchableOpacity>
                        </View>
                )
        }

        const navigateToChatWithAI = () => {
                navigation.navigate(ScreenName.SpeakWithAI);
        }

        return (
                <ImageBackground
                        source={BACKGROUND.APP}
                        style={styles.container}
                >
                        <SafeAreaView style={styles.container}>
                                <CustomHeader title={'Các cụm từ thông dụng'} />
                                <RenderSentece />
                                {/* <FlatList /> */}
                                <View style={styles.wrapOption}>
                                        <Text style={styles.textQuestion}>Bạn có muốn học mẫu câu không?</Text>
                                        <View style={styles.wrapButton}>
                                                <TouchableOpacity style={styles.learnSampleButton}>
                                                        <Text style={styles.learnSampleText}>Học mẫu câu</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                        style={styles.chatAIButton}
                                                        activeOpacity={0.8}
                                                        onPress={navigateToChatWithAI}
                                                >
                                                        <Text style={styles.chatAItext}>Chat ngay</Text>
                                                </TouchableOpacity>
                                        </View>
                                </View>
                        </SafeAreaView>
                </ImageBackground>
        )
}

export default SampleSentence;