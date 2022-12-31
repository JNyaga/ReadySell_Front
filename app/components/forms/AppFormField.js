import { StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessages from './ErrorMessages'

const AppFormField = ({ name, width, ...otherProps }) => {
    const { errors, handleChange, setFieldTouched, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}      //{handleChange(name)}
                value={values[name]}
                width={width}
                {...otherProps}
            // placeholder="Email"
            // textContentType="emailAdress"
            />
            {/* {touched.email && <ErrorMessages error={errors.email} />} */}
            <ErrorMessages error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})