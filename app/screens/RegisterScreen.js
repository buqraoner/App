import React, { useState } from 'react';
import { Image, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import useApi from '../hooks/useApi';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import usersApi from '../api/users';

import WelcomeScreens from '../components/WelcomeScreens';
import colors from '../config/colors';
//Register Screen
const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error)
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }
        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );

        auth.logIn(authToken);
    };
    return (

        <WelcomeScreens
            colorsOne={colors.colorsFOUR}
            ColorsTwo={colors.colorsSIX}
            colorsThree={colors.colorsFOUR}
            colorsFour={colors.colorsSIX}
            locationsOne={-0.5}
            locationsTwo={0.5}
            locationsThree={0.5}
            locationsFour={0.9}
            startX={0.2}
            endX={2}
            startY={-0.6}
            endY={0.1}
            style={styles.container}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <View style={styles.formContainer}>
                    <ErrorMessage error={error} visible={error} />

                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                        textContentType="name"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                </View>
                <SubmitButton title="Register" />
            </AppForm>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}
            />

        </WelcomeScreens>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 70,
    },

});

export default RegisterScreen;






