import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

import routes from '../navigation/routes'
import colors from '../config/colors'
import AppButton from '../components/AppButton'
import WelcomeScreens from '../components/WelcomeScreens'

export default function LoginOrRegisterScreen({ navigation }) {
    return (
        <WelcomeScreens
            colorsOne={colors.colorsONE}
            ColorsTwo={colors.colorsTWO}
            colorsThree={colors.colorsONE}
            colorsFour={colors.colorsTWO}
            locationsOne={-0.5}
            locationsTwo={0.5}
            locationsThree={0.5}
            locationsFour={0.9}
            startX={0.2}
            endX={2}
            startY={-0.6}
            endY={0.1}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.buttonContainer}>

                <AppButton
                    title="Login"
                    color="black" width='90%'
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <AppButton
                    title="Register"
                    onPress={
                        () => navigation.navigate(routes.REGISTER)}
                    color="customgrey" width='90%'
                />
            </View>
        </WelcomeScreens>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        padding: 20,
    },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 10,
        position: 'absolute',
        top: 70,
        borderColor: colors.customgrey,
    },
    logoContainer: {
        flex: 1,
        top: 70,
        alignItems: 'center',
        justifyContent: 'center',
    }


})