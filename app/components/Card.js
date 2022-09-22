
import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden",
        backgroundColor: colors.medium,
    },
    detailsContainer: {
        padding: 10,
        backgroundColor: colors.medium,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        marginBottom: 7,
        color: colors.white
    },
    subtitle: {

    }
})