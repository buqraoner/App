import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import routes from '../navigation/routes'
import useApi from '../hooks/useApi'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import Card from '../components/Card'
import AppButton from '../components/AppButton'
import ActivityIndicator from '../components/ActivityIndicator'
import WelcomeScreens from '../components/WelcomeScreens'


export default function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);
    useEffect(() => {
        getListingsApi.request();

    }, []);
    const refreshing = () => {
        getListingsApi.request();
    }


    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={getListingsApi.loading}
                    onRefresh={refreshing}
                />
            }
        >
            <WelcomeScreens
                colorsOne={colors.gainsboro}
                ColorsTwo={colors.gainsboro}
                colorsThree={colors.gainsboro}
                colorsFour={colors.gainsboro}
                locationsOne={-1}
                locationsTwo={2}
                locationsThree={-1}
                locationsFour={2}
                startX={0}
                endX={3}
                startY={-0.6}
                endY={0.1}
                style={styles.screen}>
                {getListingsApi.error && (
                    <>
                        <AppText style={styles.error}>
                            Couldn't retrieve the listings.
                        </AppText>
                        <AppButton title="Retry" onPress={getListingsApi.request} />
                    </>)}
                <ActivityIndicator
                    visible={getListingsApi.loading}
                    size="large"
                    color={colors.primary}
                />

                <FlashList
                    data={getListingsApi.data}
                    keyExtractor={(listing) => listing.id.toString()}
                    estimatedItemSize={250}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    )}
                />
            </WelcomeScreens>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    error: {
        color: colors.danger,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    }
})

