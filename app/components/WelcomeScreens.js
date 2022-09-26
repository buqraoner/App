import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function WelcomeScreens({ children,
    style, colorsOne,
    ColorsTwo, colorsThree,
    colorsFour, locationsOne,
    locationsTwo, locationsThree,
    locationsFour,
    startX, startY,
    endX, endY }) {
    return (
        <LinearGradient
            start={{ x: startX, y: startY }}
            end={{ x: endX, y: endY }}
            colors={[colorsOne, ColorsTwo, colorsThree, colorsFour]}
            locations={[locationsOne, locationsTwo, locationsThree, locationsFour]}
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