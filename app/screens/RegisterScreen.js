import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';

import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

//Register Screen
const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password'),
});


export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});





