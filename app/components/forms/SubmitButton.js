import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'

export default function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext()
    return (
        <View>
            <AppButton title={title} onPress={handleSubmit} color="black" />
        </View>
    )
}

