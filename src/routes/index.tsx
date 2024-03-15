import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
                        </Stack.Navigator>
                </NavigationContainer>
        )
}

export default RootNavigator;