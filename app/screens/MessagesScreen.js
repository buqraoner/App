import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import ListItem from '../components/ListItem'
console.log(Constants.statusBarHeight);

import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/messagesScreen.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/messagesScreen.jpg")
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
        image: require("../assets/messagesScreen.jpg")
    },
]

export default function MessagesScreen() {
    const [refreshing, setRefreshing] = React.useState(false);
    const [messages, setMessages] = React.useState(initialMessages);
    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (

        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                        ItemSeparatorComponent={() => <ListItemSeparator />}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})