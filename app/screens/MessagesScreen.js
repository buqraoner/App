import { FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
console.log(Constants.statusBarHeight);

import Screen from '../components/Screen'
import {
    ListItem,
    ListItemSeparator,
    ListItemDeleteAction
} from '../components/lists';


const initialMessages = [
    {
        id: 1,
        title: "Buğra Öner",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: require("../assets/messagesScreen.jpg")
    },
    {
        id: 2,
        title: "Buğra Öner",
        description: " Is this item still available?",
        image: require("../assets/messagesScreen.jpg")
    },
    {
        id: 3,
        title: "Buğra Öner",
        description: "I'm interested in this item. When will you be able to post it?",
        image: require("../assets/messagesScreen.jpg")
    },
]

function MessagesScreen(props) {
    const [refreshing, setRefreshing] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
    }


    return (

        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "Buğra Öner",
                            description: " Is this item still available?",
                            image: require("../assets/messagesScreen.jpg")
                        },
                    ])
                }}
            />
        </Screen>
    )
}

export default MessagesScreen