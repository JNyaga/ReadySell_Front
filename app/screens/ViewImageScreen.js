import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Image } from 'react-native-expo-image-cache';
import ImageZoom from 'react-native-image-pan-zoom';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const Viewimagescreen = ({ route, navigation }) => {
    const listing = route.params
    return (
        <View style={styles.container}>

            <View style={styles.closeIcon} >
                <AntDesign name="close" size={30} color={colors.secondary} onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.deleteIcon}>
                <AntDesign name="delete" size={30} color="red" />
            </View>

            <ImageZoom
                cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={400}
                imageHeight={400}>

                <Image
                    resizeMode="contain"
                    style={styles.image}
                    //   source={require("../assets/chair.jpg")}
                    preview={{ uri: listing.images[0].thumbnailUrl }}
                    uri={listing.images[0].url}
                    tint="light"
                />

            </ImageZoom>

        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
        zIndex: 1
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    deleteIcon: {
        top: 40,
        right: 30,
        position: 'absolute',
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default Viewimagescreen;
