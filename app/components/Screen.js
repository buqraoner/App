import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

export default function Screen({ children, style }) {
    return <SafeAreaView style={[styles.screen, style]}>
        <View style={style}>{children}</View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#f8f4f4",
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})