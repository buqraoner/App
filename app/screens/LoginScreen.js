import { StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode'

import Screen from '../components/Screen'
import colors from '../config/colors'
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/forms'
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})



const LoginScreen = (props) => {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
    };


    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Invalid email and/or password"
                    visible={loginFailed}
                />
                <AppFormField
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    name="email"
                />
                <AppFormField
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.light
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 25
    }

})