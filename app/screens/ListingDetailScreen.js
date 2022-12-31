import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import AppText from '../components/AppText';
import colors from '../config/colors';

import Listitem from '../components/ListItem';
import ContactSellerForm from './../components/ContactSellerForm';
import routes from '../navigation/routes';

const Listingdetailscreen = ({ route, navigation }) => {
    const listing = route.params
    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <TouchableHighlight activeOpacity={0.7} underlayColor={colors.lightGrey} onPress={() => navigation.navigate(routes.VIEWING_SCREEN, listing)}>
                <Image
                    style={styles.image}
                    preview={{ uri: listing.images[0].thumbnailUrl }}
                    uri={listing.images[0].url}
                    tint="light" />
            </TouchableHighlight>

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> {listing.title}</AppText>
                <AppText style={styles.subTitle}>{listing.price}</AppText>
                <View style={styles.userContainer}>
                    <Listitem
                        imageUrl={listing.userId.image.url}
                        thumbnailUrl={listing.userId.image.thumbnailUrl}
                        title={listing.userId.name.toUpperCase()} subTitle="LOCATION"
                        onPress={() => navigation.navigate(routes.MAP_VIEW, listing)}
                    />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
            {/* <View style={styles.mapview} ></View> */}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    // mapview: {
    //     width: "100%",
    //     height: 200,
    //     backgroundColor: "blue",
    //     // paddingTop: 10
    // },
    subTitle: {
        color: colors.secondary,
        opacity: 0.8,
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24
    },
    userContainer: {
        marginVertical: 20,
        left: -20,

    }

})

export default Listingdetailscreen;
