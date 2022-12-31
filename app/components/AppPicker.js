import { StyleSheet, Text, View, TextInput, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';
import defaultStlyes from './../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';




const AppPicker = ({
    icon,
    items,
    onSelectItem,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%",
    ...otherProps }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>

            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={28} color={colors.medium} style={styles.icon} />}

                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> :
                        <AppText style={styles.placeholder}>{placeholder}</AppText>}


                    <MaterialCommunityIcons name="chevron-down" size={28} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) =>
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }} />}

                    />
                </Screen>
            </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        // width: '100%',
        padding: 15,
        marginVertical: 10
    },

    icon: {
        marginRight: 10

    },
    placeholder: {
        color: defaultStlyes.colors.medium,
        flex: 1,

    },

    text: {
        flex: 1,
    },


})


export default AppPicker
