import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText';

const PickerItem = ({ item, label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>
                {/* {label} */}
                {item.label}
            </AppText>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
})

export default PickerItem