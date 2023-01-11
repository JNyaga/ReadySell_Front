import { StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    // this is a modified version of Fromik form for my app 
    return (
        <Formik
            initialValues={{ initialValues }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}

        </Formik>
    )
}

export default AppForm

const styles = StyleSheet.create({})