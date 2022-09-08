import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

export default function Screen({ children, style }) {
    return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})