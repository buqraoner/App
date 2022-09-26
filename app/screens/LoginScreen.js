import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode'


import colors from '../config/colors'
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/forms'
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import WelcomeScreens from '../components/WelcomeScreens'



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})



const LoginScreen = ({ navigation }) => {
    auth
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
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
        >
            <AntDesign name="caretleft" style={{ position: 'absolute', margin: 10 }}
                size={35} color="black"
                onPress={() => (navigation.goBack())}
            />
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo.png")}
                />
            </View>
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <View style={styles.formContainer}>
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
                </View>
            </AppForm>
        </WelcomeScreens>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    formContainer: {
        width: "90%",
        padding: 20,
        marginBottom: 12,
        marginTop: 15,
        justifyContent: "center",
        alignSelf: "center",
        flex: 1,
    },
    logo: {
        width: 130,
        height: 130,
        alignSelf: "center",
        marginTop: 50,
        borderRadius: 100,
        position: "absolute",
        top: 70,
        borderColor: colors.customgrey,
        borderWidth: 5,

    },
})