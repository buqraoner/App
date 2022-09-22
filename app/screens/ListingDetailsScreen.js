import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { ListItem } from '../components/lists'
import AppText from '../components/AppText'

export default function ListingDetailsScreen({ route }) {
    const listing = route.params

    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
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
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
});