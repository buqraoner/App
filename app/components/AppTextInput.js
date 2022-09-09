import { StyleSheet, View, Platform, TextInput } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium}
                style={styles.icon} />}
            <TextInput
                style={styles.textInput} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "colors.black",
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: "colors.dark",
    },
    icon: {}
})

export default AppTextInput