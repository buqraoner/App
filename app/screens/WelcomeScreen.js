import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import AppText from '../components/AppText/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo2.png")}
                />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}>
                <AppText>Login</AppText>
            </View>
            <View style={styles.registerButton}>
                <AppText>Register</AppText>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "90%",
        height: 70,
        backgroundColor: "#fc5c65",
        borderRadius: 50,
        marginBottom: 15,
        justifyContent: "center",
    },
    registerButton: {
        width: "90%",
        height: 70,
        backgroundColor: "#4ecdc4",
        borderRadius: 50,
        marginBottom: 25,
        justifyContent: "center",
        textAlign: "center",
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    }
})


export default WelcomeScreen;