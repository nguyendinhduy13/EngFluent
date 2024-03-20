
import { SPEAK_WITH_AI, TOPIC } from '@assets/index';
import IconView from '@components/IconView';
import { ToastError } from '@components/ToastMessage';
import Voice, { SpeechErrorEvent } from '@react-native-voice/voice';
import { getAnswerFromGpt } from '@services/OpenAiService';
import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tts from 'react-native-tts';
import { DataAction, dataAction } from './data';
import { IMessage } from './interface';
import styles from './styles';

const SpeakWithAI = ({ navigation }: any) => {
    const [active, setActive] = useState({
        iconId: 0,
        indexofmessage: 0,
    });

    const [recording, setRecording] = useState<boolean>(false);

    const [messages, setMessages] = useState<IMessage[]>([
        {
            _id: Math.round(Math.random() * 1000000),
            text: '',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'Assistant',
            },
            vietnamese: '',
            suggestions: [],
        },
    ]);

    const [loadingMessage, setLoadingMessage] = useState<boolean>(false);

    const listPrompt = useRef<any>([]);

    const flatListRef = useRef<any>(null);

    const [value, setValue] = useState<string>('');

    const onSend = async () => {
        const newMsg = [
            {
                _id: Math.round(Math.random() * 1000000),
                text: value,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'User',
                },
                vietnamese: '',
                suggestions: [],
            },
            {
                _id: Math.round(Math.random() * 1000000),
                text: '',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Assistant',
                },
                vietnamese: '',
                suggestions: [],
            },
        ];

        setMessages(previousMessages => [...previousMessages, ...newMsg]);
        await processTranscription(value);
        setValue('');
    };

    useEffect(() => {
        Tts.setDefaultLanguage('en-US');
        // init prompt
        processTranscription(
            'You are a salesperson in the Pini bakery in Munich, Germany. Start a conversation for level A1 of German. Ask the guest in German what he/she wants to buy?',
        );
    }, []);

    useEffect(() => {
        Voice.onSpeechStart = () => {
            setRecording(true);
        };

        Voice.onSpeechEnd = () => {
            setRecording(false);
        };

        Tts.addEventListener('tts-finish', event => {
            if (active.iconId === 1 || active.iconId === 2) {
                setActive({
                    iconId: 0,
                    indexofmessage: 0,
                });
            }
        });

        Voice.onSpeechError = (e: SpeechErrorEvent) => {
            const errMsg: string | undefined = e.error?.message;

            if (errMsg?.includes('No match')) {
                console.log('You are not speaking!');
            } else {
                console.log(errMsg);
            }

            setRecording(false);
        };

        Voice.onSpeechResults = (e: any) => {
            const prompt = e.value[0];
            setValue(prompt);
        };

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
            Tts.stop();
        };
    }, []);

    const stopRecording = async () => {
        try {
            await Voice.stop();
            setRecording(false);
        } catch (error: any) {
            console.log('== eror when stop: ', error);
        }
    };

    const startRecording = async () => {
        setRecording(true);
        Tts.stop();

        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    };

    const readTheAnswer = (message: string) => {
        Tts.speak(message);
    };

    const processTranscription = async (prompt: string) => {
        setLoadingMessage(true);
        if (prompt.trim().length > 0) {
            listPrompt.current = [
                ...listPrompt.current,
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
                    setLoadingMessage(false);
                    ToastError(
                        'Sorry, AI is not available now. Please try again later.',
                    );
                    return;
                }
                getAnswerFromGpt(listPrompt.current).then(async (res: any) => {
                    if (res.success) {
                        let countTranslate = 5;
                        let translate =
                            'Please translate this sentence from English to Vietnamese: ' +
                            res.data;
                        let suggestions =
                            'Provide me with three responses to this question, excluding special characters or numerical sequences at the beginning of the sentence, separate each response with a semicolon.' +
                            res.data;
                        const [answerTranslate, answerSuggestion] =
                            await Promise.all([
                                getAnswerFromAI(translate, countTranslate),
                                getAnswerFromAI(suggestions, countTranslate),
                            ]);
                        if (answerTranslate && answerSuggestion) {
                            let arrSuggestions = answerSuggestion.split(';');
                            setMessages(previousMessages => {
                                let newMessages = [...previousMessages];
                                newMessages[newMessages.length - 1].text =
                                    res.data;
                                newMessages[newMessages.length - 1].vietnamese =
                                    answerTranslate;
                                newMessages[
                                    newMessages.length - 1
                                ].suggestions = [...arrSuggestions];
                                return newMessages;
                            });
                        }
                        setLoadingMessage(false);
                        if (res.data) {
                            listPrompt.current = [
                                ...listPrompt.current,
                                {
                                    role: 'model',
                                    parts: [
                                        {
                                            text: res.data.trim(),
                                        },
                                    ],
                                },
                            ];
                            readTheAnswer(res.data);
                        }
                    } else {
                        getAnswer();
                        console.log(res.msg);
                        count--;
                    }
                });
            };
            getAnswer();
        }
    };

    const handleListen = (speed: number, indexofmessage: number) => {
        Tts.stop();
        Tts.setDefaultRate(speed);
        Tts.speak(messages[indexofmessage].text);
    };

    const getAnswerFromAI = async (
        message: string,
        count: number,
    ): Promise<string> => {
        let prompt = [
            {
                role: 'user',
                parts: [
                    {
                        text: message.trim(),
                    },
                ],
            },
        ];

        let answer;

        try {
            const res: any = await getAnswerFromGpt(prompt);
            if (res.success) {
                if (res.data) {
                    answer = res.data;
                } else {
                    answer = '';
                }
            } else {
                count--;
                if (count > 0) {
                    return await getAnswerFromAI(message, count);
                } else {
                    ToastError(
                        'Sorry, AI is not available now. Please try again later.',
                    );
                    answer = '';
                }
            }
        } catch (error) {
            console.error(error);
            answer = '';
        }
        return answer;
    };

    console.log(active, 'active');

    const handleIconClick = async (
        iconId: number,
        indexofmessage: number,
        key: string,
    ) => {
        if (
            iconId === active.iconId &&
            indexofmessage === active.indexofmessage &&
            (iconId === 3 || iconId === 4)
        ) {
            setActive({
                iconId: 0,
                indexofmessage: 0,
            });
            return;
        }
        setActive({
            iconId: iconId,
            indexofmessage: indexofmessage,
        });

        if (key === 'listen') {
            handleListen(0.6, indexofmessage);
        }

        if (key === 'suggest' && value) {
            setValue('');
        }

        if (key === 'listenSlow') {
            handleListen(0.4, indexofmessage);
        }
    };

    const RenderIcon = ({ indexOfMessage }: { indexOfMessage: number }) => {
        return (
            <View style={styles.wrapIcon}>
                {dataAction.map((item: DataAction, index: number) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            handleIconClick(item.id, indexOfMessage, item.key);
                        }}>
                        <Image
                            source={
                                active.iconId === item.id &&
                                    active.indexofmessage === indexOfMessage
                                    ? item.imageactive
                                    : item.imageinactive
                            }
                            style={[
                                {
                                    width: item.width,
                                    height: item.height,
                                },
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const renderMessage = (item: IMessage, index: number) => {
        if (item.user.name === 'Assistant') {
            return item._id === messages[messages.length - 1]._id &&
                loadingMessage ? (
                <View style={styles.wrapchat} key={'_' + item._id}>
                    <View style={styles.AIchat}>
                        <Text style={styles.loadingResult}>
                            Pini AI's typing...
                        </Text>
                    </View>
                    <Image source={SPEAK_WITH_AI.AI_ICON} style={styles.AIavatar} />
                </View>
            ) : (
                <View style={styles.wrapchat} key={'_' + item._id}>
                    <View style={styles.AIchat}>
                        <Text style={styles.contentChatAI}>{item.text}</Text>
                        {active.iconId === 3 && (
                            <>
                                <View style={styles.line} />
                                <Text style={styles.translateChatAI}>
                                    {item.vietnamese}
                                </Text>
                            </>
                        )}
                        <RenderIcon indexOfMessage={index} />
                    </View>
                    <Image source={SPEAK_WITH_AI.AI_ICON} style={styles.AIavatar} />
                </View>
            );
        } else {
            return (
                <View style={styles.wrapchat} key={'__' + item._id}>
                    <View style={styles.personchat}>
                        <Text style={styles.contentChatPerson}>
                            {item.text}
                        </Text>
                    </View>
                    <Image
                        source={SPEAK_WITH_AI.PERSON_ICON}
                        style={styles.personavatar}
                    />
                </View>
            );
        }
    };

    const handleScrollToEnd = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };

    const handleClickVoice = () => {
        if (recording) {
            stopRecording();
            setActive({
                iconId: 0,
                indexofmessage: 0,
            });
        } else {
            startRecording();
        }
    };

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={SPEAK_WITH_AI.BG_HEADERAI}
                style={styles.backgroundHeader}>
                <SafeAreaView>
                    <View style={styles.wrapHeader}>
                        <View style={styles.wrapTitle}>
                            <TouchableOpacity onPress={goBack}>
                                <IconView
                                    typeIcon={'MaterialIcons'}
                                    name={'arrow-back-ios'}
                                    size={28}
                                    style={styles.iconBack}
                                />
                            </TouchableOpacity>
                            <Image
                                source={TOPIC.TOPIC_IMAGE}
                                style={styles.imageLesson}
                            />
                            <View style={styles.wrapTextTitle}>
                                <Text style={styles.txtTitleLesson}>
                                    Ở tiệm trà sữa
                                </Text>
                                <Text style={styles.txtTitleAI}>
                                    Chat ngay với Pini AI
                                </Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
            <View style={styles.wrapSpeakAI}>
                <View
                    style={[
                        active.iconId === 4
                            ? styles.wrapConversation2
                            : value
                                ? styles.wrapConversation3
                                : styles.wrapConversation1,
                    ]}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        ref={flatListRef}
                        data={messages}
                        renderItem={({ item, index }) =>
                            renderMessage(item, index)
                        }
                        onContentSizeChange={handleScrollToEnd}
                    />
                </View>
                {active.iconId === 4 && (
                    <View style={styles.wrapSuggestions}>
                        <View style={[styles.line]} />
                        <Text style={styles.textTitleSuggestions}>
                            Một số gợi ý như sau:
                        </Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {messages[active.indexofmessage].suggestions.map(
                                (item: string, index: number) => (
                                    <View style={styles.wrapItem} key={index}>
                                        <Text style={styles.textSuggestions}>
                                            {item}
                                        </Text>
                                    </View>
                                ),
                            )}
                        </ScrollView>
                    </View>
                )}
                {value.length > 0 && (
                    <ScrollView style={styles.scrollResult}>
                        <Text style={styles.txtAsk}>
                            Có phải ý của bạn là:{' '}
                        </Text>
                        <View style={styles.wrapResult}>
                            <Text style={styles.textResult}>{value}</Text>
                            <TouchableOpacity
                                style={styles.btnDelete}
                                onPress={() => setValue('')}>
                                <Image
                                    source={SPEAK_WITH_AI.DELETE_ICON}
                                    style={styles.deleteIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )}
                {recording ? (
                    <>
                        <TouchableOpacity onPress={handleClickVoice}>
                            <Image
                                source={SPEAK_WITH_AI.WAVEFORM}
                                style={[
                                    styles.waveForm,
                                    {
                                        top: value ? 0 : 40,
                                    },
                                ]}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textWave}>
                            Đang ghi âm bấm để dừng
                        </Text>
                    </>
                ) : value.length > 0 ? (
                    <TouchableOpacity
                        style={styles.wrapSendIcon}
                        onPress={onSend}>
                        <Image
                            source={SPEAK_WITH_AI.SEND_ICON}
                            style={styles.sendIcon}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.btnVoice}
                        onPress={handleClickVoice}>
                        <Image
                            source={SPEAK_WITH_AI.VOICE_ICON}
                            style={styles.voiceIcon}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default SpeakWithAI;
