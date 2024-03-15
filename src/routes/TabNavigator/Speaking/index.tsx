
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "@routes/ScreenName";
import Topic from "@screens/Topic";
import React from "react";

const Stack = createNativeStackNavigator();

const SpeakingStack = () => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.Topic}>
            <Stack.Screen
                name={ScreenName.Topic}
                component={Topic}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default SpeakingStack;