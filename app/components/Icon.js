import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function Icon({ name, size = 40, backgroundColor = "colors.white", iconColor = "#fff" }) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    )
}

const styles = StyleSheet.create({})