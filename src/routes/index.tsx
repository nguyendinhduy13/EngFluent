import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SampleSentence from "@screens/SampleSentence";
import SpeakWithAI from "@screens/SpeakWithAI";
import TopicDescription from "@screens/TopicDescription";
import React from "react";
import { ScreenName } from "./ScreenName";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
        return (
                <NavigationContainer>
                        <Stack.Navigator initialRouteName={ScreenName.TabNavigator}>
                                <Stack.Screen
                                        name={ScreenName.TabNavigator}
                                        component={TabNavigator}
                                        options={{
                                                headerShown: false,
                                        }}
                                />
                                <Stack.Screen
                                        name={ScreenName.SampleSentence}
                                        component={SampleSentence}
                                        options={{
                                                headerShown: false,
                                        }}
                                />
                                <Stack.Screen
                                        name={ScreenName.TopicDescription}
                                        component={TopicDescription}
                                        options={{
                                                headerShown: false,
                                        }}
                                />
                                <Stack.Screen
                                        name={ScreenName.SpeakWithAI}
                                        component={SpeakWithAI}
                                        options={{
                                                headerShown: false,
                                        }}
                                />
                        </Stack.Navigator>
                </NavigationContainer>
        )
}

export default RootNavigator;