import React from 'react';
import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native';


import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';
import routes from '../navigation/routes';
import WelcomeScreens from '../components/WelcomeScreens';



function WelcomeScreen({ navigation }) {
    return (
        <WelcomeScreens
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
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate(routes.LOGIN_OR_REGISTER)}
            >
                <AntDesign
                    name="caretright"
                    size={50}
                    color="black"
                    style={styles.icon}
                />
            </TouchableWithoutFeedback>
        </WelcomeScreens>
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
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 15,
        color: colors.customgrey,
    },
    icon: {
        position: "absolute",
        bottom: 25,
        right: 10,
    }
})


export default WelcomeScreen;