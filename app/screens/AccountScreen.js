import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import ListItem from '../components/lists/ListItem'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import useAuth from '../auth/useAuth'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    }
]

export default function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth

    return (
        <Screen style={styles.screen}>
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
                            onPress={() => navigation.navigate(item.targetScreen)}
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
        backgroundColor: colors.lightgrey
    },
    container: {
        marginVertical: 20,
    }
})
