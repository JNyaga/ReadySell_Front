import { StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';

import AppPicker from './../AppPicker';
import ErrorMessages from './ErrorMessages';

const AppFormPicker = ({ items, name, numberOfColumns, width, PickerItemComponent, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessages error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker

const styles = StyleSheet.create({})