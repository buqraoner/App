import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { ListItem, ListItemSeparator } from '../components/lists'
import AppText from '../components/AppText'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '../components/Icon'

export default function ListingDetailsScreen({ route }) {
    const listing = route.params
    const isLiked = false
    return (
        <View>
            <Image style={styles.image} source={{ uri: listing.images[0].url }} />
            <View style={styles.detailsContainer}>
                <View style={styles.detailsHeader}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <Icon name="heart" backgroundColor={colors.primary} size={35}
                    />
                </View>
                <View style={styles.priceContainer}>
                    <AppText style={styles.price}>${listing.price}</AppText>
                </View>
                <ListItemSeparator />
                <AppText style={styles.description}>{listing.description}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/messagesScreen.jpg")}
                        title="Buğra Öner"
                        subTitle="3 Listings"
                    />
                </View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 10,
    },
    userContainer: {
        marginVertical: 50,
    },
    detailsHeader: {
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    description: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "500",
    },
    title: {
        fontSize: 25,
        fontWeight: "650",
        marginLeft: 5,
        maxWidth: "75%",
    },
    price: {
        alignSelf: "flex-end",
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 25,
        marginRight: 8,
    },
    priceContainer: {
        flexDirection: "row",
        alignSelf: "flex-end",
    },

});