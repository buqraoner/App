import { StyleSheet, Image } from 'react-native'
import React from 'react'
import * as Yup from 'yup'


import Screen from '../components/Screen'
import colors from '../config/colors'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password")
})

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
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