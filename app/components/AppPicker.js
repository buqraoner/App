import { StyleSheet, View, TouchableNativeFeedback, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import Screen from './Screen'
import PickerItem from './PickerItem'



function AppPicker({
    width = "100%",
    icon, items,
    placeholder, selectedItem,
    onSelectItem, numberOfColumns = 1,
    PickerItemComponent = PickerItem, }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={250} color={colors.medium}
                        style={styles.icon} />}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium} />
                </View>
            </TouchableNativeFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button
                        title="close"
                        onPress={() => setModalVisible(false)}
                    />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkgrey,
        borderRadius: 25,
        flexDirection: "row",
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