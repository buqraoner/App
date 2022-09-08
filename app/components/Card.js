import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import AppText from './AppText/AppText'

export default function Card({ title, subTitle, image }) {
    return (
        <View>
            <Image source={image} />
            <View style={detailsContainer}>
                <AppText>{title}</AppText>
                <AppText>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
    }
})