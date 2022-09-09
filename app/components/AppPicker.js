import { StyleSheet, View, TouchableNativeFeedback, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import Screen from './Screen'



function AppPicker({ icon, items, placeholder }) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium}
                        style={styles.icon} />}
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium} />
                </View>
            </TouchableNativeFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title="close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <AppText>{item.label}</AppText>
                        }
                    />
                </Screen>
            </Modal>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})

export default AppPicker