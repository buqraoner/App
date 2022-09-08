import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

export default function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    }
})