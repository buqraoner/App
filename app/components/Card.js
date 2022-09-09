import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subTitle}</AppText>
            </View>
        </View>
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