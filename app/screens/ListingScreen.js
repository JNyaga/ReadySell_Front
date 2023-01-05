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
import SearchBar from '../components/SearchBar';

const Listingscreen = ({ navigation }) => {

    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)
    // console.log(listings[0]
    const [refreshing, setRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        loadListings()
    }, [])

    const filteredListings = listings.filter(
        listing => listing.title.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <>
            <AppActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && <>
                    <AppText>Couldn't recieve the listings</AppText>
                    <AppButton title="Retry" onPress={loadListings} />
                </>}
                {/* <ActivityIndicator animating={true} size="large" /> */}
                <SearchBar onChangeText={text => setSearchText(text)} searchText={searchText} />
                <FlatList
                    data={filteredListings}
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
        backgroundColor: colors.medium,
    },
})

export default Listingscreen;
