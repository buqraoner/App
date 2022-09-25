import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';



function WelcomeScreen({ navigation }) {
    return (
        <Screen
            colorsOne={colors.colorsONE}
            ColorsTwo={colors.colorsTWO}
            colorsThree={colors.colorsONE}
            colorsFour={colors.colorsTWO}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
            </View>
        </Screen>

    )
}


const styles = StyleSheet.create({
    logoContainer: {
        top: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 10,
        position: "absolute",
        top: 70,
        borderColor: colors.customgrey,
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 15,
        color: colors.customgrey,
    },
})


export default WelcomeScreen;