import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import ImageInput from './../components/ImageInput';
import Screen from './../components/Screen';
import AppButton from './../components/AppButton';
import userApi from '../api/users';
import useAuth from './../auth/useAuth';
import UploadScreen from './UploadScreen';


const AccountEditScreen = ({ route }) => {
    const [imageUri, setImageUri] = useState('')
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const { logOut } = useAuth()

    useEffect(() => {
        const user = route.params
        setImageUri(user.image.url)
    }, [])



    const handleImageChange = (uri) => {
        setImageUri(uri)
    }

    const handleSubmitImage = async () => {
        setProgress(0)
        setUploadVisible(true);
        const response = await userApi.updateUserImage(imageUri, (progress) => setProgress(progress))


        if (!response.ok) {
            setUploadVisible(false)
            return Alert.alert("Error", "Could not Upload Image");
        }

        Alert.alert('ChangeImage', "You Have Login and Login For Changes to Take effect", [

            { text: "LogOut", onPress: () => logOut() },
            { text: "No" },
        ]
        )

    }

    return (
        <Screen>
            <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <View style={styles.container}>
                <ImageInput imageUri={imageUri} onChangeImage={handleImageChange} />
                <AppButton title={"submit image"} onPress={handleSubmitImage} />
            </View>
        </Screen>
    )
}

export default AccountEditScreen

const styles = StyleSheet.create({})