import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function WelcomeScreens({ children,
    style, colorsOne,
    ColorsTwo, colorsThree,
    colorsFour, locationsOne, }) {
    return (
        <LinearGradient
            start={{ x: 0.2, y: -0.6 }}
            end={{ x: 2., y: 0.1 }}
            colors={[colorsOne, ColorsTwo, colorsThree, colorsFour]}
            locations={[-0.2, 0.5, 0.5, 0.85]}
            style={styles.background}>
            <SafeAreaView style={[styles.screen, style]}>
                <View style={[styles.view, style]}>{children}</View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
    background: {
        flex: 1,

    },
})