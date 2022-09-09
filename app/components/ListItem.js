import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler/Swipeable'

import colors from '../config/colors'
import AppText from './AppText'

// </Swipeable>
function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
        >
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500",
        color: colors.black,
        marginTop: 7
    }
})

export default ListItem
