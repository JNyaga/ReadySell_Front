import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"

import colors from '../config/colors'

const ImageInput = ({ imageUri, onChangeImage }) => {
    useEffect(() => {
        requestPermission()
    }, [])

    //  Get user permisions
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted)
            alert('You need to enable permission to access the library.');
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,

            });
            if (!result.canceled) {
                onChangeImage(result.assets[0].uri);
            }

        } catch (error) {
            console.log("Error reading an image", error)
        }
    }

    const handlePress = () => {
        if (!imageUri) {
            selectImage()
        }
        else {
            Alert.alert('Delete', "Are you sure you want to delete this image?", [

                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" },
            ]
            )
        }

    }


    return (

        <TouchableWithoutFeedback onPress={handlePress}>

            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}

                {imageUri && < Image source={{ uri: imageUri }} style={styles.image} />}

            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: "hidden",
        margin: 10
    },
    image: {
        height: "100%",
        width: "100%"
    }
})