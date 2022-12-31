import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { Feather } from '@expo/vector-icons';


const Listitemdeleteaction = ({ onPress }) => {
    return (
        // Deleting an  item wwe use touchable component
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Feather name="delete" size={34} color="white" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default Listitemdeleteaction;
