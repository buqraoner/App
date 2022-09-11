import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import colors from '../config/colors'
import AppButton from './AppButton'

export default function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext()
    return (
        <View>
            <AppButton title={title} onPress={handleSubmit} color="dark" />
        </View>
    )
}

const styles = StyleSheet.create({

})