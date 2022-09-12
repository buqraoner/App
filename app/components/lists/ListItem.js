import { Swipeable } from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import colors from '../../config/colors'
import AppText from '../AppText'

import { MaterialCommunityIcons } from '@expo/vector-icons'

// </Swipeable> 
function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {

    return (
        <GestureHandlerRootView>
            <TouchableHighlight
                underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View styles={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name='chevron-right' color={colors.medium} size={25} />
                </View>
            </TouchableHighlight>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
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
