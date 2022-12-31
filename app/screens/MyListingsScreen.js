import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import Screen from './../components/Screen';
import Card from './../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from './../components/AppText';
import AppButton from './../components/AppButton';
import AppActivityIndicator from './../components/AppActivityIndicator';
import useApi from './../hooks/useApi';


const MyListingsScreen = ({ navigation }) => {
    //request: loadListings> renaming request to loadListings functions
    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getUserListings)
    // console.log(listings[0])
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        loadListings()
    }, [])

    return (
        <>
            <AppActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && <>
                    <AppText>Couldn't recieve the listings</AppText>
                    <AppButton title="Retry" onPress={loadListings} />
                </>}
                {/* <ActivityIndicator animating={true} size="large" /> */}
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing._id}
                    renderItem={({ item }) =>
                        <Card title={item.title}
                            subtitle={"KSh " + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                    refreshing={refreshing}
                    onRefresh={() => {
                        loadListings()
                    }}
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.lightGrey,
    },
})

export default MyListingsScreen;
