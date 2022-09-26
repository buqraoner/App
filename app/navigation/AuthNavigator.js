import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginOrRegisterScreen from "../screens/LoginOrRegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    //Tüm ekranların headerini kaldırmak için options kısmına headerShown: false yazıyoruz.
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
        />
        <Stack.Screen name="LoginOrRegister" component={LoginOrRegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;
