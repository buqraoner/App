import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppTextInput'

export default function AppFormField({ name, width = "100%", ...otherProps }) {

    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext()
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
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})