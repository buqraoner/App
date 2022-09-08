import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: "primary"
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: "secondary"
        }
    }
]

export default function AccountScreen() {
    return (
        <Screen styles={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Buğra Öner"
                    subTitle="buqraoner@gmail.com"
                    image={require("../assets/messagesScreen.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor="#ffe66d"
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.black
    },
    container: {
        marginVertical: 20,
    }
})
