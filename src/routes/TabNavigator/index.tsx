
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScreenName } from "../ScreenName";
import Topic from "../../screens/Topic";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { BOTTOM_TAB } from "../../assets";
import { Colors } from "../../assets/colors";
import SpeakingStack from "./Speaking";


const Tab= createBottomTabNavigator();

const TabNavigator = () => {

        const handleTabBarIcon = (route: RouteProp<ParamListBase, string>,focused:boolean) => {
                let iconName;
                                                let name;
                                                switch (route.name) {
                                                        case ScreenName.SpeakingStack:
                                                                iconName = focused
                                                                        ? BOTTOM_TAB.TOPIC_ACTIVE
                                                                        : BOTTOM_TAB.TOPIC_UNACTIVE;
                                                                name = 'Topic';
                                                                break;
                                                        default:
                                                                iconName = focused
                                                                        ? BOTTOM_TAB.TOPIC_ACTIVE
                                                                        : BOTTOM_TAB.TOPIC_UNACTIVE;
                                                                name = 'Topic';
                                                                break;
                                                }
                                                return (
                                                        <View style={styles.tabStyle}>
                                                                <Image
                                                                        source={iconName}
                                                                        style={{
                                                                                width: 25,
                                                                                height: 20,
                                                                        }}
                                                                />
                                                                <Text
                                                                        style={[
                                                                                styles.tabText,
                                                                                {
                                                                                        color: focused
                                                                                                ? Colors.orange1
                                                                                                : Colors.gray1,
                                                                                },
                                                                        ]}>
                                                                        {name}
                                                                </Text>
                                                        </View>
                                                );
        }

        return (
                <View style={styles.container}>
                        <Tab.Navigator
                                initialRouteName={ScreenName.Topic}
                                screenOptions={({ route }) => ({
                                        tabBarIcon: ({ focused }) => {
                                                handleTabBarIcon(route, focused);
                                        },
                                        tabBarStyle: {
                                                height: 80,
                                                borderTopLeftRadius: 15,
                                                borderTopRightRadius: 15,
                                        },
                                })}>
                                <Tab.Screen
                                        name={ScreenName.SpeakingStack}
                                        component={SpeakingStack}
                                        options={{
                                                headerShown: false,
                                                tabBarShowLabel: false,
                                        }}
                                />

                        </Tab.Navigator>
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        tabStyle: {
                justifyContent: 'center',
                alignItems: 'center',
        },
        tabText: {
                top: 5,
                fontSize: 10,
                fontWeight: '700',
        },
});

export default TabNavigator;