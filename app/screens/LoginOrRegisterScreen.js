import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

import routes from '../navigation/routes'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppButton from '../components/AppButton'
import WelcomeScreens from '../components/WelcomeScreens'

export default function LoginOrRegisterScreen() {
    return (
        <WelcomeScreens
            colorsOne={colors.primary}
            ColorsTwo={colors.secondary}
            colorsThree={colors.primary}
            colorsFour={colors.secondary}
        >
            <View style={styles.buttonContainer}>
                <AppButton title="Login"
                    onPress={() => console.log('Tapped')}
                    color="secondary" width='80%'
                />
                <AppButton title="Register"
                    onPress={() => console.log('Tapped')}
                    color="secondary" width='80%'
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
    },

})