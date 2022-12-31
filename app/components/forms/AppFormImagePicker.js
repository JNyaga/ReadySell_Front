import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';


import ImageInputList from './../ImageInputList';
import ErrorMessages from './ErrorMessages';

const AppFormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    // console.log(values)
    const imageUris = values[name] === undefined ? [] : values[name]
    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri])
    }

    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri))
    }


    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={uri => handleAdd(uri)}
                onRemoveImage={uri => handleRemove(uri)}
            />
            <ErrorMessages error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormImagePicker

const styles = StyleSheet.create({})