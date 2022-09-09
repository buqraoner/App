import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppTextInput from './AppTextInput'

export default function AppFormField({ name, ...otherProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (
        <>
            <AppTextInput
                // icon="lock"
                // placeholder="Password"
                // autoCapitalize="none"
                // autoCorrect={false}
                // keyboardType="email-address"
                // textContentType="password"
                // secureTextEntry={true}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})